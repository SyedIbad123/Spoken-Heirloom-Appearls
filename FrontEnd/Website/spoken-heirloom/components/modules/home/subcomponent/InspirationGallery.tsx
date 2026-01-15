"use client";

import { useState } from "react";

const categories = [
  "All",
  "Family Memories",
  "Special Occasions",
  "Childhood Treasures",
  "Travel Legacies",
  "Love Stories",
];

const galleryItems = [
  {
    id: 1,
    title: "David & Rose",
    subtitle: "A Love Story",
    category: "Love Stories",
  },
  {
    id: 2,
    title: "David & Rose",
    subtitle: "Golden Years",
    category: "Family Memories",
  },
  {
    id: 3,
    title: "David & Rose",
    subtitle: "Our Journey",
    category: "Travel Legacies",
  },
  {
    id: 4,
    title: "David & Rose",
    subtitle: "Together Forever",
    category: "Special Occasions",
  },
];

export default function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-section-md md:py-section-lg bg-secondary-light">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-medium text-body-sm uppercase tracking-wider mb-3">
            Gallery
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-4">
            Heirloom Inspiration
          </h2>
          <p className="text-foreground-muted text-body-lg max-w-xl mx-auto">
            Explore beautifully crafted examples of memory books you can create.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-white text-foreground-muted hover:bg-secondary hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 cursor-pointer"
            >
              {/* Background placeholder - simulating book cover */}
              <div className="absolute inset-0 bg-gradient-to-br from-olive to-olive-dark">
                {/* Book texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

                {/* Spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              {/* Book cover content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Decorative frame */}
                <div className="absolute inset-4 border border-accent/30 rounded-lg pointer-events-none" />

                {/* Decorative corner ornaments */}
                <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-accent/40" />
                <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-accent/40" />
                <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-accent/40" />
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-accent/40" />

                {/* Title */}
                <div className="mb-4">
                  <p className="text-accent-light text-xs uppercase tracking-widest mb-1">
                    The Story of
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Decorative flourish */}
                <div className="text-accent-light text-lg mb-4">❧</div>

                {/* Subtitle */}
                <p className="text-white/70 text-sm font-serif italic">
                  {item.subtitle}
                </p>

                {/* Placeholder image area */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/10 border border-white/20" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-6 py-3 rounded-full border-2 border-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="btn-outline">View All Designs</button>
        </div>
      </div>
    </section>
  );
}
