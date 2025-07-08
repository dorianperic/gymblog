import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "This gym transformed my life! Amazing trainers and clean equipment.",
  },
  {
    name: "David Lee",
    text: "I love the community vibe here. It feels like home.",
  },
  {
    name: "Samantha Ray",
    text: "Incredible classes and very supportive staff. Highly recommend!",
  },
  {
    name: "Mark Chen",
    text: "Modern facilities and 24/7 access. It doesn't get better than this.",
  },
  {
    name: "Jenna Smith",
    text: "Fantastic value for the price. The app makes everything so easy.",
  },
];

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <Card className="bg-[#1a1a1a] text-white h-full border border-y-1  border-x-0 rounded-none border-white bg-black">
      <CardContent className="p-6 h-full flex flex-col justify-between items-center">
        <div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <p className="text-lg font-bold mb-4 italic">&quot;{text}&quot;</p>
        </div>
        <p className="text-sm font-semibold text-right">— {name}</p>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <main className="bg-black">
      <h1 className="text-center text-4xl py-24 font-bold">
        What do our mebmers say about us?
      </h1>
      <div className="w-full bg-black py-10 px-4">
        {/* Desktop Grid: Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-32 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} name={t.name} text={t.text} />
          ))}
        </div>
        {/* Mobile Carousel: Hidden on md and up */}
        <div className="relative md:hidden w-full flex justify-center">
          <Carousel className="w-full max-w-sm relative">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <TestimonialCard name={t.name} text={t.text} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Positioned arrows */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black" />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
