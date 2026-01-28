import React from "react";
import { images, processSteps } from "@/utils/constant";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

interface ProcessStepsGridProps {
  className?: string;
  bigHeading?: string;
}

const ProcessStepsGrid: React.FC<ProcessStepsGridProps> = ({
  className = "",
  bigHeading,
}) => {
  return (
    <div className="w-full">
      {bigHeading && (
        <SectionHeader
          bigHeading={bigHeading}
          className="text-center text-3xl md:text-4xl font-serif mb-12 text-primary-foreground tracking-wide"
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
              <h3 className="font-serif text-heading-lg text-primary-foreground mb-3 italic">
                {step.step} {step.title}
              </h3>
              <p className="text-primary-grayText text-body-sm leading-relaxed">
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
