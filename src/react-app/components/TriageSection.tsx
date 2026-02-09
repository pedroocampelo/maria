import { TriageWidget } from "./TriageWidget";

export const TriageSection = () => {
  return (
    <section id="triagem" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-10 -mt-10"></div>

          <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              Não sabe qual o tratamento ideal?
            </h3>
            <p className="text-muted-foreground">
              Responda 3 perguntas rápidas e inicie sua conversa já com as
              informações certas.
            </p>
          </div>

          <TriageWidget />
        </div>
      </div>
    </section>
  );
};
