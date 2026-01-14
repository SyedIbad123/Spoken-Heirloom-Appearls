import {
  HeroSection,
  ProcessSection,
  InspirationGallery,
  BrandStorySection,
  PackagesSection,
  TestimonialsSection,
  ContactSection,
} from "./subcomponent";

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
