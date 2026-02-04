"use client";

import { stepFourContent } from "@/utils/constant";
import { Plus } from "lucide-react";

interface PhotoUploadAreaProps {
  onAddPhoto?: () => void;
  currentStep?: number;
}

export default function PhotoUploadArea({
  onAddPhoto,
  currentStep = 1,
}: PhotoUploadAreaProps) {
  const { stepIndicator, photoUpload } = stepFourContent;

  return (
    <div className="flex-1 flex-col justify-center items-center bg-primary px-12 py-10">
      {/* Step Indicator */}
      <div className="flex flex-col items-center mb-8 w-full">
        <h2 className="text-3xl text-left self-start text-primary-foreground mb-2 ml-35">
          <span className="font-cormorant font-semibold">
            {stepIndicator.title}
          </span>
          <span className="font-serif text-2xl">
            {stepIndicator.stepNumber.padStart(2, "0")}
          </span>
        </h2>

        <div className="h-1 w-full max-w-100 bg-primary-border overflow-hidden">
          <div
            className="h-full bg-primary-foreground transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Photo Upload Box */}
      <div className="font-cormorant font-bold flex flex-col items-center justify-center min-h-100">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-medium text-primary-foreground mb-1">
            {photoUpload.title}
          </h3>
          <p className="text-sm text-primary-foreground/70 mb-4">
            {photoUpload.subtitle}
          </p>
          <button
            onClick={onAddPhoto}
            className="w-10 h-10 bg-primary-foreground flex items-center justify-center rounded-sm hover:bg-primary-foreground/90 transition-colors cursor-pointer"
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
