import { ArrowRight, CheckCircle } from "lucide-react";
import { openWhatsApp } from "@/shared/config";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Hero Text */}
        <div className="w-full md:w-1/2 space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1]">
            Fisioterapia <span className="text-primary italic">humana</span> com
            base científica.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Do alívio da dor ao retorno da sua funcionalidade. Um plano de
            tratamento individualizado, desenhado para o seu corpo e sua rotina,
            por uma especialista em traumato-ortopedia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => openWhatsApp()}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25"
            >
              Agendar Avaliação
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-accent"
            >
              <a href="#triagem">Fazer triagem rápida</a>
            </Button>
          </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
          <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-card shadow-2xl">
            <img
              src="https://019c4468-522f-7347-9d0d-57e5850e439d.mochausercontent.com/header.webp"
              alt="Dra. Maria Fernanda - Fisioterapeuta"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
