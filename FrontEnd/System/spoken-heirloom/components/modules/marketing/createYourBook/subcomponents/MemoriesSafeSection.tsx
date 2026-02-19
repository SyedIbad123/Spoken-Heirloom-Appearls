"use client";

import Image from "next/image";
import Button from "@/components/shared/marketing/Button";
import { memoriesSafeSection } from "@/utils/web-constants";

export default function MemoriesSafeSection() {
  const { topSection, bottomSection } = memoriesSafeSection;

  return (
    <section className="w-full mb-14 md:mb-20">
      {/* Top Section - Your Memories Are Safe Here */}
      <div className="relative py-14 sm:py-16 md:py-28 overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={topSection.backgroundImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Cloud Icon - Top Right Corner */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 ">
          <Image
            src={topSection.cloudLogo}
            alt="Cloud Storage"
            fill
            className="object-contain"
          />
        </div>

        {/* Encryption Icon - Bottom Left Corner */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-10 h-20 sm:w-20 sm:h-28 md:w-24 md:h-24 lg:w-48 lg:h-64 z-20">
          <Image
            src={topSection.encryptionLogo}
            alt="Encryption Security"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Shield Logo */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-6 md:mb-8">
              <Image
                src={topSection.shieldLogo}
                alt="Spoken Heirloom Shield"
                fill
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="font-cormorant font-bold text-sm sm:text-md 2xl:text-3xl text-primary-foreground uppercase tracking-wide mb-6 md:mb-8">
              {topSection.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < topSection.heading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Description Paragraphs */}
            <p className="text-xs sm:text-sm 2xl:text-lg text-primary-foreground font-sans leading-relaxed mb-4 md:mb-5 max-w-xl px-2 sm:px-0">
              {topSection.description1}
            </p>

            <p className="text-xs sm:text-sm 2xl:text-lg text-primary-foreground font-sans leading-relaxed max-w-xl px-2 sm:px-0">
              {topSection.description2}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Capture The Moments */}
      <div className="relative -mt-12 sm:-mt-16 md:-mt-162 py-12 sm:py-14 md:py-2 lg:py-20 md:pt-160 lg:pt-160 bg-primary-border/20 overflow-visible">
        <div className="section-container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="max-w-lg md:max-w-full lg:max-w-lg pt-6 sm:pt-8 lg:pt-24 pb-6 sm:pb-10 md:pb-0 lg:pb-0 relative z-10 text-center lg:text-left">
              <h2 className="font-cormorant text-xl sm:text-2xl 2xl:text-4xl font-bold text-primary-foreground uppercase tracking-wide leading-tight mb-6 sm:mb-10">
                {bottomSection.heading.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < bottomSection.heading.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <Button
                text={bottomSection.buttonText}
                type="button"
                textColor="text-primary-foreground"
                borderColor="border-primary-foreground/50"
                backgroundColor="bg-transparent"
                hoverBgColor="hover:bg-primary-foreground"
                hoverTextColor="hover:text-white"
                className="font-cormorant font-bold! text-md 2xl:text-xl tracking-wide"
                navigateTo="/create-your-book/stepthree"
              />
            </div>

            {/* Right Content - Main Image with Overflow */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] xl:w-[55%] h-44 sm:h-96 lg:h-125 xl:h-auto">
              <div className="relative w-full h-full lg:h-[150%] lg:-top-[26%] xl:top-[2%]">
                <Image
                  src={bottomSection.mainImage}
                  alt="Vintage Photos and Memories"
                  fill
                  className="object-contain object-bottom lg:object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
