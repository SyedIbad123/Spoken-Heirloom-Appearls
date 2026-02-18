import Image from "next/image";
import { images } from "@/utils/constant";

interface MarqueeProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  showLeaf?: boolean;
  leafPosition?: "left" | "right";
}

export default function Marquee({
  items,
  backgroundColor = "bg-primary-border/30",
  textColor = "text-primary-foreground",
  showLeaf = false,
  leafPosition = "right",
}: MarqueeProps) {
  return (
    <div
      className={`font-cormorant relative ${backgroundColor} py-8 md:py-9 overflow-hidden`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`flex ${textColor} items-center`}>
            {items.map((item, index) => (
              <span key={index}>
                <span className="text-lg md:text-2xl 2xl:text-3xl font-semibold mx-1">
                  {item}
                </span>
                {index < items.length - 1 && (
                  <span className="mx-1 font-extrabold">—</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Leaf decoration */}
      {showLeaf && (
        <div
          className={`absolute ${
            leafPosition === "right" ? "right-0" : "left-0"
          } top-15 -translate-y-1/2 z-10 pointer-events-none ${
            leafPosition === "right" ? "rotate-180" : ""
          } mix-blend-multiply`}
        >
          <Image
            src={images.CommonLeaf}
            alt="Leaf decoration"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
