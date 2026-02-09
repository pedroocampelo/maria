import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { TriageSection } from "./components/TriageSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { StepsSection } from "./components/StepsSection";
import { ServicesSection } from "./components/ServicesSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { SiteFooter } from "./components/SiteFooter";
import { WhatsAppFab } from "./components/WhatsAppFab";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Pular para o conteúdo principal
      </a>

      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <StepsSection />
        <FeaturesSection />
        <ServicesSection />
        <TriageSection />
        <FaqSection />
        <CtaSection />
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
};

export default App;
