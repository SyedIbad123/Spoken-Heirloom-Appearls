import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import { images } from "@/utils/web-constants";
import { ContactSection } from "@/components/shared/marketing/ContactSection";
import { ContactDetails } from "./subcomponents";

export default function ContactPage() {
  return (
    <>
      <CommonHeroSection
        backgroundImage={images.ContactPageHero}
        text="CONTACT"
      />

      <ContactDetails />

      <ContactSection
        smallHeading=""
        alignment="left"
        description="Send us a message and we’ll get back to you shortly."
        bigHeading="STILL NEED HELP"
        showWhirl={false}
        descriptionColor="text-primary-foreground"
        descriptionStyle="normal"
        afterButtonDesc={true}
      />
    </>
  );
}
