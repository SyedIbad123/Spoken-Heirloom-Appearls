import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import Marquee from "@/components/shared/marketing/Marquee";
import Stats from "@/components/shared/marketing/Stats";
import { images, marqueeItems } from "@/utils/web-constants";
import AboutTheFounder from "./subcomponent/AboutTheFounder";
import { MissionVisionSection } from "./subcomponent";

export default function AboutPage() {
  return (
    <>
      <CommonHeroSection backgroundImage={images.AboutHeroImage} text="ABOUT" />

      <AboutTheFounder />

      <Marquee items={marqueeItems} />

      <MissionVisionSection />

      <Stats />
    </>
  );
}
