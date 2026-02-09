import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { openWhatsApp } from "@/shared/config";
import { Button } from "./ui/button";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-xl font-serif font-bold text-foreground tracking-wide">
            MARIA FERNANDA
          </h1>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            Fisioterapia Especializada
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#sobre"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Tratamentos
          </a>
          <a
            href="#como-funciona"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Como Funciona
          </a>
          <Button
            onClick={() => openWhatsApp()}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            Agendar Avaliação
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border p-6 flex flex-col gap-4 shadow-xl">
          <a
            href="#sobre"
            className="text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Tratamentos
          </a>
          <a
            href="#como-funciona"
            className="text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </a>
          <Button
            onClick={() => openWhatsApp()}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            Agendar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};
