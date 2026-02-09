import { images, marqueeItems } from "@/utils/constant";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import Marquee from "@/components/shared/Marquee";
import MemoryVoiceSection from "./MemoryVoiceSection";

export default function BrandStorySection() {
  return (
    <>
      {/* Brand Story Section */}
      <section className="mt-20 mb-18 bg-primary">
        <div className="section-container">
          {/* Section Header */}
          <SectionHeader
            smallHeading="About Us"
            bigHeading="THE SPOKEN HEIRLOOM"
            showWhirl={true}
            smallHeadingColor="text-primary-foreground"
            bigHeadingColor="text-primary-foreground"
            fontStyleSmallHeading="font-cormorant"
            fontStyleBigHeading="font-cormorant"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center mt-12">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-7/8 overflow-hidden">
                  <Image
                    src={images.BrandStoryMainImage}
                    alt="Heirloom Book"
                    fill
                    className="object-cover"
                  />

                  {/* Circular logo overlay at center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-30 md:h-30 rounded-full bg-primary flex items-center justify-center">
                    <div className="relative w-20 h-20 md:w-20 md:h-20">
                      <Image
                        src={images.LogoBrand}
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side with background */}
            <div className="order-1 lg:order-2 relative overflow-visible">
              {/* Background rose image with opacity */}
              <div className="absolute top-20 -right-22 -left-22 pointer-events-none">
                <Image
                  src={images.BrandStoryRoseImage}
                  alt=""
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-cormorant text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-12 leading-tight uppercase">
                  PRESERVING THE STORIES,
                  <br />
                  AND VOICES THAT DESERVE
                  <br />
                  TO LAST FOREVER
                </h3>

                <div className="space-y-5 font-sans text-primary-foreground/80 text-body-md md:text-body-sm leading-normal tracking-tight max-w-lg mx-auto">
                  <p>
                    At The Spoken Heirloom, we believe every family has a
                    treasure chest of stories moments passed around the dinner
                    table, voices that bring comfort, and laughter that echoes
                    across generations. Photographs capture faces, but voices
                    capture the soul.
                  </p>
                  <p>
                    We created this platform to help families preserve not just
                    memories in print, but the sound of loved ones telling their
                    stories in their own words. Imagine flipping through a
                    printed book of your family history while scanning a QR code
                    to hear your grandmother&apos;s voice reading one of her
                    favorite recipes, or the sound of your child&apos;s laughter
                    captured in time.
                  </p>
                </div>

                <div className="mt-10">
                  <Button
                    text="Learn More"
                    textColor="text-primary-foreground"
                    borderColor="border-olive"
                    hoverBgColor="hover:bg-olive"
                    hoverTextColor="hover:text-white"
                    className="font-cormorant text-xl!"
                    navigateTo="/about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <Marquee items={marqueeItems} showLeaf={true} leafPosition="right" />

      {/* Memory Voice Section */}
      <MemoryVoiceSection />
    </>
  );
}
