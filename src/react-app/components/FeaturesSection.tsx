import { Activity, Award, Heart, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const features = [
  {
    icon: Activity,
    title: "Dores Crônicas",
    description:
      "Tratamento para dores persistentes na coluna, pescoço e articulações.",
  },
  {
    icon: Award,
    title: "Tendinopatias",
    description:
      "Protocolos atuais do Tendon Research Group para tendões (Ombro, Aquiles, Patelar).",
  },
  {
    icon: Heart,
    title: "Reabilitação Funcional",
    description:
      "Para voltar a andar, correr ou trabalhar sem sentir dor ou limitação.",
  },
  {
    icon: User,
    title: "Pós-Operatório",
    description:
      "Segurança total na reabilitação após cirurgias ortopédicas complexas.",
  },
  {
    icon: Activity,
    title: "Lesões Esportivas",
    description:
      "Entorses, distensões e sobrecargas em atletas amadores ou profissionais.",
  },
  {
    icon: Activity,
    title: "Joelho e Quadril",
    description:
      "Especialidade em condromalácia, artrose e instabilidades articulares.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Recuperar seu movimento é nossa prioridade
        </h2>
        <p className="text-muted-foreground">
          Atendimento especializado para quem busca segurança e resolução em
          traumato-ortopedia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="border-border hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
