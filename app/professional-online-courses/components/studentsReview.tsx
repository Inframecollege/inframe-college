"use client";

import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "../components/ui/carousel";
// import { Card } from "../components/ui/card";
// import { testimonials } from "../utils/constant";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../../../components/ui/carousel";
import { testimonials } from "../../../utils/constant";
import { Card } from "../../../components/ui/card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function StudentReviewCarrousal() {
return (
  <div className="w-full min-w-full mx-auto py-16 px-4 lg:px-0 animate-slide-up-smooth">

    {/* Header Section */}
    <div className="mb-6 text-center max-w-3xl mx-auto">
      <h2
        className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${poppins.className}`}
      >
        Student Success Stories
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        Discover how our platform has transformed the learning journey
        of thousands of students.
      </p>
    </div>

    <Carousel
      className="w-full"
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Card className="border-none shadow-lg shadow-black/10 hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative h-[450px] lg:h-[500px] rounded-3xl overflow-hidden group">

                {/* Image */}
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 pt-24">

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-white/90 text-lg leading-relaxed line-clamp-4 mb-4">
                    {`"${testimonial.feedback}"`}
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-400">Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Progress indicator */}
      <div className="mt-10 flex justify-center gap-3">
        {[...Array(Math.ceil(testimonials.length / 4))].map((_, i) => (
          <div
            key={i}
            className="w-20 h-2 rounded-full bg-gray-300 overflow-hidden"
          >
            <div className="w-full h-full bg-blue-600 transform origin-left scale-x-0 animate-[progress_4s_ease-in-out_infinite]"></div>
          </div>
        ))}
      </div>
    </Carousel>
  </div>
);

}
