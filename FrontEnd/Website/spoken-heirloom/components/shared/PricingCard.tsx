import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/constant";
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
      className={`relative flex flex-col pt-8 ${
        highlighted && isProElevated ? "md:-translate-y-8" : ""
      }`}
    >
      {/* Star icon for highlighted card */}
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
      )}

      {/* Card container */}
      <div className={`font-cormorant relative h-180 `}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-12 md:px-10 md:py-14 flex flex-col items-center text-center h-full">
          {/* Plan name */}
          <h3 className="text-xl md:text-2xl text-primary-foreground font-semibold uppercase tracking-wider">
            {name}
          </h3>

          {/* Subtitle - fixed height for alignment */}
          <div className="h-10 flex items-center justify-center">
            {subtitle && (
              <p className="font-sans text-body-sm text-primary-foreground/80">
                {subtitle}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
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
          <div className="w-full flex justify-center h-32 md:h-44 mb-0">
            {frontImage && (
              <div className="relative w-48 md:w-64 h-full">
                <Image
                  src={frontImage}
                  alt={name}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            )}
          </div>

          {/* Divider line - full width, always at same position */}
          <div className="w-full border-b border-black/20 mb-8" />

          {/* Features list */}
          <ul className="space-y-3 mb-auto w-full max-w-xs text-left">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-primary-foreground font-medium text-body-sm font-sans"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="w-full max-w-xs mt-10">
            <Button
              text={cta}
              onClick={onCtaClick}
              backgroundColor="bg-primary-foreground"
              textColor="text-white"
              borderColor="border-transparent"
              hoverBgColor="hover:bg-primary-foreground/90"
              hoverTextColor="hover:text-white"
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
              <span className="font-sans text-body-xs text-primary-foreground">
                {addOn}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
