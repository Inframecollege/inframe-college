import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { cards } from "../utils/constant";
import { Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LifeAtInframe = () => {
  return (
   <section className="py-12 sm:py-16 font-sans relative overflow-hidden">
  <div className="px-4 sm:px-6 lg:pl-[calc(((95vw-1200px)/2)+1rem)] lg:pr-0">
    {/* Section Header */}
    <div className="mb-8 sm:mb-12 max-w-3xl">
      <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-600 mb-2">
        OUR CULTURE
      </h3>
      <h2
        className={`text-xl sm:text-2xl md:text-3xl font-bold text-left ${poppins.className}`}
      >
        Life @ Inframe
      </h2>
      <p
        className={`text-left text-sm sm:text-base md:text-lg text-gray-600 mt-3 leading-relaxed ${poppins.className}`}
      >
        Experience a vibrant, collaborative environment at Inframe where
        creativity and innovation thrive.
      </p>
    </div>

    {/* Carousel */}
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 sm:-ml-6">
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="pl-4 sm:pl-6 basis-full sm:basis-1/2 md:basis-[380px] lg:basis-[400px]"
          >
            <Card className="h-[380px] sm:h-[450px] md:h-[550px] overflow-hidden border-0 shadow-lg rounded-xl bg-transparent relative text-white group">
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:grayscale-0 grayscale transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>
              </div>

              {/* Card Content */}
              <CardContent className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold leading-tight mb-2 sm:mb-3">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-300 leading-snug">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</section>

  );
};

export default LifeAtInframe;
