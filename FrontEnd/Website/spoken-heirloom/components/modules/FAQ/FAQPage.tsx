"use client";

import { ContactSection } from "@/components/shared/ContactSection";
import { images } from "@/utils/constant";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { FAQDetails } from "./subcomponent";

export default function FAQPage() {
  return (
    <>
      <CommonHeroSection
        backgroundImage={images.FAQPageHero}
        text="FAQ/SUPPORT"
      />

      <FAQDetails />

      <ContactSection
        smallHeading=""
        alignment="left"
        description=""
        bigHeading="ASK ANYTHING FROM US"
        showWhirl={false}
        descriptionColor="text-primary-foreground"
        descriptionStyle="normal"
        afterButtonDesc={false}
      />
    </>
  );
}
