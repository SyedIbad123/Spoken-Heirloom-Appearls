import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/web-constants";
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
    <section className="relative py-10 sm:py-12 md:py-12 mt-10 md:mt-4 lg:mt-20 overflow-visible bg-primary-border/30">
      <div className="font-cormorant relative">
        {hasImages && (
          <div className="hidden lg:block absolute -top-24.5 lg:left-65 xl:-top-31.5 xl:left-80 2xl:-top-35 2xl:left-120 lg:w-52 lg:h-52 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 pointer-events-none mix-blend-multiply">
            <Image
              src={images.CommonLeaf}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {hasImages ? (
            <div className="flex justify-center lg:justify-end relative order-1 lg:order-0">
              <div className="relative w-full max-w-72 sm:max-w-sm lg:w-140 lg:max-w-full">
                <Image
                  src={leftImage}
                  alt=""
                  className="w-full h-auto object-contain z-10 lg:absolute lg:-top-96 lg:-left-14"
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
          <div className="flex flex-col items-center justify-center text-center px-3 sm:px-2 order-2 lg:order-0">
            <h2
              className={`font-serif font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-${sizeOfHeading}xl text-primary-foreground leading-normal tracking-loose uppercase mb-6 md:mb-8 whitespace-pre-line`}
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
              className="font-semibold! text-base sm:text-lg md:text-xl"
              navigateTo="/create-your-book"
            />
          </div>

          {/* Right Image */}
          {hasImages ? (
            <div className="relative flex justify-center lg:justify-start order-3 lg:order-0">
              <div className="w-full max-w-72 sm:max-w-sm lg:max-w-lg">
                <Image
                  src={rightImage}
                  alt=""
                  className="w-full h-auto object-contain z-10 relative"
                />
                {/* CommonLeaf on right image - left bottom corner */}
                <div className="hidden lg:block absolute lg:-bottom-31.5 lg:-left-44 xl:-bottom-31.5 xl:-left-48 2xl:-bottom-35.5 2xl:-left-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 pointer-events-none mix-blend-multiply rotate-180 z-0">
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
