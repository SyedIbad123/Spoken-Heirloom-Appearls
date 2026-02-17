"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";
import SubscriptionView from "@/components/shared/SubscriptionView";
import Stats from "@/components/shared/Stats";
import { images, packages, subscriptions } from "@/utils/constant";
import MemoryVoiceBanner from "@/components/shared/MemoryVoiceBanner";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "./Button";
import CustomizeAlbumSection from "./CustomizeAlbumSection";
import ToggleButton from "./ToggleButton";

// Define tabs for the toggle
const pricingTabs = [
  { id: "packages", label: "Packages" },
  { id: "subscriptions", label: "Subscription" },
];

interface PackagesSectionProps {
  showStats?: boolean;
  smallHeading?: string;
  bigHeading?: string;
  smallHeadingColor?: string;
  bigHeadingColor?: string;
  leftImage?: StaticImageData | null;
  rightImage?: StaticImageData | null;
  heading?: string;
  sizeOfHeading?: string;
  description?: string;
  descriptionColor?: string;
  descriptionStyle?: string;
  showMemoryVoiceBanner?: boolean;
  isProElevated?: boolean;
  showAlbumSection?: boolean;
  showToggleButton?: boolean;
}

export default function PackagesSection({
  showStats = true,
  smallHeading = "Our Pricing",
  bigHeading = "PACKAGES & SUBSCRIPTIONS PRICES",
  smallHeadingColor = "text-primary-foreground",
  bigHeadingColor = "text-primary-foreground",
  description,
  descriptionColor,
  descriptionStyle,
  showMemoryVoiceBanner = true,
  leftImage,
  rightImage,
  heading,
  sizeOfHeading,
  isProElevated = false,
  showAlbumSection = false,
  showToggleButton = true,
}: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("packages");

  const currentPricing = activeTab === "packages" ? packages : subscriptions;

  const getBackgroundImage = (index: number) => {
    if (activeTab === "packages") {
      return packages[index].backgroundImage;
    }
    return subscriptions[index].backgroundImage;
  };

  return (
    <>
      <section className="flex flex-col gap-0 bg-primary">
        <div className="section-container">
          <SectionHeader
            smallHeading={smallHeading}
            bigHeading={bigHeading}
            smallHeadingColor={smallHeadingColor}
            bigHeadingColor={bigHeadingColor}
            description={description}
            descriptionColor={descriptionColor}
            descriptionStyle={descriptionStyle}
            fontStyleSmallHeading="font-cormorant"
            fontStyleBigHeading="font-cormorant"
            fontStyleDescription="font-sans"
          />

          {showToggleButton && (
            <ToggleButton
              tabs={pricingTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="font-sans"
            />
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  activeTab === "packages"
                    ? "translateX(0%)"
                    : "translateX(-100%)",
              }}
            >
              {/* Packages View */}
              <div className="w-full shrink-0" style={{ minWidth: "100%" }}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto ${isProElevated ? "md:items-start pt-4 md:pt-8" : ""}`}
                >
                  {packages.map((plan) => (
                    <PricingCard
                      key={plan.name}
                      name={plan.name}
                      subtitle={plan.subtitle}
                      price={plan.price}
                      features={plan.features}
                      highlighted={plan.highlighted}
                      cta={plan.cta}
                      backgroundImage={plan.backgroundImage}
                      frontImage={plan.frontImage}
                      addOns={plan.addOns}
                      isProElevated={isProElevated}
                    />
                  ))}
                </div>
              </div>

              {/* Subscription View */}
              <div className="w-full shrink-0" style={{ minWidth: "100%" }}>
                <SubscriptionView />
              </div>
            </div>
          </div>
        </div>

        {showAlbumSection && (
          <CustomizeAlbumSection
            backgroundImage={images.CustomizedAlbumBgImage}
          />
        )}

        {showStats && <Stats />}

        {showMemoryVoiceBanner && !rightImage && !leftImage && (
          <div className="relative bg-primary-border/30 px-5 sm:px-6 md:px-12 mb-12 md:mb-16 mt-6 min-h-20 md:min-h-92 md:h-100 py-10 md:py-0">
            {/* CommonLeaf - Top Left */}
            <div className="absolute -top-6 md:-top-13.5 left-0 w-24 h-24 md:w-56 md:h-56 pointer-events-none mix-blend-multiply">
              <Image
                src={images.CommonLeaf}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* CommonLeaf - Bottom Right */}
            <div className="absolute -bottom-6 md:-bottom-13.5 right-0 w-24 h-24 md:w-56 md:h-56 pointer-events-none mix-blend-multiply rotate-180">
              <Image
                src={images.CommonLeaf}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Content with Animation */}
            <div className="flex flex-col justify-center items-center h-full animate-fade-in">
              {/* CommonQuote Icon */}
              <div className="mb-6 flex justify-center"></div>

              {/* Author Info */}
              <div className="font-cormorant text-center">
                <p className=" text-base sm:text-lg md:text-xl lg:text-4xl font-medium text-primary-foreground uppercase mb-1 tracking-wide whitespace-pre-line">
                  {`Because some stories deserve \n to be heard — Not just \n remembered`}
                </p>
                <div className="mt-6 md:mt-8">
                  <Button
                    text={"Create Your Book"}
                    className="text-base md:text-lg 2xl:text-xl"
                    textColor="text-olive"
                    borderColor="border-olive"
                    hoverBgColor="hover:bg-olive"
                    hoverTextColor="hover:text-white"
                    navigateTo="/create-your-book"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {(leftImage || rightImage) && (
          <MemoryVoiceBanner
            heading={heading}
            leftImage={
              typeof leftImage === "undefined"
                ? images.MemoryLeftImage
                : leftImage
            }
            rightImage={
              typeof rightImage === "undefined"
                ? images.MemoryRightImage
                : rightImage
            }
            sizeOfHeading={sizeOfHeading}
          />
        )}
      </section>
    </>
  );
}
