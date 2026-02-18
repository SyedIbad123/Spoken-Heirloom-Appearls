"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Button from "@/components/shared/Button";
import CarouselNavigation from "@/components/shared/CarouselNavigation";
import { images, journeyOptions } from "@/utils/constant";

export const Journey = () => {
  const [journeyIndex, setJourneyIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextJourney = () =>
    setJourneyIndex((prev) => (prev + 1) % journeyOptions.length);
  const prevJourney = () =>
    setJourneyIndex(
      (prev) => (prev - 1 + journeyOptions.length) % journeyOptions.length,
    );

  return (
    <div className="bg-primary-border/30 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image - No padding, sticks to left edge */}
        <div className="relative aspect-4/5 lg:aspect-auto">
          <Image
            src={images.CreateYourBookJourneyImage}
            alt="Heirloom Journey"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-8 xl:px-12 py-12 xl:py-20 ">
          <h2 className="font-cormorant font-semibold text-display-sm md:text-display-sm 2xl:text-5xl text-primary-foreground uppercase mb-6 whitespace-pre-line">
            {"TWO SIMPLE WAYS TO BEGIN\nYOUR HEIRLOOM JOURNEY"}
          </h2>

          {/* Sliding Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${journeyIndex * 100}%)` }}
            >
              {journeyOptions.map((option, index) => (
                <div
                  key={option.id}
                  className="w-full shrink-0 "
                  style={{ minWidth: "100%" }}
                >
                  <h3 className="font-cormorant font-semibold text-xl md:text-2xl 2xl:text-4xl text-primary-foreground mb-6">
                    {option.title}
                  </h3>

                  <h6 className="font-sans font-extralight text-sm md:text-md 2xl:text-xl text-primary-foreground mb-6">
                    {option.description && option?.description}
                  </h6>

                  <ul className="font-sans space-y-3 mb-4">
                    {option.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-primary-foreground"
                      >
                        <span className="mt-0">•</span>
                        <span className="text-sm 2xl:text-lg font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h6 className="font-extralight text-sm md:text-md 2xl:text-lg text-primary-foreground mb-6">
                    {option.descriptionTwo && option?.descriptionTwo}
                  </h6>

                  <Button
                    text={option.buttonText}
                    className="border-primary-foreground/50 text-sm 2xl:text-lg font-serif text-primary-text bg-transparent hover:bg-primary-text/10 transition"
                    type="button"
                    textColor="text-primary-foreground"
                    borderColor="border-primary-text"
                    backgroundColor="bg-transparent"
                    hoverBgColor="hover:bg-primary-foreground"
                    hoverTextColor="hover:text-primary"
                    navigateTo="/create-your-book/stepthree"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex mt-4 xl:mt-10">
            <CarouselNavigation
              currentIndex={journeyIndex}
              totalItems={journeyOptions.length}
              onPrev={prevJourney}
              onNext={nextJourney}
              sizeOfNumber="text-lg 2xl:text-3xl"
              widthOfArrow="w-20 2xl:w-28"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
