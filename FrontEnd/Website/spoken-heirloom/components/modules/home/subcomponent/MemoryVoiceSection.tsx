import Image from "next/image";
import { images } from "@/utils/constant";

export default function MemoryVoiceSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-primary">
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <Image
                src={images.BrandStoryLeftImage}
                alt="Recipe card with QR code"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="flex items-center justify-center">
            <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-4xl text-primary-foreground text-center leading-tight uppercase">
              BECAUSE EVERY
              <br />
              MEMORY DESERVES
              <br />A VOICE
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              <Image
                src={images.BrandStoryRightImage}
                alt="Hands holding a letter"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
