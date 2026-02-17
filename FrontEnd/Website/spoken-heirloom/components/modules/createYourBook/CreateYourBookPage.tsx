import BookMockupCarousel from "@/components/shared/BookMockupCarousel";
import Button from "@/components/shared/Button";
import ProcessStepsGrid from "@/components/shared/ProcessStepsGrid";
import TwoColumnSection from "@/components/shared/TwoColumnSection";
import { images } from "@/utils/constant";
import Image from "next/image";
import FeaturedTemplates from "./subcomponents/FeaturedTemplates";
import { Journey } from "./subcomponents/Journey";
import MemoriesSafeSection from "./subcomponents/MemoriesSafeSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import ReadyToBegin from "./subcomponents/ReadyToBegin";

export default function CreateYourBookPage() {
  return (
    <>
      <div className="w-full bg-primary-border/30">
        <TwoColumnSection
          backgroundColor=""
          image={images.CreateYourBookPageHero}
          imageAlt="Create Your Heirloom Book"
          imagePosition="right"
          imageClassName="aspect-4/4 shadow-lg"
          bigHeading={`CREATE YOUR \n HEIRLOOM, YOUR WAY`}
          description="The moments that mean the most shouldn’t stay buried in your phone. Bring them to life in a book you can hold and hear."
          headerAlign="left"
          descriptionStyle="normal"
          descriptionColor="text-primary-foreground/75"
          showWhirl={false}
          contentClassName=""
        >
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              text="Start a One-Time Book"
              className="border-primary-foreground/50 text-md 2xl:text-lg font-cormorant font-bold text-primary-text bg-transparent hover:bg-primary-text/10 transition"
              type="button"
              textColor="text-primary-foreground"
              borderColor="border-primary-text"
              backgroundColor="bg-transparent"
              hoverBgColor="hover:bg-primary-foreground"
              hoverTextColor="hover:text-primary"
            />
            <Button
              text="Start a Monthly Subscription"
              className="text-md font-cormorant font-bold border border-primary-foreground/50"
              type="button"
              textColor="text-white"
              borderColor="border-primary-text"
              backgroundColor="bg-primary-foreground"
              hoverBgColor="hover:bg-primary-foreground"
              hoverTextColor="hover:text-primary"
            />
          </div>
        </TwoColumnSection>
      </div>

      <div className="relative bg-primar mt-10 md:mt-16">
        <div className="absolute md:hidden lg:absolute -top-15 md:-top-31.5 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-64 md:h-64 pointer-events-none mix-blend-multiply">
          <Image
            src={images.CommonLeaf}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <ProcessStepsGrid
          bigHeading={`FROM VOICE TO  HEIRLOOM IN \n THREE SIMPLE STEPS`}
          description={`Whether you’re creating a single book or building your story month by \n month, every memory follows the same simple process.`}
          descriptionStyle="normal"
          descriptionColor="text-primary-foreground/80"
        />
      </div>

      <Journey />

      <div className="mt-12 md:mt-24">
        <BookMockupCarousel
          title={"Mary & FD Forester's \nLivingLegacy Book"}
          subtitle="A Story You Can See & Hear"
          sizeOfSubtitle="xs"
          rightContainerClassName="lg:text-left"
        />
      </div>

      <FeaturedTemplates />

      <MemoriesSafeSection />

      <TestimonialsSection />

      <ReadyToBegin />
    </>
  );
}
