import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dra. Maria Fernanda Mendonça de Sousa - Fisioterapia",
  description:
    "Fisioterapia humana com base científica em Fortaleza. Especialista em traumato-ortopedia, tendinopatias e reabilitação funcional.",
  telephone: "+5585999999999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  medicalSpecialty: "Fisioterapia Traumato-Ortopédica",
  areaServed: {
    "@type": "City",
    name: "Fortaleza",
  },
};

// Inject JSON-LD
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
