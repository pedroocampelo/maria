import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/react-app/lib/utils";

const faqs = [
  {
    question: "Você aceita convênio?",
    answer:
      "Trabalho com sistema particular e forneço recibo para solicitação de reembolso junto ao seu convênio, garantindo assim a qualidade e o tempo necessário para um atendimento individualizado.",
  },
  {
    question: "Quanto tempo dura a sessão?",
    answer:
      "As sessões têm duração média de 50 a 60 minutos, sendo o tempo integralmente dedicado a você.",
  },
  {
    question: "Preciso levar exames?",
    answer:
      "Sim, se você tiver exames de imagem (Ressonância, Raio-X) ou encaminhamento médico, é muito importante trazê-los na primeira avaliação para complementar o diagnóstico.",
  },
  {
    question: "Qual a roupa adequada?",
    answer:
      "Recomendo roupas leves que permitam movimento e avaliação da área afetada (shorts, legging, top, camiseta esportiva).",
  },
];

const FaqItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-5 text-left font-medium text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>
      {isOpen && (
        <div
          id={id}
          className="p-5 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border bg-accent/50"
        >
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
};

export const FaqSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              id={`faq-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
