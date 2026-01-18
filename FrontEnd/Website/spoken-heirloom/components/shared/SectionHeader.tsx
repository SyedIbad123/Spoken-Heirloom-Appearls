import Image, { StaticImageData } from "next/image";
import { images } from "@/utils/constant";

interface SectionHeaderProps {
  smallHeading?: string;
  bigHeading: string;
  description?: string;
  showWhirl?: boolean;
  alignment?: "left" | "center" | "right";
  smallHeadingColor?: string;
  bigHeadingColor?: string;
  descriptionColor?: string;
  className?: string;
}

export default function SectionHeader({
  smallHeading,
  bigHeading,
  description,
  showWhirl = false,
  alignment = "center",
  smallHeadingColor = "text-primary-foreground",
  bigHeadingColor = "text-primary-foreground",
  descriptionColor = "text-foreground-muted",
  className = "",
}: SectionHeaderProps) {
  const alignmentClass =
    alignment === "left"
      ? "text-left"
      : alignment === "right"
        ? "text-right"
        : "text-center";

  const alignmentItemsClass =
    alignment === "left"
      ? "items-start justify-start"
      : alignment === "right"
        ? "items-end justify-end"
        : "items-center justify-center";

  return (
    <div className={`mb-8 md:mb-12 ${alignmentClass} ${className}`}>
      {/* Small heading (optional) */}
      {smallHeading && (
        <p
          className={`${smallHeadingColor} font-medium text-body-sm tracking-wider mb-3`}
        >
          {smallHeading}
        </p>
      )}

      {/* Big heading */}
      <h2
        className={`font-serif text-display-sm md:text-display-md ${bigHeadingColor} uppercase mb-4 whitespace-pre-line`}
      >
        {bigHeading}
      </h2>

      {/* Description (optional) */}
      {description && (
        <p
          className={`${descriptionColor} text-body-md font-serif italic max-w-xl ${
            alignment === "center" ? "mx-auto" : ""
          } mb-6`}
        >
          {description}
        </p>
      )}

      {/* Decorative flourish (optional) */}
      {showWhirl && (
        <div className={`flex ${alignmentItemsClass} mb-8 w-full h-full`}>
          <Image src={images.CommonWhirl} alt="" />
        </div>
      )}
    </div>
  );
}
