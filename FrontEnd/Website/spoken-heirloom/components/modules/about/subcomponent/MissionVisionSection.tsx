import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { images, aboutMissionVisionContent } from "@/utils/constant";

export default function MissionVisionSection() {
  return (
    <section className="bg-primary-light py-16 md:py-18">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Main Heading */}
        <div className="text-center mb-16 md:mb-20">
          <SectionHeader
            smallHeading={aboutMissionVisionContent.smallHeading}
            bigHeading={aboutMissionVisionContent.mainHeading}
            alignment="center"
            bigHeadingColor="text-primary-foreground"
            showWhirl={true}
            fontStyleBigHeading="font-cormorant"
            fontStyleSmallHeading="font-cormorant"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-foreground hidden lg:block transform -translate-x-1/2" />

          {/* Sections */}
          <div className="space-y-20 md:space-y-16">
            {aboutMissionVisionContent.sections.map((section, index) => (
              <div key={section.id} className="relative">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 w-3 h-3 bg-primary-foreground rounded-full hidden lg:block transform -translate-x-1/2 z-10 ${
                    index === 0
                      ? "top-0"
                      : index === aboutMissionVisionContent.sections.length - 1
                        ? "bottom-0"
                        : "-top-2/14 -translate-y-1/20"
                  }`}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    section.imagePosition === "right" ? "" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`${
                      section.imagePosition === "right"
                        ? "lg:order-1 text-right"
                        : "lg:order-2"
                    }`}
                  >
                    <h3 className="font-cormorant font-bold text-2xl md:text-3xl lg:text-6xl text-primary-foreground mb-6">
                      {section.title}
                    </h3>
                    <p className="font-sans text-body-sm xl:text-lg text-primary-foreground leading-relaxed whitespace-pre-line">
                      {section.description}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`${
                      section.imagePosition === "right"
                        ? "lg:order-2"
                        : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={
                          images[section.image as keyof typeof images] as any
                        }
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
