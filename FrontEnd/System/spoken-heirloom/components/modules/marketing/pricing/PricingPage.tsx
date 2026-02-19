import CommonHeroSection from "@/components/shared/marketing/CommonHeroSection";
import { images } from "@/utils/web-constants";
import { PackagesSection } from "../home/subcomponent";

const PricingPage = () => {
  return (
    <>
      <CommonHeroSection
        backgroundImage={images.PricingPageHero}
        text="PRICING"
      />

      <PackagesSection
        showStats={false}
        smallHeading=""
        bigHeading={`EXPLORE OUR PACKAGES & \n SUBSCRIPTIONS PRICES`}
        smallHeadingColor=""
        bigHeadingColor="text-primary-foreground"
        leftImage={null}
        rightImage={null}
        heading={`BECAUSE SOME STORIES DESERVE \nTO BE HEARD — NOT JUST \n REMEMBERED`}
        sizeOfHeading="2"
        showAlbumSection={true}
        isProElevated={true}
      />
    </>
  );
};

export default PricingPage;
