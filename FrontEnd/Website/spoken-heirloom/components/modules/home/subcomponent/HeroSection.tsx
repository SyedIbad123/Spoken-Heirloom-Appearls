"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/utils/constant";
import Button from "@/components/shared/Button";
import CarouselNavigation from "@/components/shared/CarouselNavigation";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const carouselImages = [
    images.HeroSectionImage01,
    images.HeroSectionImage02,
    images.HeroSectionImage03,
  ];

  const goToSlide = (newIndex: number) => {
    if (nextSlide !== null || newIndex === currentSlide) return;

    // Set next slide to animate in
    setNextSlide(newIndex);

    // After animation completes, make it the current slide
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setNextSlide(null);
    }, 800);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      const next = (currentSlide + 1) % carouselImages.length;
      goToSlide(next);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoPlay, currentSlide, carouselImages.length]);

  // Resume autoplay after manual interaction
  useEffect(() => {
    if (!autoPlay) {
      const resumeTimer = setTimeout(() => {
        setAutoPlay(true);
      }, 10000);
      return () => clearTimeout(resumeTimer);
    }
  }, [autoPlay]);

  const handlePrevSlide = () => {
    const newIndex =
      (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    goToSlide(newIndex);
    setAutoPlay(false);
  };

  const handleNextSlide = () => {
    const newIndex = (currentSlide + 1) % carouselImages.length;
    goToSlide(newIndex);
    setAutoPlay(false);
  };

  return (
    <>
      <section className="mx-auto relative max-w-[100vw] h-screen md:h-auto md:aspect-video lg:h-screen overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <div className="absolute max-w-[100vw] inset-0 overflow-hidden">
          {/* Current slide - s1: stays in place, z-index: 1 */}
          <div className="absolute max-w-[100vw] inset-0" style={{ zIndex: 1 }}>
            <Image
              src={carouselImages[currentSlide]}
              alt={`Hero Background ${currentSlide + 1}`}
              fill
              priority
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          {/* Next slide - s2: slides in from right, z-index: 2 */}
          {nextSlide !== null && (
            <div
              key={nextSlide}
              className="absolute inset-0 animate-[curtain_0.8s_ease-out_forwards]"
              style={{ zIndex: 2, transform: "translateX(100%)" }}
            >
              <Image
                src={carouselImages[nextSlide]}
                alt={`Hero Background ${nextSlide + 1}`}
                fill
                className="object-cover w-full h-full"
                quality={100}
              />
            </div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Main Content Container */}
        <div className="font-cormorant relative z-30 h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-6 md:mb-2 leading-tight max-w-6xl mx-auto">
            THE EVOLUTION OF THE
            <br />
            PHOTO ALBUM
          </h1>

          {/* Subheading */}
          <p className="text-white font-semibold text-base md:text-lg lg:text-xl 2xl:text-2xl text-center mb-10 md:mb-5 tracking-wide max-w-2xl mx-auto">
            Stories you can hear. Memories you can hold.
          </p>

          {/* CTA Button */}
          <Button
            text="Build My Heirloom Today"
            className="mb-12 md:mb-16 text-sm md:text-2xl"
            backgroundColor="bg-transparent"
            textColor="text-primary"
            borderColor="border-primary"
            hoverBgColor="hover:bg-primary"
            hoverTextColor="hover:text-primary-foreground"
            hoverBorderColor="hover:border-primary"
          />
        </div>

        {/* Carousel Section at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          {/* Carousel Container */}
          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-18">
              <div className="flex items-center justify-between">
                <CarouselNavigation
                  currentIndex={currentSlide}
                  totalItems={carouselImages.length}
                  onPrev={handlePrevSlide}
                  onNext={handleNextSlide}
                  widthOfArrow="w-28 md:w-16 2xl:w-28"
                  sizeOfNumber="text-lg 2xl:text-2xl"
                  variant="light"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative mb-72 -mt-26 h-0 after:content-[''] after:block after:mx-auto after:w-64 after:h-80 md:after:w-96 md:after:h-120 after:bg-no-repeat after:bg-center after:bg-cover after:border-10 after:border-white after:shadow-lg after:z-20 after:relative"
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
