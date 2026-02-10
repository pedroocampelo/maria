import { ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/shared/config";

const credentials = [
  "Graduada em Fisioterapia pela UFC",
  "Mestre em Fisioterapia e Funcionalidade pela UFC",
  "Especialista em Fisioterapia Traumato-Ortopédica Funcional (Residência UEL)",
  "Atuação clínica com foco em reabilitação",
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-foreground text-background relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-background/20">
            <img
              src="https://019c4468-522f-7347-9d0d-57e5850e439d.mochausercontent.com/about.jpg"
              alt="Maria Fernanda atendendo"
              className="w-full h-auto transition-all duration-500"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Sobre a Dra. Maria Fernanda
          </h2>
          <div className="w-16 h-1 bg-primary"></div>

          <p className="text-background/80 leading-relaxed text-lg">
            Acredito que a fisioterapia vai muito além de tratar uma lesão: é
            sobre devolver a autonomia. Minha atuação profissional integra avaliação 
            funcional, planejamento terapêutico individualizado e acompanhamento contínuo.
          </p>

          <p className="text-background/70 leading-relaxed">
            Graduada pela Universidade Federal do Ceará (UFC), busquei
            aprofundar meus conhecimentos práticos através da{" "}
            <strong>
              Residência em Traumato-Ortopedia Funcional na UEL (Londrina).
            </strong>{" "}
            Além disso, sou{" "}
            <strong>
              mestre em Fisioterapia
            </strong>{" "}
             pela UFC.
          </p>

          <p className="text-background/70 leading-relaxed">
           Hoje, divido minha rotina entre os atendimentos clínicos particulares pela manhã e os atendimentos na Clínica Qorpo à tarde.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/80 text-sm font-medium">
                  {credential}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a
              href={siteConfig.social.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors border-b border-primary pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver Currículo Lattes Completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
