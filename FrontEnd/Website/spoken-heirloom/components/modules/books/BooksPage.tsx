import CommonHeroSection from "@/components/shared/CommonHeroSection";
import { images } from "@/utils/constant";
import BooksDetails from "./subcomponents/BooksDetails";

export default function BooksPage() {
  return (
    <>
      <CommonHeroSection backgroundImage={images.BookPageHero} text="CONTACT" />
      <BooksDetails />
    </>
  );
}
