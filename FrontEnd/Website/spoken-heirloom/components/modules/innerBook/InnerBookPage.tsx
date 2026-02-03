import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { images } from "@/utils/constant";
import InnerBookDetails from "./subcomponents/InnerBookDetails";

export default function InnerBookPage() {
  return (
    <>
      <CommonHeroSection
        backgroundImage={images.InnerBookPageHero}
        text="Mary & FD Forester's Living Legacy Book"
      />
      <InnerBookDetails />
    </>
  );
}
