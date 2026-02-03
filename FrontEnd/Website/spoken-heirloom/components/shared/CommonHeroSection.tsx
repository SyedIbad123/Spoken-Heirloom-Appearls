import React from "react";
import Image from "next/image";

interface CommonHeroSectionProps {
  backgroundImage: string;
  text: string;
  description?: string;
}

const CommonHeroSection: React.FC<CommonHeroSectionProps> = ({
  backgroundImage,
  text,
  description,
}) => {
  return (
    <>
      <section
        className="relative w-full flex justify-center items-center overflow-hidden"
        style={{ minHeight: "300px" }}
      >
        <div className="absolute inset-0 inset-x-10 h-full overflow-hidden mx-auto">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full py-16">
          <h1 className="font-cormorant text-white text-4xl md:text-5xl font-semibold text-center drop-shadow-lg">
            {text}
          </h1>
          {description && (
            <p className="text-white text-xs md:text-md font-sans font-normal text-center drop-shadow-lg whitespace-pre-line w-1/2 mt-4 leading-loose">
              {description}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CommonHeroSection;
