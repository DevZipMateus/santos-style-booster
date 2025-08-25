
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
      {/* Botão principal */}
      <div className="relative group">
        <div className="flex flex-col space-y-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a
            href="https://wa.me/5551996111623"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="WhatsApp (51) 99611-1623"
          >
            <img 
              src="/lovable-uploads/66931381-e99b-4ae3-8a67-a194be0f555a.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://wa.me/5551989861664"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="WhatsApp (51) 98986-1664"
          >
            <img 
              src="/lovable-uploads/66931381-e99b-4ae3-8a67-a194be0f555a.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
        </div>
        
        <a
          href="https://wa.me/5551996111623"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle hover:animate-none"
          aria-label="Entrar em contato via WhatsApp"
        >
          <img 
            src="/lovable-uploads/66931381-e99b-4ae3-8a67-a194be0f555a.png"
            alt="WhatsApp"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </div>
  );
};
