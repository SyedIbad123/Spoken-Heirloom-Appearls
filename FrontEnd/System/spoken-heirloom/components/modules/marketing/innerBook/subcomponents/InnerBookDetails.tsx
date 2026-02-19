import { gridImagesOfInnerBook } from "@/utils/web-constants";
import Image from "next/image";
import BookMockupCarousel from "@/components/shared/marketing/BookMockupCarousel";

const InnerBookDetails: React.FC = () => {
  return (
    <section className="bg-primary py-4 lg:py-20 px-2 md:px-0">
      <BookMockupCarousel
        title={"Mary & FD Forester's Living\nLegacy Book"}
        subtitle="CHECK OUT"
        label="BOOK MOCKUP"
        rightContainerClassName=""
      />

      <div className="max-w-5xl mx-2 xl:mx-auto">
        <h2 className="text-center text-primary-foreground text-xl md:text-2xl xl:text-4xl font-serif font-semibold mb-8 tracking-wider">
          MEMORIES WORTH PRESERVING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-55">
          <div className="flex justify-center h-full ">
            <Image
              src={gridImagesOfInnerBook[0]}
              alt="Book Cover"
              className="w-full max-w-87.5 md:max-w-120 h-full object-cover bg-primary-border/30"
              style={{ objectFit: "contain" }}
              width={200}
              height={200}
              sizes="(max-width: 1024px) 100vw, 220px"
              priority
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-full min-h-55">
            {gridImagesOfInnerBook.slice(1).map((img, idx) => {
              const extraClass = idx === 2 ? "col-span-2 row-start-2" : "";
              return (
                <div
                  key={idx}
                  className={`overflow-hidden shadow h-full ${extraClass}`}
                >
                  <Image
                    src={img}
                    alt={`Memory ${idx + 2}`}
                    className="w-full h-full object-cover"
                    width={220}
                    height={100}
                    sizes="(max-width: 1024px) 100vw, 120px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBookDetails;
