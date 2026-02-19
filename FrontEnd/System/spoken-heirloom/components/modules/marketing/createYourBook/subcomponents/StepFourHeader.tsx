"use client";

import Image from "next/image";
import { stepFourContent } from "@/utils/web-constants";
import { images } from "@/utils/web-constants";
import { ChevronLeft, Settings, Eye } from "lucide-react";

// Icon component for header actions
const ActionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "rearrange":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="1.5" fill="currentColor" />
          <circle cx="8" cy="4" r="1.5" fill="currentColor" />
          <circle cx="12" cy="4" r="1.5" fill="currentColor" />
          <circle cx="4" cy="8" r="1.5" fill="currentColor" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" />
          <circle cx="4" cy="12" r="1.5" fill="currentColor" />
          <circle cx="8" cy="12" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "settings":
      return <Settings size={16} />;
    case "preview":
      return <Eye size={16} />;
    default:
      return null;
  }
};

interface StepFourHeaderProps {
  onBack?: () => void;
  onRearrange?: () => void;
  onSettings?: () => void;
  onPreview?: () => void;
}

export default function StepFourHeader({
  onBack,
  onRearrange,
  onSettings,
  onPreview,
}: StepFourHeaderProps) {
  const { header } = stepFourContent;

  const handleAction = (actionId: string) => {
    switch (actionId) {
      case "rearrange":
        onRearrange?.();
        break;
      case "settings":
        onSettings?.();
        break;
      case "preview":
        onPreview?.();
        break;
    }
  };

  return (
    <header className="font-sans bg-primary-foreground ">
      <div className="section-container mx-auto flex items-center justify-between px-20 py-3 h-15 relative">
        {/* Left Section - Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          <ChevronLeft size={20} strokeWidth={2} />
          <span className="text-sm font-medium">{header.backText}</span>
        </button>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center gap-8">
          {header.actions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleAction(action.id)}
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ActionIcon type={action.icon} />
              <span className="text-sm">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
