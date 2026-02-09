import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/shared/config";
import { Button } from "./ui/button";

const services = [
  {
    title: "Avaliação Biomecânica e Funcional",
    description:
      "O primeiro passo. Análise detalhada de movimento, força e queixas para traçar o diagnóstico fisioterapêutico preciso.",
  },
  {
    title: "Tratamento de Tendinopatias",
    description:
      "Expertise acadêmica em tendões. Protocolos específicos para controle de carga e exercícios terapêuticos.",
  },
  {
    title: "Fisioterapia Traumato-Ortopédica",
    description:
      "Reabilitação de fraturas, entorses, dores na coluna e desequilíbrios musculares com foco em função.",
  },
  {
    title: "Reabilitação Esportiva e Retorno",
    description:
      "Preparação segura para voltar a praticar sua atividade física após uma lesão, amador ou profissional.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Especialidades
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Como posso ajudar você hoje?
            </h2>
          </div>
          <Button
            onClick={() => openWhatsApp()}
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80"
          >
            Agendar Avaliação
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-border pb-6 last:border-b-0 hover:bg-background hover:px-4 hover:rounded-xl transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button onClick={() => openWhatsApp()} className="w-full" size="lg">
            Agendar Avaliação
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
