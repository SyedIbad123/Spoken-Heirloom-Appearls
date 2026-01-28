"use client";

import ProcessStepsGrid from "@/components/shared/ProcessStepsGrid";
import TwoColumnSection from "@/components/shared/TwoColumnSection";
import PackagesSection from "@/components/shared/PackageSection";
import { howItWorksStep1 } from "@/utils/constant";
import SectionHeader from "@/components/shared/SectionHeader";

const HowItWorksDetails = () => {
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
      />

      <TwoColumnSection
        image={howItWorksStep1.image}
        imageAlt={howItWorksStep1.imageAlt}
        imagePosition="left"
        bigHeading=""
        description=""
        showWhirl={false}
        headerAlign="left"
        contentClassName="!pt-0"
      >
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4 mt-2">
            {howItWorksStep1.stepHeading}
          </h3>
          <p className="text-primary-foreground/90 text-base md:text-lg mb-4">
            {howItWorksStep1.stepDescription}
          </p>
          <h4 className="font-serif text-xl text-primary-foreground mb-2 mt-6">
            What to include
          </h4>
          <ul className="list-disc pl-6 text-primary-foreground/90 space-y-2">
            {howItWorksStep1.whatToInclude.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </TwoColumnSection>

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
