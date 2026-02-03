"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import { memoriesSafeSection } from "@/utils/constant";

export default function MemoriesSafeSection() {
  const { topSection, bottomSection } = memoriesSafeSection;

  return (
    <section className="w-full mb-20">
      {/* Top Section - Your Memories Are Safe Here */}
      <div className="relative py-20 md:py-28 overflow-visible">
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
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 ">
          <Image
            src={topSection.cloudLogo}
            alt="Cloud Storage"
            fill
            className="object-contain"
          />
        </div>

        {/* Encryption Icon - Bottom Left Corner */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-28 h-40 md:w-40 md:h-56 lg:w-48 lg:h-64 z-20">
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
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-8">
              <Image
                src={topSection.shieldLogo}
                alt="Spoken Heirloom Shield"
                fill
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="font-cormorant font-bold text-md text-primary-foreground uppercase tracking-wide mb-8">
              {topSection.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < topSection.heading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Description Paragraphs */}
            <p className="text-xs text-primary-foreground font-sans leading-relaxed mb-5 max-w-xl">
              {topSection.description1}
            </p>

            <p className="text-xs text-primary-foreground font-sans leading-relaxed max-w-xl">
              {topSection.description2}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Capture The Moments */}
      <div className="relative -mt-32 md:-mt-162 py-20 md:pt-160 bg-primary-border/20 overflow-visible">
        <div className="section-container mx-auto px-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="max-w-lg pt-16 lg:pt-24 pb-20 lg:pb-0 relative z-10">
              <h2 className="font-cormorant text-2xl font-bold text-primary-foreground uppercase tracking-wide leading-tight mb-10">
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
                className="font-cormorant font-bold! text-md tracking-wide"
                navigateTo="/create-your-book/stepthree"
              />
            </div>

            {/* Right Content - Main Image with Overflow */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[60%] xl:w-[55%] h-96 md:h-125 lg:h-auto">
              <div className="relative w-full h-full lg:h-[150%] lg:top-[0%] xl:top-[2%]">
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
