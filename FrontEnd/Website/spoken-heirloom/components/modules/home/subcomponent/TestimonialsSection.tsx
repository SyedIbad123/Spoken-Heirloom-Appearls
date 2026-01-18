"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import CarouselNavigation from "@/components/shared/CarouselNavigation";
import { images } from "@/utils/constant";

const testimonials = [
  {
    id: 1,
    quote:
      "The Spoken Heirloom turned our memories into something tangible and timeless. It feels like holding our family's history in our hands — and hearing it come alive.",
    author: "JOHN DOE",
    role: "Client",
  },
  {
    id: 2,
    quote:
      "I created a book for my grandmother's 90th birthday with recordings of all her favorite stories. The tears of joy when she scanned the QR codes and heard our voices will stay with me forever.",
    author: "SARAH MITCHELL",
    role: "Client",
  },
  {
    id: 3,
    quote:
      "As someone who lost my father last year, having his voice preserved in our family book has been the most precious gift. This is more than a book—it's a bridge to those we love.",
    author: "MICHAEL CHEN",
    role: "Client",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-section-md md:py-section-lg bg-primary">
      <div className="section-container">
        {/* Section header */}
        <SectionHeader
          smallHeading="Testimonials"
          bigHeading="WHAT OUR CUSTOMERS SAY ABOUT US"
          smallHeadingColor="text-primary-foreground"
          bigHeadingColor="text-primary-foreground"
          showWhirl={true}
        />

        {/* Testimonial Content */}
        <div className="mt-12 md:mt-16">
          <div className="relative max-w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
              {/* Left Image */}
              <div className="relative w-full lg:w-4/5 z-0">
                <Image
                  src={images.TestimonialMainImage}
                  alt="Testimonial"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>

              {/* Right Content - Overlapping */}
              <div className="relative w-full lg:w-4/5 lg:-ml-12 z-10 mt-8 lg:mt-16 mb-8">
                {/* White Content Box */}
                <div className="relative bg-white px-8 md:px-12  mt-16 h-full border-b-5 border-primary-border">
                  {/* CommonLeaf - Top Left */}
                  <div className="absolute -top-9.5 left-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none mix-blend-multiply">
                    <Image
                      src={images.CommonLeaf}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* CommonLeaf - Bottom Right */}
                  <div className="absolute -bottom-9.5 right-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none mix-blend-multiply rotate-180">
                    <Image
                      src={images.CommonLeaf}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Content with Animation */}
                  <div
                    key={activeIndex}
                    className="flex flex-col justify-center items-center h-full animate-fade-in"
                  >
                    {/* CommonQuote Icon */}
                    <div className="mb-6 flex justify-center">
                      <Image
                        src={images.CommonQuote}
                        alt=""
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-base md:text-lg lg:text-xl text-primary-foreground leading-relaxed mb-8 text-center">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center">
                      <p className="font-serif text-lg md:text-xl lg:text-2xl text-primary-foreground font-semibold mb-1 tracking-wide">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-primary-foreground/70 text-sm md:text-base">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <CarouselNavigation
                    currentIndex={activeIndex}
                    totalItems={testimonials.length}
                    onPrev={prevTestimonial}
                    onNext={nextTestimonial}
                    variant="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
