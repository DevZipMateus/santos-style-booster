
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src="/lovable-uploads/c21a5667-8200-4e39-9353-93deaadfbafc.png" 
                alt="Loja Santos - Moda com história, feita com amor"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Sobre
            </button>
            <Link 
              to="/produtos"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Produtos
            </Link>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <a 
                href="https://wa.me/5551996111623" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp"
              >
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Sobre
              </button>
              <Link 
                to="/produtos"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <button 
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contato
              </button>
              <div className="px-4">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <a 
                    href="https://wa.me/5551996111623" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
