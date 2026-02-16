"use client";

import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Card from "@/components/shared/Card";
import CarouselNavigation from "@/components/shared/CarouselNavigation";
import { templateItems } from "@/utils/constant";

export default function FeaturedtemplateItems() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex(
      (s) => (s - 1 + templateItems.length) % templateItems.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((s) => (s + 1) % templateItems.length);
  };

  if (!templateItems || templateItems.length === 0) return null;

  return (
    <section className="py-8 md:py-4 mb-12">
      <div className="container mx-auto px-14">
        <SectionHeader
          bigHeading={"FEATURED templates"}
          description={
            "Each template can be used for both one-time books and ongoing subscriptions"
          }
          alignment="center"
          headingTransformation="uppercase"
          fontStyleBigHeading="font-cormorant"
          fontStyleDescription="font-sans"
          descriptionStyle="normal"
          descriptionColor="text-primary-foreground/80"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {templateItems.map((t) => (
            <Card
              key={t.id}
              images={t.images}
              title={t.title}
              price={t.price}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <CarouselNavigation
            currentIndex={currentIndex}
            totalItems={templateItems.length}
            onPrev={handlePrev}
            onNext={handleNext}
            variant="dark"
            widthOfArrow="w-20 2xl:w-32"
            sizeOfNumber="text-md 2xl:text-3xl"
          />
        </div>
      </div>
    </section>
  );
}
