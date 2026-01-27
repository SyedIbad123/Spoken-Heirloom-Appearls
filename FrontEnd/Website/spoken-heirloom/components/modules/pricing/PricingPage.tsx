import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { images } from "@/utils/constant";
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
      />
    </>
  );
};

export default PricingPage;
