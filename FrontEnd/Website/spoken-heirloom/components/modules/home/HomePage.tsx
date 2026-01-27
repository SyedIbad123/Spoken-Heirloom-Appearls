import {
  HeroSection,
  ProcessSection,
  InspirationGallery,
  BrandStorySection,
  PackagesSection,
  TestimonialsSection,
} from "./subcomponent";

import { ContactSection } from "@/components/shared/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <InspirationGallery />
      <BrandStorySection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
