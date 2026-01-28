"use client";

import Image from "next/image";
import { inspirationGalleryCards } from "@/utils/constant";
import SectionHeader from "@/components/shared/SectionHeader";
import { CircleAlert } from "lucide-react";

export default function InspirationGallery() {
  return (
    <section className="py-section-md md:py-section-sm bg-primary">
      <div className="section-container">
        <SectionHeader
          smallHeading="Books"
          bigHeading={`CHOOSE THE TYPE OF THE BOOK YOU\nWANT TO CREATE`}
          description="Select a book type, then choose whether to build now or be guided by prompts as life unfolds."
          showWhirl={false}
          descriptionColor="text-primary-foreground"
          descriptionStyle="bold"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {inspirationGalleryCards.map((card, idx) => (
            <div
              key={card.title}
              className="group cursor-pointer bg-white flex flex-col h-full transition-transform hover:-translate-y-1"
            >
              <div className="relative mb-2 aspect-3/4 h-44 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 pb-8">
                <h3 className="text-xl md:text-xl font-serif font-semibold text-primary-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-primary-foreground pr-10">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex flex-row justify-center items-center text-center mt-6 gap-2 ">
          <CircleAlert className="h-4 w-4 text-primary-foreground" />
          <p className="text-sm text-primary-foreground">
            Each book type includes a flexible template designed to help you get
            started.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
