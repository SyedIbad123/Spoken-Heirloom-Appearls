"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";
import PricingToggle from "@/components/shared/PricingToggle";
import SubscriptionView from "@/components/shared/SubscriptionView";
import Stats from "@/components/shared/Stats";
import { images, packages, subscriptions } from "@/utils/constant";
import MemoryVoiceBanner from "@/components/shared/MemoryVoiceBanner";

import type { StaticImageData } from "next/image";

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
}

export default function PackagesSection({
  showStats = true,
  smallHeading = "Our Pricing",
  bigHeading = "PACKAGES & SUBSCRIPTIONS PRICES",
  smallHeadingColor = "text-primary-foreground",
  bigHeadingColor = "text-primary-foreground",
  leftImage,
  rightImage,
  heading,
  sizeOfHeading,
}: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState<"packages" | "subscriptions">(
    "packages",
  );

  const currentPricing = activeTab === "packages" ? packages : subscriptions;

  const getBackgroundImage = (index: number) => {
    if (activeTab === "packages") {
      return packages[index].backgroundImage;
    }
    return subscriptions[index].backgroundImage;
  };

  return (
    <>
      <section className="flex flex-col gap-28 py-section-md md:py-section-md bg-primary">
        <div className="section-container">
          <SectionHeader
            smallHeading={smallHeading}
            bigHeading={bigHeading}
            smallHeadingColor={smallHeadingColor}
            bigHeadingColor={bigHeadingColor}
          />

          <PricingToggle activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "packages" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mt-16">
              {currentPricing.map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  period={(plan as any).period}
                  features={plan.features}
                  highlighted={plan.highlighted}
                  cta={plan.cta}
                  backgroundImage={getBackgroundImage(index)}
                />
              ))}
            </div>
          ) : (
            <SubscriptionView />
          )}
        </div>
        {showStats && <Stats />}
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
      </section>
    </>
  );
}
