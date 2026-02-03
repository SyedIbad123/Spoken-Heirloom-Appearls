import CommonHeroSection from "@/components/shared/CommonHeroSection";
import Marquee from "@/components/shared/Marquee";
import Stats from "@/components/shared/Stats";
import { images, marqueeItems } from "@/utils/constant";
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
