import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/constant";
import Button from "./Button";

interface MemoryVoiceBannerProps {
  leftImage?: StaticImageData;
  rightImage?: StaticImageData;
  heading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function MemoryVoiceBanner({
  leftImage,
  rightImage,
  heading = "BECAUSE EVERY MEMORY\nDESERVES A VOICE",
  buttonText = "Create Your Book",
  onButtonClick,
}: MemoryVoiceBannerProps) {
  const hasImages = leftImage && rightImage;

  return (
    <section className="relative py-20 md:py-12 overflow-visible bg-primary-border/30">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          {hasImages ? (
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-140 max-w-full">
                <Image
                  src={leftImage}
                  alt=""
                  className="absolute -top-96 -left-10 w-full h-auto object-contain z-10"
                />
                {/* CommonLeaf on left image - top right area */}
                <div className="absolute -top-86.5 -right-48 w-72 h-72 pointer-events-none mix-blend-multiply">
                  <Image
                    src={images.CommonLeaf}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block relative">
              {/* CommonLeaf at top left corner when no images */}
              <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none">
                <Image
                  src={images.CommonLeaf}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Center Text */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-4xl text-primary-foreground leading-normal tracking-loose uppercase mb-8 whitespace-pre-line">
              {heading}
            </h2>
            <Button
              text={buttonText}
              onClick={onButtonClick}
              textColor="text-olive"
              borderColor="border-olive"
              hoverBgColor="hover:bg-olive"
              hoverTextColor="hover:text-white"
            />
          </div>

          {/* Right Image */}
          {hasImages ? (
            <div className="flex justify-center lg:justify-start relative">
              <div className="relative w-full max-w-lg">
                <Image
                  src={rightImage}
                  alt=""
                  className="w-full h-auto object-contain z-10 relative"
                />
                {/* CommonLeaf on right image - left bottom corner */}
                <div className="absolute -bottom-29.5 -left-44 w-72 h-72 pointer-events-none mix-blend-multiply rotate-180 z-0">
                  <Image
                    src={images.CommonLeaf}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block relative">
              {/* CommonLeaf at bottom right corner when no images */}
              <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-50">
                <Image
                  src={images.CommonLeaf}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
