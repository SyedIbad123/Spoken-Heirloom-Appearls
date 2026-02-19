"use client";

import { ContactSection } from "@/components/shared/marketing/ContactSection";
import { images } from "@/utils/web-constants";
import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import { FAQDetails } from "./subcomponents";

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
