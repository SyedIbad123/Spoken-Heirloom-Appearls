import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import { images } from "@/utils/web-constants";
import HowItWorksDetails from "./subcomponents/HowItWorksDetails";

export default function HowItWorksPage() {
  return (
    <>
      <CommonHeroSection
        backgroundImage={images.HowItWorksPageHero}
        text="HOW IT WORKS"
        description="Whether you’re creating a one-time keepsake or building your family story month by month, The Spoken Heirloom makes it simple. You can add memories all at once or join our guided storytelling subscription, where prompts help you collect stories and recordings throughout the year."
      />

      <HowItWorksDetails />
    </>
  );
}
