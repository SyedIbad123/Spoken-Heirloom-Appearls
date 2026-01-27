import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/constant";
import Button from "./Button";

interface MemoryVoiceBannerProps {
  leftImage?: StaticImageData;
  rightImage?: StaticImageData;
  heading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  sizeOfHeading?: string;
}

export default function MemoryVoiceBanner({
  leftImage,
  rightImage,
  heading = "BECAUSE EVERY MEMORY\nDESERVES A VOICE",
  buttonText = "Create Your Book",
  onButtonClick,
  sizeOfHeading = "4",
}: MemoryVoiceBannerProps) {
  const hasImages = leftImage && rightImage;

  return (
    <section className="relative py-20 md:py-12 overflow-visible bg-primary-border/30">
      <div className="relative">
        {hasImages && (
          <div className="absolute -top-29.5 left-10 sm:-top-29.5 sm:left-20 md:-top-29.5 md:left-40 lg:-top-24.5 lg:left-65 xl:-top-31.5 xl:left-80 2xl:-top-35 2xl:left-96 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 pointer-events-none mix-blend-multiply">
            <Image
              src={images.CommonLeaf}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {hasImages ? (
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-140 max-w-full">
                <Image
                  src={leftImage}
                  alt=""
                  className="absolute -top-96 -left-10 w-full h-auto object-contain z-10"
                />
              </div>
            </div>
          ) : (
            <div className="hidden lg:block relative">
              {/* CommonLeaf at top left corner when no images */}
              <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 left-0 w-40 h-40 pointer-events-none mix-blend-multiply">
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
            <h2
              className={`font-serif font-semibold text-3xl md:text-4xl lg:text-${sizeOfHeading}xl text-primary-foreground leading-normal tracking-loose uppercase mb-8 whitespace-pre-line`}
            >
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
                <div className="absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-28 md:-bottom-32 md:-left-36 lg:-bottom-32 lg:-left-44 xl:-bottom-29.5 xl:-left-48 2xl:-bottom-35.5 2xl:-left-56 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 pointer-events-none mix-blend-multiply rotate-180 z-0">
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
              <div className="absolute top-4 md:top-6 lg:top-10 right-0 w-40 h-40 pointer-events-none mix-blend-multiply rotate-180">
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
