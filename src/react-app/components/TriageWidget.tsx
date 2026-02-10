import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { TRIAGE_STEPS, type TriageAnswers } from "@/shared/triageSteps";
import { openWhatsApp } from "@/shared/config";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";

export const TriageWidget = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<TriageAnswers>({
    area: "",
    time: "",
    goal: "",
    name: "",
    phone: "";
  });
  const [showReview, setShowReview] = useState(false);
  const [showNameForm, setShowNameForm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const currentStep = TRIAGE_STEPS[step];
  const totalSteps = TRIAGE_STEPS.length;

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [currentStep.key]: option };
    setAnswers(newAnswers);

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowReview(true);
    }
  };

  const handleEdit = (stepIndex: number) => {
    setShowReview(false);
    setShowNameForm(false);
    setStep(stepIndex);
  };

  const handleReviewConfirm = () => {
    setShowReview(false);
    setShowNameForm(true);
  };

  const handleNameSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSaving(true);

  // POST to API (don't block WhatsApp if this fails)
  try {
    await fetch("/api/triage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: answers.area,
        time: answers.time,
        goal: answers.goal,
        name: answers.name,
        phone: answers.phone, // <-- vai pro Sheets, mas não vai pro WhatsApp
      }),
    });
  } catch (error) {
    console.error("Failed to save triage:", error);
  }

  // Mensagem SEM telefone
  const message = `Olá! Me chamo ${answers.name}.
Fiz a triagem no site e gostaria de agendar uma avaliação.

Área: ${answers.area}
Tempo: ${answers.time}
Objetivo: ${answers.goal}`;

  setIsSaving(false);
  openWhatsApp(message);
};

  // Show review screen
  if (showReview) {
    return (
      <div className="space-y-6 animate-fade-in">
        <h4 className="text-2xl font-semibold text-foreground">
          Revise suas respostas
        </h4>

        <div className="space-y-4">
          {TRIAGE_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-4 border border-border flex justify-between items-start"
            >
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {s.question}
                </p>
                <p className="font-medium text-foreground">
                  {answers[s.key]}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleEdit(idx)}
                className="text-primary hover:text-primary"
              >
                Editar
              </Button>
            </div>
          ))}
        </div>

        <Button
          onClick={handleReviewConfirm}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          Confirmar e continuar
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Show name form
if (showNameForm) {
  return (
    <form onSubmit={handleNameSubmit} className="space-y-6 animate-fade-in">
      <h4 className="text-2xl font-semibold text-foreground">
        Último passo: Seus dados
      </h4>

      <Input
        type="text"
        required
        placeholder="Digite seu nome completo..."
        value={answers.name}
        onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
        className="text-base"
        disabled={isSaving}
      />

      <Input
        type="tel"
        required
        inputMode="tel"
        placeholder="Seu WhatsApp com DDD (ex.: 85 99999-9999)"
        value={answers.phone}
        onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
        className="text-base"
        disabled={isSaving}
        pattern="[\d\s()+-]{8,20}"
        title="Digite um número válido com DDD (apenas números e símbolos como espaço, +, (), -)."
      />

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        size="lg"
        disabled={isSaving}
      >
        {isSaving ? (
          "Enviando..."
        ) : (
          <>
            Enviar pelo WhatsApp
            <Phone className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

  // Show question steps
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-primary uppercase tracking-wider">
            Passo {step + 1} de {totalSteps}
          </span>
          <span className="text-muted-foreground">
            {Math.round(((step + 1) / totalSteps) * 100)}%
          </span>
        </div>
        <Progress
          value={((step + 1) / totalSteps) * 100}
          className="h-2"
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
        />
      </div>

      <h4 className="text-2xl md:text-3xl font-semibold text-foreground">
        {currentStep.question}
      </h4>

      <div className="grid gap-3">
        {currentStep.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option)}
            className="text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-accent transition-all text-foreground font-medium flex justify-between items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span>{option}</span>
            <ArrowRight
              className="h-5 w-5 opacity-0 group-hover:opacity-100 text-primary transition-opacity -translate-x-2 group-hover:translate-x-0"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
