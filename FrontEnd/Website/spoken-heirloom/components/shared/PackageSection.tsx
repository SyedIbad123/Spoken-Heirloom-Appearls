"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";
import ToggleButton from "@/components/shared/ToggleButton";
import SubscriptionView from "@/components/shared/SubscriptionView";
import Stats from "@/components/shared/Stats";
import { images, packages, subscriptions } from "@/utils/constant";
import MemoryVoiceBanner from "@/components/shared/MemoryVoiceBanner";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "./Button";

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
      <section className="flex flex-col gap-20 bg-primary mt-12">
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

          <ToggleButton
            tabs={pricingTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="font-sans"
          />

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                  {packages.map((plan, index) => (
                    <PricingCard
                      key={plan.name}
                      name={plan.name}
                      price={plan.price}
                      period={(plan as any).period}
                      features={plan.features}
                      highlighted={plan.highlighted}
                      cta={plan.cta}
                      backgroundImage={packages[index].backgroundImage}
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

        {showStats && <Stats />}

        {showMemoryVoiceBanner && !rightImage && !leftImage && (
          <div className="relative bg-primary-border/30 px-8 md:px-12 mb-16 mt-8 h-100">
            {/* CommonLeaf - Top Left */}
            <div className="absolute -top-13.5 left-0 w-32 h-32 md:w-56 md:h-56 pointer-events-none mix-blend-multiply">
              <Image
                src={images.CommonLeaf}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* CommonLeaf - Bottom Right */}
            <div className="absolute -bottom-13.5 right-0 w-32 h-32 md:w-56 md:h-56 pointer-events-none mix-blend-multiply rotate-180">
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
                <p className=" text-lg md:text-xl lg:text-4xl text-primary-foreground font-normal uppercase mb-1 tracking-wide whitespace-pre-line">
                  {`Because some storiews deserve \n to be heard - Not just \n remembered`}
                </p>
                <div className="mt-8">
                  <Button
                    text={"Create Your Book"}
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
