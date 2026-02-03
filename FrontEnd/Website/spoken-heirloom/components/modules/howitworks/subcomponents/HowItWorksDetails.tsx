"use client";

import ProcessStepsGrid from "@/components/shared/ProcessStepsGrid";
import TwoColumnSection from "@/components/shared/TwoColumnSection";
import PackagesSection from "@/components/shared/PackageSection";
import { howItWorksSteps } from "@/utils/constant";
import { useState } from "react";
import CarouselNavigation from "@/components/shared/CarouselNavigation";
import SectionHeader from "@/components/shared/SectionHeader";

const HowItWorksDetails = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const handlePrev = () => setStepIdx((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () =>
    setStepIdx((prev) => (prev < howItWorksSteps.length - 1 ? prev + 1 : prev));

  return (
    <section className="py-section-md md:py-section-md relative overflow-hidden mt-2">
      <div className="section-container relative mb-28">
        <ProcessStepsGrid
          bigHeading={"FROM VOICE TO  HEIRLOOM IN\nTHREE SIMPLE STEPS"}
        />
      </div>

      <SectionHeader
        bigHeading={`WE WILL GUIDE YOU EVERY STEP \n OF THE PROCESS`}
        description={`We’ll guide you through every step of the process, making it easy to understand exactly how it all works — \n from your first story upload to holding your finished heirloom in your hands.`}
        descriptionColor="text-primary-foreground"
        descriptionStyle="normal"
        fontStyleBigHeading="font-cormorant"
        fontStyleDescription="font-sans"
      />

      <div className="relative -mt-12 mb-12">
        {/* Navigation positioned outside sliding content */}
        <div className="absolute -bottom-6 left-52 transform z-20 mb-10">
          <CarouselNavigation
            currentIndex={stepIdx}
            totalItems={howItWorksSteps.length}
            onPrev={handlePrev}
            onNext={handleNext}
            variant="dark"
            widthOfArrow="w-16"
            sizeOfNumber="text-md"
          />
        </div>

        {/* Sliding content container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${stepIdx * 100}%)` }}
          >
            {howItWorksSteps.map((stepItem, index) => (
              <div
                key={index}
                className="w-full shrink-0"
                style={{ minWidth: "100%" }}
              >
                <TwoColumnSection
                  image={stepItem.image}
                  imageAlt={stepItem.imageAlt}
                  imagePosition="left"
                  bigHeading=""
                  description=""
                  showWhirl={false}
                  headerAlign="left"
                  contentClassName="!pt-0"
                  showNavigation={false}
                >
                  <div>
                    <h3 className="font-cormorant font-bold text-2xl md:text-2xl text-primary-foreground mb-4 mt-2">
                      {stepItem.stepHeading}
                    </h3>
                    <p className="font-sans text-primary-foreground/90 text-base md:text-md mb-4">
                      {stepItem.stepDescription}
                    </p>
                    <h4 className="font-cormorant font-bold text-xl text-primary-foreground mb-2 mt-6">
                      {stepItem.sectionHeading}
                    </h4>
                    <ul className="font-sans font-normal list-disc pl-6 text-primary-foreground/90 space-y-2 text-sm">
                      {stepItem.sectionList.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </TwoColumnSection>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PackagesSection
        showStats={false}
        description={`Our storytelling subscription helps you capture memories month by month. You’ll receive thoughtful prompts by text or \n email, and each shared memory automatically adds a new page and QR code to your growing book. \n Your story, one chapter at a time.`}
        bigHeading={`PREFER TO BUILD \n YOUR HEIRLOOM OVER TIME?`}
        smallHeadingColor=""
        smallHeading=""
        bigHeadingColor="text-primary-foreground"
        leftImage={null}
        rightImage={null}
        heading={`BECAUSE SOME STORIES DESERVE \nTO BE HEARD — NOT JUST \n REMEMBERED`}
        sizeOfHeading="2"
        descriptionColor="text-primary-foreground"
        descriptionStyle="normal"
        showMemoryVoiceBanner={false}
      />
    </section>
  );
};

export default HowItWorksDetails;
