
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4" />
            <span>Entre em Contato</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Estamos Aqui Para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco por WhatsApp, visite nossa loja física ou nos siga nas redes sociais. Estamos sempre prontas para atendê-la!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-purple-100 hover:border-purple-200 transition-colors">
                  <CardContent className="flex items-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <a 
                        href="https://wa.me/5551996111623" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        (51) 99611-1623
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover:border-purple-200 transition-colors">
                  <CardContent className="flex items-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a 
                        href="mailto:elisane.dossantos@yahoo.com.br"
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        elisane.dossantos@yahoo.com.br
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover:border-purple-200 transition-colors">
                  <CardContent className="flex items-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Endereço</h4>
                      <p className="text-muted-foreground">R. São José, 346 - Centro</p>
                      <p className="text-muted-foreground">Passo do Sobrado - RS, 96685-000</p>
                      <a 
                        href="https://share.google/PjLLlGDAvemn3qzQa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 text-sm transition-colors"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/lojas_santos0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
                  aria-label="Instagram da Loja Santos"
                >
                  <Instagram className="w-6 h-6 text-purple-600" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100086748441532" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors"
                  aria-label="Facebook da Loja Santos"
                >
                  <Facebook className="w-6 h-6 text-purple-600" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-6">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                <a 
                  href="https://wa.me/5551996111623" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato via WhatsApp"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <a 
                  href="https://share.google/PjLLlGDAvemn3qzQa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-purple-50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.123456789!2d-51.609722!3d-29.6908889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95193b3f4b5a1111%3A0x222222222222!2sR.%20S%C3%A3o%20Jos%C3%A9%2C%20346%20-%20Centro%2C%20Passo%20do%20Sobrado%20-%20RS%2C%2096685-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Loja Santos - R. São José, 346, Centro, Passo do Sobrado - RS"
                  ></iframe>
                </div>
                <div className="text-center mt-4">
                  <p className="text-muted-foreground mb-1">R. São José, 346 - Centro</p>
                  <p className="text-muted-foreground mb-2">Passo do Sobrado - RS, 96685-000</p>
                  <a 
                    href="https://share.google/PjLLlGDAvemn3qzQa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Business Info */}
            <Card className="mt-6 bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato conosco para conhecer nossos horários de atendimento
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-purple-300 text-purple-700 hover:bg-purple-100"
                  >
                    <a 
                      href="https://wa.me/5551996111623" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Entrar em contato para saber horários"
                    >
                      Consultar Horários
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
```
