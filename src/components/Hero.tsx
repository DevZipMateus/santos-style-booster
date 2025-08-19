
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Moda com História</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Loja <span className="text-purple-600">Santos</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                Feita com Amor
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Vestimos pessoas com qualidade, estilo e preços justos. Uma jornada que começou pequena, mas cresceu com muito amor e dedicação para cada cliente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
              >
                <a 
                  href="https://wa.me/5551996111623" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato via WhatsApp para conhecer nossos produtos"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Conheça Nossos Produtos
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById("sobre");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 text-lg border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Nossa História
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-purple-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">+1000</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-muted-foreground">Categorias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-muted-foreground">Qualidade</div>
              </div>
            </div>
          </div>

          {/* Video Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto max-h-96 object-cover"
                  onError={(e) => {
                    console.error('Erro ao carregar vídeo:', e);
                    console.log('Caminho do vídeo: /lovable-uploads/galeria/Venha conferir a promoção de verão!☀️✨20%.mp4');
                  }}
                  onLoadStart={() => {
                    console.log('Iniciando carregamento do vídeo');
                  }}
                  onCanPlay={() => {
                    console.log('Vídeo carregado com sucesso');
                  }}
                >
                  <source src="/lovable-uploads/galeria/Venha conferir a promoção de verão!☀️✨20%.mp4" type="video/mp4" />
                  
                  {/* Fallback para quando o vídeo não carrega */}
                  <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ShoppingBag className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Promoção de Verão</h3>
                      <p className="text-purple-100">Vídeo em carregamento...</p>
                    </div>
                  </div>
                </video>
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
                
                {/* Video Badge */}
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-3 h-3 inline mr-1" />
                  Promoção de Verão
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-6 h-6 text-purple-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
