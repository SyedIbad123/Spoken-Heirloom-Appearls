import React from "react";
import Image from "next/image";

interface CommonHeroSectionProps {
  backgroundImage: string;
  text: string;
}

const CommonHeroSection: React.FC<CommonHeroSectionProps> = ({
  backgroundImage,
  text,
}) => {
  return (
    <>
      <section
        className="relative w-full flex justify-center items-center overflow-hidden"
        style={{ minHeight: "300px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 inset-x-10 h-full overflow-hidden mx-auto">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full py-16">
          <h1 className="text-white text-4xl md:text-5xl font-serif font-semibold text-center drop-shadow-lg">
            {text}
          </h1>
        </div>
      </section>
    </>
  );
};

export default CommonHeroSection;
