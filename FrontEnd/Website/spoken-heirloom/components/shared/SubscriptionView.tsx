import Image from "next/image";
import { images } from "@/utils/constant";
import Button from "./Button";

export default function SubscriptionView() {
  const howItWorksSteps = [
    {
      icon: images.MessageSubscriptionImage,
      title:
        "Receive Prompts by Text or Email – Choose daily, weekly, or monthly reminders.",
    },
    {
      icon: images.QRSubscriptionImage,
      title:
        "Share Your Memories – Reply with a story, photo, or voice recording. Each one automatically creates a QR code and adds to your book.",
    },
    {
      icon: images.FamilyCareSubscriptionImage,
      title:
        "Invite Family Members – Add grandparents, cousins, or friends so everyone can share their memories together.",
    },
    {
      icon: images.PhotoGallerySubscriptionImage,
      title:
        "Watch Your Book Grow – Over time, your memories fill the pages. When you're ready, print or keep adding digitally.",
    },
  ];

  const bookCategories = [
    {
      icon: images.WeddingSubscriptionImage,
      title:
        "Wedding: Both partners receive prompts to capture their story from each side.",
    },
    {
      icon: images.FamilyHouseSubscriptionImage,
      title:
        "Family Legacy: Invite grandparents, aunts, uncles, and cousins to add their voices and memories.",
    },
    {
      icon: images.ChildhoodSubscriptionImage,
      title:
        "Childhood: Parents receive prompts to capture milestones and moments as they happen.",
    },
    {
      icon: images.TravelSubscriptionImage,
      title:
        "Travel: Share photos and stories as you explore, then print your adventures at the end of the year.",
    },
  ];

  return (
    <div className="relative py-20 md:py-12 px-10 overflow-hidden">
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
      <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none mix-blend-multiply">
        <Image src={images.CommonLeaf} alt="" className="object-contain" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-semibold text-display-sm md:text-display-sm text-primary-foreground mb-2 tracking-wider">
            Build Your Heirloom Over Time
          </h2>
          <p className="text-primary-foreground font-medium text-body-lg font-serif max-w-3xl mx-auto">
            Preserve your memories month by month through our guided
            storytelling subscription.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-36 mb-16 relative">
          {/* Left column - How it works */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-10">
              Here's how it works
            </h3>
            <div className="space-y-5">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 relative">
                    <Image
                      src={step.icon}
                      alt=""
                      className="object-contain opacity-75"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary-foreground">
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
            <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-10">
              Book Categories
            </h3>
            <div className="space-y-5">
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
                    <h4 className="font-serif text-lg text-primary-foreground">
                      {category.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            text="Start My Subscription"
            backgroundColor="bg-primary-foreground"
            textColor="text-white"
            borderColor="border-primary-foreground"
            hoverBgColor="hover:bg-primary-foreground/90"
            hoverTextColor="hover:text-white"
            className="px-12 py-4"
          />
        </div>
      </div>
    </div>
  );
}
