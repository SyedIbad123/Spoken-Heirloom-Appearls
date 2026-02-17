import Image from "next/image";
import { images } from "@/utils/constant";

export default function MemoryVoiceSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-20 overflow-hidden bg-primary">
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-72 sm:max-w-sm">
              <Image
                src={images.BrandStoryLeftImage}
                alt="Recipe card with QR code"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="flex items-center justify-center">
            <h2 className="font-cormorant font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-primary-foreground text-center leading-tight uppercase px-2 sm:px-0">
              BECAUSE EVERY
              <br />
              MEMORY DESERVES
              <br />A VOICE
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-72 sm:max-w-sm">
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
