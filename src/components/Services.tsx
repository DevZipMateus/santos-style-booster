
import { Shirt, Baby, Gem, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductCarousel } from "./ProductCarousel";
import { Link } from "react-router-dom";

export const Services = () => {
  const products = [
    {
      icon: Shirt,
      title: "Moda Feminina",
      description: "Roupas elegantes e modernas para mulheres que valorizam estilo e conforto. Peças cuidadosamente selecionadas para realçar sua beleza natural.",
      features: ["Vestidos", "Blusas", "Calças", "Saias", "Casacos"]
    },
    {
      icon: Shirt,
      title: "Moda Masculina", 
      description: "Peças masculinas com qualidade e estilo para homens modernos. Roupas que combinam elegância e praticidade para o dia a dia.",
      features: ["Camisas", "Camisetas", "Calças", "Bermudas", "Jaquetas"]
    },
    {
      icon: Baby,
      title: "Moda Infantil",
      description: "Roupas fofas e confortáveis para os pequenos. Peças pensadas especialmente para o conforto e alegria das crianças.",
      features: ["Conjuntos", "Vestidos", "Camisetas", "Shorts", "Pijamas"]
    },
    {
      icon: Heart,
      title: "Lingeries",
      description: "Peças íntimas delicadas e confortáveis que valorizam a feminilidade com elegância e sofisticação.",
      features: ["Sutiãs", "Calcinhas", "Conjuntos", "Camisolas", "Pijamas"]
    },
    {
      icon: Gem,
      title: "Semi Joias Banhadas",
      description: "Acessórios únicos e elegantes que complementam seu visual. Peças banhadas com qualidade e durabilidade.",
      features: ["Colares", "Brincos", "Pulseiras", "Anéis", "Conjuntos"]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-purple-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shirt className="w-4 h-4" />
            <span>Nossos Produtos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Moda Para Toda a Família
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Oferecemos uma linha completa de produtos para vestir toda a família com estilo, qualidade e preços justos.
          </p>
          
          {/* Botão Ver Todos os Produtos */}
          <div className="mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              <Link to="/produtos">
                Ver Todos os Produtos
              </Link>
            </Button>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="mb-16">
          <ProductCarousel />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground mb-2">Produtos inclusos:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Encontre Seu Estilo Perfeito
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra nossa coleção completa. Atendimento personalizado para ajudar você a encontrar exatamente o que procura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-purple-50 text-purple-700 hover:text-purple-800"
            >
              <a 
                href="https://wa.me/5551996111623" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp para ver produtos"
              >
                Ver Produtos no WhatsApp
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/60 text-white bg-white/10 hover:bg-white hover:text-purple-700 hover:border-white transition-all duration-200"
            >
              Visitar Loja Física
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
