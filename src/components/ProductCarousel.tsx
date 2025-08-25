
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const products = [
    {
      image: "/lovable-uploads/f739240d-4f21-406c-b5eb-4df9ec0be138.png",
      alt: "Colar dourado com pingente de coração"
    },
    {
      image: "/lovable-uploads/a3e89972-6737-4e44-b77c-d4c33394ba5e.png",
      alt: "Pulseira prata com pingentes de coração"
    },
    {
      image: "/lovable-uploads/a36619ea-7426-47a6-bece-936cbc7a4c5b.png",
      alt: "Brincos dourados delicados"
    },
    {
      image: "/lovable-uploads/ae5fb967-2159-4e0a-aa1b-3ed6b3abd309.png",
      alt: "Conjunto infantil do Grêmio"
    },
    {
      image: "/lovable-uploads/f3d0909d-51b9-44f3-8df4-803a7a9fd5ed.png",
      alt: "Colar dourado com cruz e brincos de coração"
    },
    {
      image: "/lovable-uploads/ea7d2446-9dd6-422d-850a-a6af8c529b9a.png",
      alt: "Conjunto de lingerie azul"
    },
    {
      image: "/lovable-uploads/71fd0a74-ae46-42f6-9637-387839ef6626.png",
      alt: "Pulseira prata com pingente de patinha"
    },
    {
      image: "/lovable-uploads/442e1bcb-327f-466d-bc73-e5bed8aeaebd.png",
      alt: "Bombacha Xilena jeans"
    },
    {
      image: "/lovable-uploads/7feb11c5-8ec9-49d5-b45f-02f36c7753f4.png",
      alt: "Colar dourado com pingente de coração vazado"
    },
    {
      image: "/lovable-uploads/f45544aa-1fab-47f4-8dae-e9d8dbf4cdea.png",
      alt: "Conjunto infantil Internacional"
    },
    {
      image: "/lovable-uploads/c216cedf-27dd-4bcc-b29e-5cfb8fc48a44.png",
      alt: "Conjunto de lingerie vinho elegante"
    },
    {
      image: "/lovable-uploads/9439616b-c3f6-4f86-99fc-62f2d5c4b9c5.png",
      alt: "Anel dourado texturizado"
    }
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="group hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
