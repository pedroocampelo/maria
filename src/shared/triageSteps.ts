export const TRIAGE_STEPS = [
  {
    question: "Onde é a sua dor ou lesão principal?",
    key: "area" as const,
    options: [
      "Coluna (Costas/Pescoço)",
      "Joelho ou Quadril",
      "Ombro ou Braço",
      "Tornozelo ou Pé",
      "Pós-Cirúrgico / Outros",
    ],
  },
  {
    question: "Há quanto tempo você sente isso?",
    key: "time" as const,
    options: [
      "Recente (dias)",
      "Semanas",
      "Meses/Anos",
      "Não sei informar",
    ],
  },
  {
    question: "Qual é o seu objetivo principal?",
    key: "goal" as const,
    options: [
      "Aliviar dor",
      "Voltar ao esporte",
      "Pós-cirurgia",
      "Melhorar movimento",
    ],
  },
] as const;

export type TriageAnswers = {
  area: string;
  time: string;
  goal: string;
  name: string;
  phone: string;
};
