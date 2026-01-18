"use client";

import { useState } from "react";
import Image from "next/image";
import { images, galleryCategories, galleryItems } from "@/utils/constant";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";

export default function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState("All Inspiration");

  const filteredItems =
    activeCategory === "All Inspiration"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-section-md md:py-section-sm bg-primary">
      <div className="section-container">
        {/* Section header */}
        <SectionHeader
          smallHeading="Books"
          bigHeading="HEIRLOOM INSPIRATION"
          description="Explore beautifully crafted examples of memory books you can create."
          showWhirl={true}
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-body-sm  transition-all duration-300 pb-2 relative ${
                activeCategory === category
                  ? "font-bold text-primary-foreground"
                  : "font-medium text-primary-foreground"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-0.75 bg-primary-foreground"></span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="flex-1 relative mx-3 mb-3">
                <Image
                  src={images.InspirationBookSVG}
                  alt={item.title}
                  className="object-cover h-120 w-full drop-shadow-lg drop-shadow-black/15"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            text="View All Inspo"
            textColor="text-olive"
            borderColor="border-primary-foreground/35 border-2"
            hoverBgColor="hover:bg-primary-foreground"
            hoverTextColor="hover:text-white"
            className="py-3.5"
          />
        </div>
      </div>
    </section>
  );
}
