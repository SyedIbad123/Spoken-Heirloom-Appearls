import TestimonialsSection from "@/components/shared/marketing/TestimonialsSection";
import BookCustomizer from "./BookCustomizer";

export default function StepThree() {
  return (
    <section>
      {/* Book Customizer Section */}
      <BookCustomizer />

      {/* Testimonials Section */}
      <div className="section-container mx-auto mt-8 mb-32">
        <TestimonialsSection bigHeading="WHAT CLIENT SAYS ABOUT US" />
      </div>
    </section>
  );
}
