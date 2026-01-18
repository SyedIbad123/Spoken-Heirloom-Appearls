"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    id: 1,
    quote:
      "The Spoken Heirloom turned our memories into something tangible and timeless. It feels like holding our family's history in our hands — and hearing it come alive.",
    author: "John Doe",
    role: "Proud Father",
    location: "California, USA",
  },
  {
    id: 2,
    quote:
      "I created a book for my grandmother's 90th birthday with recordings of all her favorite stories. The tears of joy when she scanned the QR codes and heard our voices will stay with me forever.",
    author: "Sarah Mitchell",
    role: "Loving Granddaughter",
    location: "Texas, USA",
  },
  {
    id: 3,
    quote:
      "As someone who lost my father last year, having his voice preserved in our family book has been the most precious gift. This is more than a book—it's a bridge to those we love.",
    author: "Michael Chen",
    role: "Family Historian",
    location: "New York, USA",
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
    <section className="py-section-md md:py-section-lg bg-secondary-light">
      <div className="section-container">
        {/* Section header */}
        <SectionHeader
          smallHeading="Testimonials"
          bigHeading="What Our Customers Say About Us"
          smallHeadingColor="text-accent"
          bigHeadingColor="text-foreground"
        />

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-medium">
            {/* Large quote mark */}
            <div className="absolute top-6 left-8 md:top-8 md:left-12">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-accent/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote content */}
            <div className="relative z-10 text-center pt-8 md:pt-4">
              <blockquote className="font-serif text-xl md:text-2xl lg:text-heading-xl text-foreground leading-relaxed mb-8 italic">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-accent/30" />
                <span className="text-accent text-xl">✦</span>
                <div className="w-16 h-px bg-accent/30" />
              </div>

              {/* Author info */}
              <div className="flex flex-col items-center">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary-dark mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-serif text-primary/50">
                    {testimonials[activeIndex].author.charAt(0)}
                  </span>
                </div>
                <p className="font-serif text-lg text-foreground font-medium">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-foreground-muted text-body-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-accent w-8"
                        : "bg-secondary-dark hover:bg-accent/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
