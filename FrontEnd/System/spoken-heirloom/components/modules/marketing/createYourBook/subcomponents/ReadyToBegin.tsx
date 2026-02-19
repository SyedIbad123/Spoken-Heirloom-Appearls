import Button from "@/components/shared/Button";
import { readyToBeginSection } from "@/utils/web-constants";
import Image from "next/image";

export default function ReadyToBegin() {
  return (
    <section className="section-container mx-auto mt-16 md:mt-16 lg:mt-44">
      <div className="relative section-container p-0 justify-center mb-14 md:mb-20 lg:mb-28 overflow-visible">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-146 gap-0">
          {/* Left Content */}
          <div className="bg-primary-border/30 p-6 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center lg:justify-start h-full">
            <div className="max-w-md flex flex-col justify-center items-center lg:block">
              <h2 className="font-cormorant text-3xl sm:text-4xl md:text-display-md font-normal text-primary-foreground uppercase mb-4 md:mb-6">
                {readyToBeginSection.heading}
              </h2>

              <p className="text-sm sm:text-body-md 2xl:text-lg text-center xl:text-left font-sans text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed">
                {readyToBeginSection.description}
              </p>

              <Button
                text={readyToBeginSection.buttonText}
                className="border-primary-foreground/50 text-md 2xl:text-xl font-cormorant text-primary-text bg-transparent hover:bg-primary-text/10 transition "
                type="button"
                textColor="text-primary-foreground"
                borderColor="border-primary-text"
                backgroundColor="bg-transparent"
                hoverBgColor="hover:bg-primary-foreground"
                hoverTextColor="hover:text-primary"
                navigateTo="/create-your-book/stepthree"
              />
            </div>
          </div>

          {/* Right Image with Overflow */}
          <div className="relative lg:absolute lg:right-0 lg:top-4 lg:bottom-0 lg:w-1/2 h-auto overflow-visible">
            <div className="relative w-full h-72 sm:h-96 md:h-128 lg:h-146">
              <Image
                src={readyToBeginSection.image}
                alt="Person creating a book"
                fill
                className="object-cover lg:object-right -ml-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
