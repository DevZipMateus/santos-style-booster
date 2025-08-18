
import { Heart, Users, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Nossa História</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Moda com História, Feita com Amor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Loja Santos nasceu com um propósito simples, mas cheio de amor: vestir pessoas com qualidade, estilo e preços justos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Uma Jornada de Dedicação
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Começamos pequenos, com muita dedicação, trabalhando dia após dia para oferecer o melhor a cada cliente que cruzava nosso caminho. Nossa missão sempre foi clara: proporcionar moda de qualidade que valorize a personalidade única de cada pessoa.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hoje, continuamos com o mesmo carinho e atenção personalizada que nos trouxe até aqui, expandindo nossa linha de produtos mas mantendo sempre nossos valores fundamentais: amor, qualidade e preços justos.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Amor</h4>
                <p className="text-sm text-muted-foreground">Em cada peça selecionada</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Qualidade</h4>
                <p className="text-sm text-muted-foreground">Produtos selecionados</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Dedicação</h4>
                <p className="text-sm text-muted-foreground">Atendimento personalizado</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Venha nos Visitar</h4>
                  <p className="text-muted-foreground mb-6">
                    Estamos localizados no coração da cidade, prontos para atendê-la com carinho e atenção.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <p className="font-semibold text-foreground">Rua São José, 346</p>
                    <p className="text-muted-foreground">Venha conhecer nossa loja física</p>
                  </div>
                  <a 
                    href="https://share.google/PjLLlGDAvemn3qzQa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Mapa
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2020</div>
            <div className="text-muted-foreground">Ano de Fundação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">+1000</div>
            <div className="text-muted-foreground">Clientes Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-muted-foreground">Produtos Únicos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};
