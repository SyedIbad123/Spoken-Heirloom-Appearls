import TestimonialsSection from "@/components/shared/TestimonialsSection";
import {
  HeroSection,
  ProcessSection,
  InspirationGallery,
  BrandStorySection,
  PackagesSection,
} from "./subcomponent";

import { ContactSection } from "@/components/shared/ContactSection";
import { images } from "@/utils/constant";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <InspirationGallery />
      <BrandStorySection />
      <PackagesSection
        leftImage={images.MemoryLeftImage}
        rightImage={images.MemoryRightImage}
        showToggleButton={false}
      />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
