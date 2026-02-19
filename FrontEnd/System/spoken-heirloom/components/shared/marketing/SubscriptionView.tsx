import Image from "next/image";
import {
  images,
  howItWorksStepsSubscription,
  bookCategories,
} from "@/utils/web-constants";
import Button from "../Button";

export default function SubscriptionView() {
  return (
    <div className="relative group overflow-visible mb-10 lg:mb-8">
      <div className="relative py-10 sm:py-12 md:py-7 px-4 sm:px-6 md:px-10 overflow-visible transition-transform duration-900 ease-in-out group-hover:translate-y-5">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.Subscription_Plan_Image}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* CommonLeaf decoration at top left */}
        <div className="absolute md:hidden lg:absolute top-0 left-0 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 pointer-events-none mix-blend-multiply transition-all duration-900 ease-in-out group-hover:w-60 ">
          <Image src={images.CommonLeaf} alt="" className="object-contain" />
        </div>

        {/* Content */}
        <div className="section-container relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif font-semibold text-3xl sm:text-4xl md:text-display-sm text-primary-foreground mb-2 tracking-wider">
              Build Your Heirloom Over Time
            </h2>
            <p className="text-primary-foreground font-medium text-base sm:text-body-lg font-serif max-w-3xl mx-auto">
              Preserve your memories month by month through our guided
              storytelling subscription.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-36 mb-10 md:mb-16 relative">
            {/* Left column - How it works */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-6 md:mb-10">
                Here's how it works
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {howItWorksStepsSubscription.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="shrink-0 w-8 h-8 relative">
                      <Image
                        src={step.icon}
                        alt=""
                        className="object-contain opacity-75"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg text-primary-foreground">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider for desktop, horizontal for mobile */}
            <div className="hidden lg:block absolute left-1/2 top-20 bottom-10 w-px bg-primary-foreground/30" />
            <div className="lg:hidden w-full h-px bg-primary-foreground/20" />

            {/* Right column - Book Categories */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-6 md:mb-10">
                Book Categories
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {bookCategories.map((category, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="shrink-0 w-8 h-8 relative">
                      <Image
                        src={category.icon}
                        alt=""
                        className="object-contain opacity-75"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg text-primary-foreground">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center transition-all duration-900 ease-in-out group-hover:[&>button]:bg-primary-foreground group-hover:[&>button]:text-white">
            <Button
              text="Start My Subscription"
              backgroundColor="bg-transparent"
              textColor="text-primary-foreground"
              borderColor="border-primary-foreground"
              hoverBgColor="hover:bg-primary-foreground/90"
              hoverTextColor="hover:text-white"
              className="px-7 sm:px-10 md:px-12 py-3 md:py-4 font-cormorant text-base sm:text-lg 2xl:text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
