
import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-900 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Loja Santos</span>
            </div>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Moda com história, feita com amor. Vestindo pessoas com qualidade, estilo e preços justos desde o início da nossa jornada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lojas_santos0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-800 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram da Loja Santos"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100086748441532" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-800 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook da Loja Santos"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("produtos");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Nossos Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("contato");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-300" />
                <a 
                  href="https://wa.me/5551996111623" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  (51) 99611-1623
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-300" />
                <a 
                  href="mailto:elisane.dossantos@yahoo.com.br"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  elisane.dossantos@yahoo.com.br
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-300 mt-0.5" />
                <div>
                  <p className="text-purple-200">Rua São José, 346</p>
                  <a 
                    href="https://share.google/PjLLlGDAvemn3qzQa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white text-sm transition-colors"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200 flex items-center">
              Feito com <Heart className="w-4 h-4 mx-1 text-purple-400" /> pela Loja Santos
            </p>
            <p className="text-purple-300 text-sm">
              CNPJ: 19.570.488/0001-10 | © 2024 Loja Santos - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
