import { aboutFounderContent, images } from "@/utils/constant";
import Image from "next/image";

export default function AboutTheFounder() {
  return (
    <section className="bg-primary-light py-16 md:py-8">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            <h2 className=" font-cormorant text-3xl md:text-4xl lg:text-4xl font-semibold text-primary-foreground mb-8">
              {aboutFounderContent.heading}
            </h2>

            <div className="font-sans space-y-6 text-primary-foreground">
              {aboutFounderContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body-xs leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={images.AboutFounderImage}
                alt="Jessica - Founder of The Spoken Heirloom"
                fill
                className="object-cover"
              />
            </div>

            {/* Signature beneath image */}
            <div className="mt-8 text-center">
              <p className="font-cormorant text-primary-foreground/90 text-body-lg font-bold mb-2">
                {aboutFounderContent.signature.message}
              </p>
              <p className="font-seaweed text-3xl md:text-4xl text-primary-foreground italic">
                {aboutFounderContent.signature.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
