import { Suspense } from "react";
import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { images } from "@/utils/constant";
import BooksDetails from "./subcomponents/BooksDetails";

export default function BooksPage() {
  return (
    <>
      <CommonHeroSection backgroundImage={images.BookPageHero} text="BOOKS" />
      <Suspense fallback={null}>
        <BooksDetails />
      </Suspense>
    </>
  );
}
