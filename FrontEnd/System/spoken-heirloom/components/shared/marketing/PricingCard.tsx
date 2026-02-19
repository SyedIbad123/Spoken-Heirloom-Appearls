import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/web-constants";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  subtitle?: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  backgroundImage: StaticImageData;
  frontImage?: StaticImageData;
  addOns?: string[];
  isProElevated?: boolean;
  onCtaClick?: () => void;
}

export default function PricingCard({
  name,
  subtitle,
  price,
  period,
  features,
  highlighted = false,
  cta,
  backgroundImage,
  frontImage,
  addOns = [],
  isProElevated = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col mb-6 pt-5 md:pt-8 ${
        highlighted && isProElevated ? "lg:-translate-y-8" : ""
      }`}
    >
      {/* Star icon for highlighted card
      {highlighted && (
        <div className="absolute top-0 -right-10 z-30 w-20 h-20">
          <Image
            src={images.CommonStar}
            alt="Popular"
            width={72}
            height={72}
            className="object-contain"
          />
        </div>
      )} */}

      {/* Card container */}
      <div className={`relative h-155 md:h-175 lg:h-187`}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 py-6 sm:px-6 sm:py-8 md:px-10 md:py-14 flex flex-col items-center text-center h-full">
          {/* Plan name */}
          <h3 className="font-cormorant text-lg sm:text-xl md:text-2xl text-primary-foreground font-semibold uppercase tracking-wider">
            {name}
          </h3>

          {/* Subtitle - fixed height for alignment */}
          <div className="h-7 sm:h-8 flex items-center justify-center">
            {subtitle && (
              <p className="font-sans text-body-sm 2xl:text-md text-black/70 font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="mb-6 sm:mb-8 font-cormorant">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl sm:text-4xl md:text-4xl font-cormorant font-bold text-black">
                {price}
              </span>
              {period && (
                <span className="text-sm text-primary-foreground">
                  {period}
                </span>
              )}
            </div>
          </div>

          {/* Front Book Image - fixed height container for symmetry */}
          <div className="w-full flex justify-center h-44 sm:h-32 md:h-52 mb-0">
            {frontImage && (
              <div className="relative w-56 sm:w-48 md:w-72 h-full">
                <Image
                  src={frontImage}
                  alt={name}
                  className="object-contain object-bottom"
                />
              </div>
            )}
          </div>

          {/* Divider line - full width, always at same position */}
          <div className="w-full border-b border-black/20 mb-4 sm:mb-8" />

          {/* Features list */}
          <ul className="space-y-4 sm:space-y-3 mb-auto w-full max-w-xs text-left font-sans">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-black font-medium text-body-sm font-sans"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="w-full max-w-xs mt-2 sm:mt-10">
            <Button
              text={cta}
              onClick={onCtaClick}
              backgroundColor="bg-primary-foreground"
              textColor="text-white"
              borderColor="border-transparent"
              hoverBgColor="hover:bg-primary-foreground/90"
              hoverTextColor="hover:text-white"
              hoverBorderColor="none"
              fullWidth
              navigateTo="/create-your-book"
              className="py-1!"
            />
          </div>
        </div>
      </div>

      {/* Add-ons footer */}
      {addOns.length > 0 && (
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4 px-2">
          {addOns.map((addOn, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-primary-foreground font-semibold"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image
                  src={images.CommonFlower}
                  alt=""
                  fill
                  className="object-contain opacity-60"
                />
              </div>
              <span className="font-sans text-body-sm sm:text-body-xs 2xl:text-body-md text-primary-foreground">
                {addOn}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
