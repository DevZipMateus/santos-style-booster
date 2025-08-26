
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      name: "Bolsas",
      folder: "bolsas",
      images: [
        "/lovable-uploads/bolsas/IMG-20250811-WA0021.jpg",
        "/lovable-uploads/bolsas/IMG-20250811-WA0022.jpg",
        "/lovable-uploads/bolsas/IMG-20250811-WA0023.jpg",
        "/lovable-uploads/bolsas/IMG-20250811-WA0024.jpg"
      ]
    },
    {
      name: "Infantil", 
      folder: "infantil",
      images: [
        "/lovable-uploads/infantil/IMG-20250605-WA0025.jpg",
        "/lovable-uploads/infantil/IMG-20250605-WA0028.jpg",
        "/lovable-uploads/infantil/IMG-20250605-WA0030.jpg",
        "/lovable-uploads/infantil/IMG-20250605-WA0031.jpg",
        "/lovable-uploads/infantil/IMG-20250819-WA0024(1).jpg",
        "/lovable-uploads/infantil/IMG-20250819-WA0025(1).jpg"
      ]
    },
    {
      name: "Semi Joias",
      folder: "joias", 
      images: [
        "/lovable-uploads/joias/IMG-20250715-WA0027(1).jpg",
        "/lovable-uploads/joias/IMG-20250715-WA0028(1).jpg",
        "/lovable-uploads/joias/IMG-20250715-WA0029(1).jpg",
        "/lovable-uploads/joias/IMG-20250715-WA0030(1).jpg",
        "/lovable-uploads/joias/IMG-20250715-WA0032(1).jpg",
        "/lovable-uploads/joias/IMG-20250715-WA0033(1).jpg"
      ]
    },
    {
      name: "Lingerie",
      folder: "lingerie",
      images: [
        "/lovable-uploads/lingerie/IMG-20250825-WA0115.jpg",
        "/lovable-uploads/lingerie/IMG-20250825-WA0116.jpg",
        "/lovable-uploads/lingerie/IMG-20250825-WA0117.jpg",
        "/lovable-uploads/lingerie/IMG-20250825-WA0118.jpg",
        "/lovable-uploads/lingerie/IMG-20250825-WA0119.jpg"
      ]
    },
    {
      name: "Masculino",
      folder: "masculinas",
      images: [
        "/lovable-uploads/masculinas/IMG-20250620-WA0019.jpg",
        "/lovable-uploads/masculinas/IMG-20250620-WA0020.jpg",
        "/lovable-uploads/masculinas/IMG-20250620-WA0024.jpg",
        "/lovable-uploads/masculinas/IMG-20250718-WA0048(1).jpg",
        "/lovable-uploads/masculinas/IMG-20250718-WA0049(1).jpg"
      ]
    },
    {
      name: "Feminino",
      folder: "roupas femininas",
      images: [
        "/lovable-uploads/roupas femininas/IMG-20250530-WA0054.jpg",
        "/lovable-uploads/roupas femininas/IMG-20250814-WA0034.jpg",
        "/lovable-uploads/roupas femininas/IMG-20250814-WA0035.jpg",
        "/lovable-uploads/roupas femininas/IMG-20250814-WA0036.jpg",
        "/lovable-uploads/roupas femininas/IMG-20250814-WA0037.jpg",
        "/lovable-uploads/roupas femininas/IMG-20250814-WA0038.jpg"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Produtos
            </h1>
            <p className="text-muted-foreground mt-2">
              Explore nossas categorias de produtos
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  {category.images.length > 0 && (
                    <img 
                      src={category.images[0]}
                      alt={`Produtos ${category.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {category.images.slice(1, 4).map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden rounded bg-gray-100">
                      <img 
                        src={image}
                        alt={`${category.name} ${imgIndex + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                  asChild
                >
                  <a 
                    href="https://wa.me/5551996111623" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Ver no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Encontrou o que procurava?
          </h3>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp para mais informações sobre nossos produtos, preços e disponibilidade.
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

export default Products;
