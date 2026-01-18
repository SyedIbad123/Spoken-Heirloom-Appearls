import Image from "next/image";
import { images } from "@/utils/constant";

interface CarouselNavigationProps {
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  variant?: "light" | "dark";
}

export default function CarouselNavigation({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  variant = "light",
}: CarouselNavigationProps) {
  const textColor =
    variant === "light" ? "text-white" : "text-primary-foreground";
  const leftArrow =
    variant === "light" ? images.LeftArrowWhite : images.LeftArrowOlive;
  const rightArrow =
    variant === "light" ? images.RightArrowWhite : images.RightArrowOlive;

  return (
    <div className="flex items-center gap-4">
      <button onClick={onPrev} className="cursor-pointer">
        <Image
          src={leftArrow}
          alt="Previous"
          className="object-cover w-20 md:w-28 h-full"
        />
      </button>
      <div
        className={`${textColor} text-sm md:text-base font-light tracking-widest`}
      >
        {String(currentIndex + 1)}/{String(totalItems)}
      </div>
      <button onClick={onNext} className="cursor-pointer">
        <Image
          src={rightArrow}
          alt="Next"
          className="object-cover w-20 md:w-28 h-full"
        />
      </button>
    </div>
  );
}
