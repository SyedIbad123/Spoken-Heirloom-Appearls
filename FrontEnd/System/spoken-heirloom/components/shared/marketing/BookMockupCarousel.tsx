"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DotNavigation } from "@/components/shared/marketing/DotNavigation";
import { mainImagesOfBookMockupCarousel } from "@/utils/web-constants";

interface BookMockupCarouselProps {
  title?: string;
  subtitle?: string;
  label?: string;
  sizeOfSubtitle?: string;
  rightContainerClassName?: string;
}

const BookMockupCarousel: React.FC<BookMockupCarouselProps> = ({
  title,
  subtitle,
  label,
  sizeOfSubtitle = "3",
  rightContainerClassName = "items-center justify-center text-center",
}) => {
  const [current, setCurrent] = useState(0);

  const subtitleSizeClass =
    sizeOfSubtitle === "xs"
      ? "text-xs"
      : sizeOfSubtitle === "sm"
        ? "text-sm"
        : sizeOfSubtitle === "md"
          ? "text-md"
          : sizeOfSubtitle === "lg"
            ? "text-lg"
            : sizeOfSubtitle === "xl"
              ? "text-xl"
              : sizeOfSubtitle === "2xl"
                ? "text-2xl"
                : sizeOfSubtitle === "3xl"
                  ? "text-3xl"
                  : "text-2xl";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % mainImagesOfBookMockupCarousel.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="w-full flex flex-col items-center justify-center mb-6 lg:mb-28 px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 mx-auto w-full max-w-6xl">
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              <Image
                src={mainImagesOfBookMockupCarousel[current]}
                alt="Book Mockup"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                sizes="(max-width: 1200px) 100vw, 909px"
                priority
                className="w-70 h-70 sm:w-90 sm:h-90 md:w-125 md:h-125"
              />
              <div className="absolute -bottom-10 md:-bottom-10 left-1/2 -translate-x-1/2 mb-4 lg:mb-0">
                <DotNavigation
                  total={mainImagesOfBookMockupCarousel.length}
                  current={current}
                  onSelect={setCurrent}
                />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col ${rightContainerClassName} min-w-0 w-full md:w-auto text-center lg:text-left`}
          >
            <h2
              className={`${subtitleSizeClass} 2xl:text-xl font-cormorant font-bold text-primary-foreground mb-2 tracking-wide`}
            >
              {subtitle && subtitle}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-3xl 2xl:text-5xl font-cormorant font-bold text-primary-foreground leading-snug mb-2">
              {title &&
                title?.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary-foreground mt-2">
              {label && label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMockupCarousel;
