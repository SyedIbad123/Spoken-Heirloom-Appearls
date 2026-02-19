import React from "react";
import { images, processSteps } from "@/utils/web-constants";
import SectionHeader from "@/components/shared/marketing/SectionHeader";
import Image from "next/image";

interface ProcessStepsGridProps {
  className?: string;
  bigHeading?: string;
  description?: string;
  descriptionColor?: string;
  descriptionStyle?: string;
}

const ProcessStepsGrid: React.FC<ProcessStepsGridProps> = ({
  className = "",
  bigHeading,
  description,
  descriptionStyle,
  descriptionColor,
}) => {
  return (
    <div className="w-full">
      {(bigHeading || description) && (
        <SectionHeader
          bigHeading={bigHeading || ""}
          description={description || ""}
          descriptionStyle={descriptionStyle || ""}
          descriptionColor={descriptionColor || ""}
          className="text-center text-3xl md:text-4xl mb-12 text-primary-foreground tracking-wide"
          fontStyleBigHeading="font-cormorant"
          fontStyleDescription="font-sans!"
        />
      )}
      <div className="flex justify-center mb-16">
        <Image
          src={images.ProcessFlowSvg}
          alt="Process Flow"
          className="max-w-full h-auto"
        />
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start ${className}`}
      >
        {processSteps.map((step, index) => (
          <div
            key={step.step}
            className="group relative flex flex-col items-center"
          >
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-0 -right-6 lg:-right-8 h-40 w-px bg-primary-foreground/30" />
            )}

            <div className="text-center max-w-xs">
              <h3 className="font-cormorant font-semibold text-heading-lg 2xl:text-3xl text-primary-foreground mb-3">
                {step.step} {step.title}
              </h3>
              <p className="text-primary-grayText font-sans text-body-sm 2xl:text-body-md leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessStepsGrid;
