const steps = [
  {
    number: "01",
    title: "Avaliação Detalhada",
    description:
      "Entendemos a origem da dor, sua história clínica e avaliamos seu movimento biomecânico.",
  },
  {
    number: "02",
    title: "Plano Individual",
    description:
      "Definimos metas reais e exercícios específicos para o seu caso e rotina.",
  },
  {
    number: "03",
    title: "Evolução Contínua",
    description:
      "Reavaliações constantes para garantir sua progressão até a alta e autonomia.",
  },
];

export const StepsSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Como funciona o tratamento?
          </h2>
          <p className="text-muted-foreground">
            Sem fórmulas mágicas. Processo claro e estruturado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl md:text-7xl font-bold text-muted/20 absolute -top-8 -left-4 -z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 mt-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
