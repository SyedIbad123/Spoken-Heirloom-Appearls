import Image from "next/image";
import { images } from "@/utils/constant";

interface CarouselNavigationProps {
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  variant?: "light" | "dark";
  widthOfArrow?: string;
  sizeOfNumber?: string;
}

export default function CarouselNavigation({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  variant = "light",
  widthOfArrow,
  sizeOfNumber = "text-base",
}: CarouselNavigationProps) {
  const textColor =
    variant === "light" ? "text-white" : "text-primary-foreground";
  const leftArrow =
    variant === "light" ? images.LeftArrowWhite : images.LeftArrowOlive;
  const rightArrow =
    variant === "light" ? images.RightArrowWhite : images.RightArrowOlive;

  return (
    <div className="flex items-center gap-2">
      <button onClick={onPrev} className="cursor-pointer">
        <Image
          src={leftArrow}
          alt="Previous"
          className={`object-cover ${widthOfArrow} h-full`}
        />
      </button>
      <div
        className={`${textColor} ${sizeOfNumber} font-semibold font-serif tracking-widest`}
      >
        {String(currentIndex + 1)}/{String(totalItems)}
      </div>
      <button onClick={onNext} className="cursor-pointer">
        <Image
          src={rightArrow}
          alt="Next"
          className={`object-cover ${widthOfArrow} h-full`}
        />
      </button>
    </div>
  );
}
