import { Phone } from "lucide-react";
import { openWhatsApp } from "@/shared/config";
import { Button } from "./ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Cuide do seu corpo com quem estuda para isso.
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Não conviva com a dor. Agende sua avaliação e inicie seu processo de
          recuperação com segurança.
        </p>
        <Button
          onClick={() => openWhatsApp()}
          size="lg"
          className="bg-background text-primary hover:bg-background/90 shadow-xl"
        >
          <Phone className="mr-2 h-5 w-5" />
          Conversar no WhatsApp
        </Button>
      </div>
    </section>
  );
};
