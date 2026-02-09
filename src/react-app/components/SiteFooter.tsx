import { Phone, MapPin, Calendar, Instagram } from "lucide-react";
import { siteConfig } from "@/shared/config";

export const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h3 className="font-serif font-bold text-xl mb-2">MARIA FERNANDA</h3>
          <p className="text-sm text-background/80">
            Fisioterapia Especializada
          </p>
          <div className="flex gap-2 mt-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Currículo Lattes"
            >
              <img
                src="https://019c4468-522f-7347-9d0d-57e5850e439d.mochausercontent.com/lattes.svg"
                alt=""
                className="h-4 w-4 brightness-0 invert"
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.whatsapp.display}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.location.fullAddress}
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {siteConfig.schedule.text}
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-background/20 text-center text-xs text-background/70">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
