import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { images, aboutMissionVisionContent } from "@/utils/constant";

export default function MissionVisionSection() {
  return (
    <section className="bg-primary-light py-10 sm:py-12 md:py-16 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Main Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
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
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center ${
                    section.imagePosition === "right" ? "" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`${
                      section.imagePosition === "right"
                        ? "lg:order-1 text-center lg:text-right"
                        : "lg:order-2 text-center lg:text-left"
                    }`}
                  >
                    <h3 className="font-cormorant font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-primary-foreground mb-3 sm:mb-4 md:mb-6">
                      {section.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base xl:text-lg text-primary-foreground leading-relaxed whitespace-pre-line max-w-2xl mx-auto lg:mx-0">
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
                    <div className="relative aspect-4/3 sm:aspect-square overflow-hidden">
                      <Image
                        src={
                          images[section.image as keyof typeof images] as any
                        }
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
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
