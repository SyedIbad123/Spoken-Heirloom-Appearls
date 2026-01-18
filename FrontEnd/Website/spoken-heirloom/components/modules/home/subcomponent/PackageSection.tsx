"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingCard from "@/components/shared/PricingCard";
import PricingToggle from "@/components/shared/PricingToggle";
import SubscriptionView from "@/components/shared/SubscriptionView";
import Stats from "@/components/shared/Stats";
import { images } from "@/utils/constant";
import MemoryVoiceBanner from "@/components/shared/MemoryVoiceBanner";

const packages = [
  {
    name: "BASIC",
    price: "$100",
    features: [
      "Up to 20 custom-designed pages (text + images)",
      "1-2 audio recordings integrated via QR codes",
      "Printed hardcover memory book (8x8 size)",
      "Digital flipbook version included",
    ],
    highlighted: false,
    cta: "Get Started",
    backgroundImage: images.BasicPlanImage,
  },
  {
    name: "PRO",
    price: "$250",
    features: [
      "Up to 50 custom-designed pages",
      "5-7 audio recordings seamlessly integrated",
      "Premium linen or leather-bound book (10x10 or 12x12)",
      "Digital interactive edition (web + app access)",
      "Personalized design consultation",
    ],
    highlighted: true,
    cta: "Get Started",
    backgroundImage: images.ProPlanImage,
  },
  {
    name: "PREMIUM",
    price: "$350",
    features: [
      "Up to 100+ custom-designed pages",
      "Unlimited audio/story integrations",
      "Archival-quality handcrafted book with slipcase",
      "Digital interactive edition + lifetime hosting",
      "White-glove storytelling support (editing, design, organization)",
    ],
    highlighted: false,
    cta: "Get Started",
    backgroundImage: images.PremiumPlanImage,
  },
];

const subscriptions = [
  {
    name: "BASIC",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited Book Projects",
      "10 QR Audio Recordings/month",
      "All Templates",
      "Cloud Storage",
      "Cancel Anytime",
    ],
    highlighted: false,
    cta: "Subscribe",
    backgroundImage: images.BasicPlanImage,
  },
  {
    name: "PRO",
    price: "$249",
    period: "/year",
    features: [
      "Everything in Monthly",
      "Unlimited QR Recordings",
      "Priority Support",
      "1 Free Book Annually",
      "Exclusive Templates",
      "Save $99/year",
    ],
    highlighted: true,
    cta: "Best Value",
    backgroundImage: images.ProPlanImage,
  },
  {
    name: "PREMIUM",
    price: "$599",
    period: "one-time",
    features: [
      "All Annual Benefits",
      "Lifetime Access",
      "2 Free Books Annually",
      "VIP Support",
      "Early Access Features",
      "Family Account Sharing",
    ],
    highlighted: false,
    cta: "Get Lifetime",
    backgroundImage: images.PremiumPlanImage,
  },
];

export default function PackagesSection() {
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
            smallHeading="Our Pricing"
            bigHeading="PACKAGES & SUBSCRIPTIONS PRICES"
            smallHeadingColor="text-primary-foreground"
            bigHeadingColor="text-primary-foreground"
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
        <Stats />
        <MemoryVoiceBanner
          leftImage={images.MemoryLeftImage}
          rightImage={images.MemoryRightImage}
        />
      </section>

      {/* Stats Section */}
    </>
  );
}
