import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/constant";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  backgroundImage: StaticImageData;
  onCtaClick?: () => void;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
  backgroundImage,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div className="relative">
      {/* CommonLeaf decoration at top left */}

      {/* Card container */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 z-20 pointer-events-none mix-blend-multiply">
          <Image src={images.CommonLeaf} alt="" className="object-contain" />
        </div>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-12 md:px-10 md:py-24 flex flex-col items-center text-center min-h-170">
          {/* Plan name */}
          <h3 className="font-serif text-xl md:text-xl text-primary-foreground mb-6 uppercase tracking-wider">
            {name}
          </h3>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl md:text-4xl font-serif font-bold text-primary-foreground">
                {price}
              </span>
              {period && (
                <span className="text-sm text-primary-foreground">
                  {period}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="text-primary-foreground text-body-sm mb-8 max-w-xs">
              {description}
            </p>
          )}

          {/* Features list */}
          <ul className="space-y-4 mb-10 flex-1 w-72 text-center">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-2 text-primary-foreground text-body-sm"
              >
                <span className="flex-1"> • {feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Button
            text={cta}
            onClick={onCtaClick}
            backgroundColor={
              highlighted ? "bg-primary-foreground" : "bg-transparent"
            }
            textColor={highlighted ? "text-white" : "text-primary-foreground"}
            borderColor="border-primary-foreground"
            hoverBgColor="hover:bg-primary-foreground"
            hoverTextColor="hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
