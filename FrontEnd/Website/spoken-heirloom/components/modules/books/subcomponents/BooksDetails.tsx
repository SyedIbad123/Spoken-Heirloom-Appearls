"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryCategories, bookImages } from "@/utils/constant";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";

const BooksDetails: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayedImages = bookImages;

  return (
    <div className="py-10 px-2 md:px-0">
      <SectionHeader
        bigHeading="EXPLORE HEIRLOOM INSPIRATION"
        className="text-center text-3xl md:text-4xl font-serif mb-2 text-primary-foreground tracking-wide"
      />
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

      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedImages.map((img, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden bg-white"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Image
              src={img.main}
              alt={`Book inspiration ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              width={400}
              height={400}
              priority={idx < 3}
            />
            {/* Hover pop-up */}
            <div
              className={`absolute bottom-4 right-4 z-10 bg-[#eae5dd] text-primary-foreground text-lg font-serif rounded-md shadow-lg transition-all duration-300
                ${
                  hoveredIdx === idx
                    ? "opacity-100 scale-105 pt-8 pl-8 pb-4 pr-4 translate-x-0 translate-y-0"
                    : "opacity-0 scale-90 pt-2 pl-2 pb-2 pr-4 pointer-events-none translate-x-8 translate-y-8"
                }`}
              style={{ minWidth: 220, maxWidth: 320 }}
            >
              <div className="transition-all duration-300">{img.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          text="Load More"
          className="mb-10 md:mb-4"
          textColor="text-olive"
          borderColor="border-olive"
          hoverBgColor="hover:bg-olive"
          hoverTextColor="hover:text-white"
        />
      </div>
    </div>
  );
};

export default BooksDetails;
