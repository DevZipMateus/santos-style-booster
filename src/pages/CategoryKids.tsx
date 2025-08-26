
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryKids = () => {
  const images = [
    "/lovable-uploads/infantil/IMG-20250605-WA0025.jpg",
    "/lovable-uploads/infantil/IMG-20250605-WA0028.jpg",
    "/lovable-uploads/infantil/IMG-20250605-WA0030.jpg",
    "/lovable-uploads/infantil/IMG-20250605-WA0031.jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0024(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0025(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0026(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0027(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0028(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0029(1).jpg",
    "/lovable-uploads/infantil/IMG-20250819-WA0031(1).jpg"
  ];

  const handleQuoteRequest = (productNumber: number) => {
    const message = `Olá! Gostaria de solicitar um orçamento para Roupas Infantis - Produto ${productNumber}`;
    const whatsappUrl = `https://wa.me/5551996111623?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <Link to="/produtos">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Infantil
            </h1>
            <p className="text-muted-foreground mt-2">
              Roupas para os pequenos
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
              <CardContent className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
                  <img 
                    src={image}
                    alt={`Roupa infantil ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay with Quote Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => handleQuoteRequest(index + 1)}
                      className="bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Encontrou algo para o seu pequeno?
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp para mais informações sobre tamanhos, preços e disponibilidade.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white hover:bg-purple-50 text-purple-700 hover:text-purple-800"
          >
            <a 
              href="https://wa.me/5551996111623" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryKids;
