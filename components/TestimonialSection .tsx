"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import { Card } from "../components/ui/card";
import Image from "next/image";
import { testimonials } from "../utils/constant";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import Autoplay from "embla-carousel-autoplay";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 lg:px-8">
      <h2 className={`text-3xl lg:text-4xl font-bold text-left mb-8 ${poppins.className}`}>
        What Our Students Say
      </h2>

      {/* ShadCN Carousel with Autoplay Plugin */}
      <Carousel
        className="w-full"
        orientation="horizontal"
        plugins={[
          Autoplay({
            delay: 4000, // Autoplay delay of 4 seconds
          }),
        ]}
      >
        <CarouselContent className="flex">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 p-4" // Responsive basis for layout
            >
              <Card>
                <div className="relative h-[450px] font-sans lg:h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-800 group">
                  {/* Image */}
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    layout="fill"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-95"></div>
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <h3 className="text-2xl font-semibold mb-1">{testimonial.name}</h3>
                    <p className="text-base  italic font-semibold text-justify" >{testimonial.feedback}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        {/* <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full md:left-8 lg:left-16">
          {/* Add icon or text for Previous button */}
          {/* &lt; */}
        {/* </CarouselPrevious> */}
        {/* <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full md:right-8 lg:right-16"> */}
          {/* Add icon or text for Next button */}
          {/* &gt; */}
        {/* </CarouselNext> */}
      </Carousel>
    </div>
  );
}
