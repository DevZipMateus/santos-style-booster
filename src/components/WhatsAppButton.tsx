
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      <a
        href="https://wa.me/5551996111623"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </div>
  );
};
