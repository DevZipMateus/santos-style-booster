
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryWomen = () => {
  const images = [
    "/lovable-uploads/roupas femininas/IMG-20250530-WA0054.jpg",
    "/lovable-uploads/roupas femininas/IMG-20250814-WA0034.jpg",
    "/lovable-uploads/roupas femininas/IMG-20250814-WA0035.jpg",
    "/lovable-uploads/roupas femininas/IMG-20250814-WA0036.jpg",
    "/lovable-uploads/roupas femininas/IMG-20250814-WA0037.jpg",
    "/lovable-uploads/roupas femininas/IMG-20250814-WA0038.jpg"
  ];

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
              Feminino
            </h1>
            <p className="text-muted-foreground mt-2">
              Roupas femininas
            </p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
              <CardContent className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={image}
                    alt={`Roupa feminina ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Gostou de alguma peça?
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

export default CategoryWomen;
