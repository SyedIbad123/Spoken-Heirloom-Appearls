import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import { images } from "@/utils/web-constants";
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
