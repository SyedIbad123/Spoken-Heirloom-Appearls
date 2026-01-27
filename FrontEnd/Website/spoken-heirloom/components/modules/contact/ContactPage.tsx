import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { images } from "@/utils/constant";
import { ContactSection } from "@/components/shared/ContactSection";
import { ContactDetails } from "./subcomponent";

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
