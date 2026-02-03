"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryCategories, bookImages } from "@/utils/constant";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import { useRouter } from "next/navigation";

const BooksDetails: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayedImages = bookImages;

  const navigate = () => {
    router.push("/InnerBook");
  };

  return (
    <div className="py-10 px-2 md:px-0">
      <SectionHeader
        bigHeading="EXPLORE HEIRLOOM INSPIRATION"
        className="text-center text-3xl md:text-4xl font-serif mb-2 text-primary-foreground tracking-wide"
        fontStyleBigHeading="font-cormorant"
      />
      <div className="font-cormorant  flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-body-sm transition-all duration-300 pb-2 relative ${
              activeCategory === category
                ? "font-bold text-primary-foreground"
                : "font-normal text-primary-foreground"
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
            className="relative group overflow-hidden bg-white cursor-pointer"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={navigate}
          >
            <Image
              src={img.main}
              alt={`Book inspiration ${idx + 1}`}
              className="w-full h-full object-cover"
              width={400}
              height={400}
              priority={idx < 3}
            />
            {/* Hover pop-up */}
            <div
              className={`text-center absolute bottom-0 right-0 z-10 bg-primary-border text-primary-foreground text-xs font-cormorant font-bold transition-all duration-400 ease-in-out opacity-100
                ${
                  hoveredIdx === idx
                    ? "pt-12 pl-12 pb-12 pr-8 translate-x-0"
                    : "pt-2 pl-2 pb-2 pr-4 pointer-events-none translate-x-full"
                }`}
              style={{ minWidth: 100, maxWidth: 260 }}
            >
              <div className="text-xs transition-all duration-300">
                {img.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          text="Load More"
          className="mb-10 md:mb-4 font-cormorant! font-bold!"
          textColor="text-olive"
          borderColor="border-olive"
          hoverBgColor="hover:bg-olive"
          hoverTextColor="hover:text-white"
          navigateTo="/create-your-book"
        />
      </div>
    </div>
  );
};

export default BooksDetails;
