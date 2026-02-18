"use client";

import Image, { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";
import CarouselNavigation from "./CarouselNavigation";

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

  // Carousel navigation props
  showNavigation?: boolean;
  navigationProps?: {
    currentIndex: number;
    totalItems: number;
    onPrev: () => void;
    onNext: () => void;
    variant?: "light" | "dark";
  };
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
  showNavigation = false,
  navigationProps,
}: TwoColumnSectionProps) {
  const imageSection = (
    <div className={`order-1 lg:order-${imagePosition === "left" ? "1" : "2"}`}>
      <div
        className={`relative ${imageClassName || "aspect-4/5 overflow-hidden"}`}
        key={typeof image === "string" ? image : undefined}
      >
        {image && typeof image === "string" ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            key={image}
          />
        ) : image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            key={typeof image !== "string" && image?.src ? image.src : "img"}
          />
        ) : null}
        {imageContent}
      </div>
      {showNavigation && navigationProps && (
        <div className="mt-10 text-center flex justify-center">
          <CarouselNavigation {...navigationProps} />
        </div>
      )}
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
            alignment={`${headerAlign === "center" ? "center" : headerAlign === "right" ? "right" : "left"}`}
            fontStyleBigHeading="font-cormorant"
            fontStyleDescription="font-sansh"
          />
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`py-section-sm ${backgroundColor}`}>
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
