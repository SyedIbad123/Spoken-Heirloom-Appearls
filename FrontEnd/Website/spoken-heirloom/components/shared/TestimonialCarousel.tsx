"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CarouselNavigation from "@/components/shared/CarouselNavigation";
import { images as defaultImages, testimonials } from "@/utils/constant";

export interface Testimonial {
  id?: string | number;
  quote: string;
  author: string;
  role?: string;
}

const testimonialList = testimonials as Testimonial[];

export default function TestimonialCarousel() {
  const mainImage = defaultImages.TestimonialMainImage;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () =>
    setActiveIndex((prev) => (prev + 1) % testimonialList.length);
  const prevTestimonial = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonialList.length) % testimonialList.length,
    );

  // Auto-play testimonials every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  if (!testimonialList || testimonialList.length === 0) return null;

  return (
    <div className="mt-12 md:mt-16">
      <div className="relative max-w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left Image */}
          <div className="relative w-full lg:w-4/5 z-0">
            <Image
              src={mainImage}
              alt="Testimonial"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

          {/* Right Content - Overlapping */}
          <div className="relative w-full lg:w-4/5 lg:-ml-10 z-10 mt-4 lg:mt-4 mb-8">
            {/* White Content Box */}
            <div className="relative bg-white px-8 md:px-12 mt-16 pt-16 h-full border-b-5 border-primary-border">
              {/* CommonLeaf - Top Left */}
              <div className="absolute -top-10 left-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none mix-blend-multiply">
                <Image
                  src={defaultImages.CommonLeaf}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* CommonLeaf - Bottom Right */}
              <div className="absolute -bottom-9.75 right-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none mix-blend-multiply rotate-180">
                <Image
                  src={defaultImages.CommonLeaf}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* Sliding Content Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonialList.map((testimonial, index) => (
                    <div
                      key={testimonial.id || index}
                      className="w-full shrink-0 flex flex-col justify-center items-center h-full"
                      style={{ minWidth: "100%" }}
                    >
                      {/* CommonQuote Icon */}
                      <div className="mb-6 flex justify-center">
                        <Image
                          src={defaultImages.CommonQuote}
                          alt=""
                          width={80}
                          height={80}
                          className="w-16 h-16 md:w-20 md:h-20"
                        />
                      </div>

                      {/* Quote */}
                      <blockquote className="font-cormorant text-base md:text-lg lg:text-xl  font-bold text-primary-foreground leading-relaxed mb-8 text-center">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      {/* Author Info */}
                      <div className="text-center">
                        <p className="font-cormorant text-lg md:text-xl lg:text-2xl text-primary-foreground font-semibold mb-1 tracking-wide">
                          {testimonial.author}
                        </p>
                        <p className="font-sans text-primary-foreground/70 text-sm md:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <CarouselNavigation
                currentIndex={activeIndex}
                totalItems={testimonialList.length}
                onPrev={prevTestimonial}
                onNext={nextTestimonial}
                variant="dark"
                widthOfArrow="w-18"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
