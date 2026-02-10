import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { customizeAlbumItems, images } from "@/utils/constant";
import Image, { StaticImageData } from "next/image";

interface CustomizeAlbumItem {
  id: number;
  title: string;
  description?: string;
  highlightedText?: string[];
  price?: string;
  priceLabel?: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  type: "info" | "single-price" | "multi-price" | "subscription";
  priceRows?: { label: string; price: string }[];
}

interface CustomizeAlbumSectionProps {
  smallHeading?: string;
  bigHeading?: string;
  description?: string;
  backgroundImage?: StaticImageData;
}

export default function CustomizeAlbumSection({
  smallHeading,
  bigHeading = "Customize Your Album",
  description = "All personalization options are available while building your album.",
  backgroundImage,
}: CustomizeAlbumSectionProps) {
  return (
    <section className="relative ">
      <div className="section-container">
        {/* Header */}
        <SectionHeader
          smallHeading={smallHeading}
          bigHeading={bigHeading}
          description={description}
          bigHeadingColor="text-primary-foreground"
          descriptionColor="text-black"
          descriptionStyle="normal"
          fontStyleBigHeading="bold font-cormorant"
          fontStyleDescription="font-sans "
          headingTransformation=""
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:auto-rows-auto gap-6 max-w-7xl mx-auto">
          {(customizeAlbumItems as CustomizeAlbumItem[]).map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden p-8 md:p-6 ${
                item.id === 3 ? "md:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0">
                {backgroundImage && (
                  <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              {/* Content */}
              <div className="relative z-10">
                {/* Title and Price in row for Multi-Memory QR only, column for Add More Pages */}
                {item.type === "single-price" && item.id === 5 ? (
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl md:text-xl font-semibold">
                      {item.title}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl md:text-2xl text-primary-foreground font-bold">
                        {item.price}
                      </span>
                      {item.priceLabel && (
                        <span className="font-sans text-body-xs text-foreground-muted">
                          {item.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>
                ) : item.type === "single-price" ? (
                  <div className="mb-3">
                    <h3 className="font-serif text-2xl md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl md:text-2xl text-primary-foreground font-bold">
                        {item.price}
                      </span>
                      {item.priceLabel && (
                        <span className="font-sans text-body-xs ">
                          {item.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <h3 className="font-serif text-2xl md:text-xl  font-semibold mb-3">
                    {item.title}
                  </h3>
                )}

                {/* Info type - description with highlighted text */}
                {item.type === "info" && item.description && (
                  <p className="font-sans text-body-sm leading-relaxed">
                    {item.highlightedText
                      ? renderHighlightedText(
                          item.description,
                          item.highlightedText,
                        )
                      : item.description}
                  </p>
                )}

                {/* Single price with description (Multi-Memory QR) */}
                {item.type === "single-price" && item.description && (
                  <p className="font-sans text-body-xs  leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}

                {/* Multi price (Embossed Foil Titles) */}
                {item.type === "multi-price" && (
                  <>
                    {item.subtitle && (
                      <p className="font-sans text-body-sm text-foreground-muted mb-4">
                        {item.subtitle}
                      </p>
                    )}
                    <div className="space-y-3 mt-4">
                      {item.priceRows?.map((row, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="font-sans text-body-lg font-bold">
                            {row.label}
                          </span>
                          <div className="flex-1 mx-4 border-b border-black" />
                          <span className="font-sans text-2xl md:text-3xl text-primary-foreground font-bold">
                            {row.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Subscription type */}
                {item.type === "subscription" && (
                  <div className="flex items-end justify-between mt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl md:text-2xl text-primary-foreground font-bold">
                        {item.price}
                      </span>
                      {item.priceLabel && (
                        <span className="font-sans text-body-sm">
                          {item.priceLabel}
                        </span>
                      )}
                    </div>
                    {item.linkText && (
                      <a
                        href={item.linkHref || "#"}
                        className="font-sans text-body-sm text-primary-foreground hover:text-olive transition-colors inline-flex items-center gap-2"
                      >
                        {item.linkText}
                        <Image
                          src={images.RightArrowOlive}
                          width={40}
                          className="mt-1"
                          alt="Right Arrow"
                        />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders text with highlighted portions in a distinctive style
 */
function renderHighlightedText(text: string, highlights: string[]) {
  let result: (string | React.ReactElement)[] = [text];

  highlights.forEach((highlight) => {
    const newResult: (string | React.ReactElement)[] = [];
    result.forEach((part) => {
      if (typeof part === "string") {
        const parts = part.split(highlight);
        parts.forEach((p, i) => {
          newResult.push(p);
          if (i < parts.length - 1) {
            newResult.push(
              <span
                key={`${highlight}-${i}`}
                className="text-primary-foreground font-semibold"
              >
                {highlight}
              </span>,
            );
          }
        });
      } else {
        newResult.push(part);
      }
    });
    result = newResult;
  });

  return <>{result}</>;
}
