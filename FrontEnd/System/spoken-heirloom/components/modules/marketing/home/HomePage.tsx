import TestimonialsSection from "@/components/shared/marketing/TestimonialsSection";
import {
  HeroSection,
  ProcessSection,
  InspirationGallery,
  BrandStorySection,
  PackagesSection,
} from "./subcomponent";

import { ContactSection } from "@/components/shared/marketing/ContactSection";
import { images } from "@/utils/web-constants";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
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
    </div>
  );
}
