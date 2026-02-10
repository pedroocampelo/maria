export const siteConfig = {
  name: "Dra. Maria Fernanda Mendonça de Sousa",
  shortName: "Maria Fernanda",
  role: "Fisioterapeuta",
  specialty: "Traumato-Ortopedia Funcional",
  crefito: "CREFITO-6/123456-F", // Update with real number
  
  whatsapp: {
    number: "5585997311529", // International format
    display: "(85) 99731-1529", // Human readable
  },
  
  social: {
    instagram: "https://instagram.com/mafemendonca.fisio",
    lattes: "http://lattes.cnpq.br/4041585296448897",
  },
  
  location: {
    city: "Fortaleza",
    state: "CE",
    neighborhood: "Centro",
    address: "Rua Exemplo, 123",
    fullAddress: "Fortaleza - CE",
  },
  
  schedule: {
    text: "Atendimento com hora marcada",
    hours: "Segunda a Sexta, 8h às 18h",
  },
  
  seo: {
    title: "Dra. Maria Fernanda - Fisioterapia Traumato-Ortopédica | Fortaleza - CE",
    description: "Fisioterapia humana com base científica em Fortaleza. Especialista em traumato-ortopedia, tendinopatias e reabilitação funcional.",
  },
};

export const openWhatsApp = (message?: string) => {
  const defaultMessage = "Olá! Gostaria de agendar uma avaliação.";
  const text = encodeURIComponent(message || defaultMessage);
  const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
