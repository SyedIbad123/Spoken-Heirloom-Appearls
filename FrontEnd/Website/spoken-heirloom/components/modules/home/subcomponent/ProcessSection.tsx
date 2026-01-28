"use client";

import Image from "next/image";
import { images } from "@/utils/constant";
import ProcessStepsGrid from "@/components/shared/ProcessStepsGrid";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="py-section-md md:py-section-lg relative overflow-hidden mt-10 ">
      <div className="section-container bg-white p-20 relative border-b-5 border-primary-border">
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute w-52 h-52 -left-20 -top-20 pointer-events-none mix-blend-multiply">
            <Image
              src={images.CommonLeaf}
              className=""
              alt="Process Left Image"
            />
          </div>

          {/* Circular badge - right side */}
          <div className="hidden lg:flex absolute -right-44 top-0 -translate-y-48">
            <div className="relative w-64 h-64">
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
            descriptionColor="text-primary-foreground/90"
            className="max-w-5xl mx-auto"
          />
        </div>

        <ProcessStepsGrid />
      </div>
    </section>
  );
}
