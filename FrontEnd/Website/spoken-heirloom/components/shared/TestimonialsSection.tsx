import SectionHeader from "@/components/shared/SectionHeader";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";

interface TestimonialsSectionProps {
  bigHeading?: string;
}

export default function TestimonialsSection({
  bigHeading = "WHAT OUR CUSTOMERS SAY ABOUT US",
}: TestimonialsSectionProps) {
  return (
    <section className="mt-10 md:mt-22 mb-2 md:mb-2 lg:mb-36 bg-primary">
      <div className="section-container">
        <SectionHeader
          smallHeading="Testimonials"
          bigHeading={bigHeading}
          smallHeadingColor="text-primary-foreground"
          bigHeadingColor="text-primary-foreground"
          showWhirl={true}
          fontStyleSmallHeading="font-cormorant"
          fontStyleBigHeading="font-cormorant"
        />
        <TestimonialCarousel />
      </div>
    </section>
  );
}
