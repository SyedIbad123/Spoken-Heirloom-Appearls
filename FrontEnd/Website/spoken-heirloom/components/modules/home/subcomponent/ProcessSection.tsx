"use client";

import Image from "next/image";
import { images } from "@/utils/constant";
import ProcessStepsGrid from "@/components/shared/ProcessStepsGrid";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="section-container py-section-md md:py-section-lg relative overflow-hidden mt-6 md:mt-10">
      <div className="section-container bg-white px-5 py-20 sm:px-8 sm:py-10 md:px-12 md:py-14 md:max-lg:px-10 md:max-lg:py-20 lg:p-20 relative border-b-5 border-primary-border">
        <div className="text-center mb-10 sm:mb-14 md:mb-20 md:max-lg:mb-16 relative">
          <div className="absolute w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 md:max-lg:w-40 md:max-lg:h-40 -left-5 sm:-left-10 lg:-left-20 -top-20 sm:-top-10 md:-top-20 pointer-events-none mix-blend-multiply">
            <Image
              src={images.CommonLeaf}
              className=""
              alt="Process Left Image"
            />
          </div>

          {/* Circular badge - right side */}
          <div className="hidden lg:flex absolute -right-34 top-6 -translate-y-48">
            <div className="relative w-54 h-54">
              <Image
                src={images.ProcessRightImage}
                className="w-full h-full"
                alt="Process circle"
              />
            </div>
          </div>

          <SectionHeader
            bigHeading={"From Voice to Heirloom in\nThree Simple Steps"}
            description="Our patent-pending QR technology allows future generations to scan and relive voices, stories, and moments instantly."
            bigHeadingColor="text-primary-foreground"
            descriptionColor="text-primary-foreground/85"
            className="max-w-5xl mx-auto px-2 sm:px-0"
            fontStyleBigHeading="font-cormorant "
            descriptionStyle="normal"
            fontStyleDescription="font-sans"
          />
        </div>

        <ProcessStepsGrid />
      </div>
    </section>
  );
}
