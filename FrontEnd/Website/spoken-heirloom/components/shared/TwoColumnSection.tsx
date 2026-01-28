"use client";

import Image, { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";

interface TwoColumnSectionProps {
  // Image props
  image?: StaticImageData | string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageContent?: React.ReactNode;
  imageClassName?: string;

  smallHeading?: string;
  bigHeading?: string;
  description?: string;
  showWhirl?: boolean;
  descriptionColor?: string;
  descriptionStyle?: string;
  headerAlign?: "left" | "center" | "right";

  backgroundColor?: string;
  containerClassName?: string;
  contentClassName?: string;
  gap?: string;

  children?: React.ReactNode;
}

export default function TwoColumnSection({
  image,
  imageAlt = "Section image",
  imagePosition = "right",
  imageContent,
  imageClassName = "",
  smallHeading,
  bigHeading,
  description,
  showWhirl = true,
  descriptionColor,
  descriptionStyle,
  headerAlign = "left",
  children,
  backgroundColor = "bg-primary",
  containerClassName = "",
  contentClassName = "",
  gap = "gap-12 lg:gap-16",
}: TwoColumnSectionProps) {
  const imageSection = (
    <div className={`order-1 lg:order-${imagePosition === "left" ? "1" : "2"}`}>
      <div
        className={`relative ${imageClassName || "aspect-4/5 overflow-hidden"}`}
      >
        {image && typeof image === "string" ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}
        {imageContent}
      </div>
    </div>
  );

  const contentSection = (
    <div
      className={`order-2 lg:order-${imagePosition === "left" ? "2" : "1"} ${contentClassName}`}
    >
      {bigHeading && (
        <div
          className={`mb-8 md:mb-12 ${headerAlign === "center" ? "text-center" : headerAlign === "right" ? "text-right" : "text-left"}`}
        >
          <SectionHeader
            smallHeading={smallHeading}
            bigHeading={bigHeading}
            description={description}
            showWhirl={showWhirl}
            descriptionColor={descriptionColor}
            descriptionStyle={descriptionStyle}
          />
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`py-section-md md:py-section-sm ${backgroundColor}`}>
      <div className={`section-container ${containerClassName}`}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${gap} items-center max-w-6xl mx-auto`}
        >
          {imagePosition === "left" ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
