"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/utils/constant";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Sample carousel images - replace with actual images if available
  const carouselImages = [
    images.HeroSectionImage,
    images.HeroSectionImage,
    images.HeroSectionImage,
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, carouselImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
    setAutoPlay(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setAutoPlay(false);
  };

  return (
    <>
      <section className="mx-auto relative h-screen md:h-auto md:aspect-video lg:h-screen overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <Image
            src={images.HeroSectionImage}
            alt="Hero Background"
            fill
            priority
            className="object-cover w-full h-full"
            quality={100}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-6 md:mb-8 leading-tight max-w-5xl mx-auto">
            THE EVOLUTION OF THE
            <br />
            PHOTO ALBUM
          </h1>

          {/* Subheading */}
          <p className="text-white text-base md:text-lg lg:text-xl text-center mb-10 md:mb-12 font-light tracking-wide max-w-2xl mx-auto">
            Stories you can hear. Memories you can hold.
          </p>

          {/* CTA Button */}
          <button className="px-8 md:px-10 py-3 md:py-4 bg-transparent border border-white text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 mb-12 md:mb-16">
            Build My Heirloom Today
          </button>
        </div>

        {/* Carousel Section at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* Carousel Container */}
          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-4 py-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={images.LeftArrow}
                      alt="Previous slide"
                      className="object-cover w-28 h-full"
                    />
                  </div>
                  <div className="text-white text-md md:text-base font-light tracking-widest">
                    {String(currentSlide + 1)}/{String(carouselImages.length)}
                  </div>
                  <div>
                    <Image
                      src={images.RightArrow}
                      alt="Next slide"
                      className="object-cover w-28 lg:w-28 xl:w-28  h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative mb-72 -mt-40 h-0 after:content-[''] after:block after:mx-auto after:w-64 after:h-80 md:after:w-96 md:after:h-120 after:bg-no-repeat after:bg-center after:bg-cover after:border-10 after:border-white after:shadow-lg after:z-20 after:relative"
        style={
          {
            "--bg-image": `url(${images.ProcessSectionImage.src})`,
          } as React.CSSProperties & { "--bg-image": string }
        }
      >
        <style jsx>{`
          div::after {
            background-image: var(--bg-image);
          }
        `}</style>
      </div>
    </>
  );
}
