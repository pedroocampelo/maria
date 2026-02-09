import { Phone } from "lucide-react";
import { openWhatsApp } from "@/shared/config";

export const WhatsAppFab = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl z-40 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Abrir WhatsApp"
    >
      <Phone className="h-7 w-7" fill="currentColor" />
    </button>
  );
};
