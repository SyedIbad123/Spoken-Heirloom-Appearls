"use client";

import { useRef, useEffect, useState } from "react";

export interface TabOption {
  id: string;
  label: string;
}

interface ToggleButtonProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  heading?: string;
  isRadioButton?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function ToggleButton({
  tabs,
  activeTab,
  onTabChange,
  heading,
  isRadioButton = false,
  className = "",
  fullWidth = false,
}: ToggleButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  // Calculate slider position for sliding animation
  useEffect(() => {
    if (!isRadioButton && containerRef.current) {
      const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const buttons = containerRef.current.querySelectorAll("button");
      if (buttons[activeIndex]) {
        const button = buttons[activeIndex] as HTMLButtonElement;
        setSliderStyle({
          left: button.offsetLeft,
          width: button.offsetWidth,
        });
      }
    }
  }, [activeTab, tabs, isRadioButton]);

  return (
    <div
      className={`mb-10 md:mb-16 lg:mb-10 xl:mb-16 ${heading ? "" : "flex justify-center"} ${className}`}
    >
      {/* Optional Heading */}
      {heading && (
        <h3 className="text-left font-serif text-lg md:text-3xl text-primary-foreground mb-4">
          {heading}
        </h3>
      )}

      {/* Toggle Container */}
      <div
        className={`${fullWidth ? "flex w-full" : "inline-flex"} items-center bg-primary-foreground rounded-full p-1.5`}
      >
        {isRadioButton ? (
          /* Radio Button Style */
          <div
            className={`flex items-center gap-8 px-6 py-2 ${fullWidth ? "w-full justify-between" : ""}`}
          >
            {tabs.map((tab) => (
              <label
                key={tab.id}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => onTabChange(tab.id)}
              >
                <span
                  className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${
                    activeTab === tab.id ? "bg-white" : "bg-transparent"
                  }`}
                >
                  {activeTab === tab.id && (
                    <span className="w-3 h-3 rounded-full bg-primary-foreground" />
                  )}
                </span>
                <span className="text-white text-body-md font-medium">
                  {tab.label}
                </span>
              </label>
            ))}
          </div>
        ) : (
          /* Sliding Tab Style */
          <div
            ref={containerRef}
            className={`relative flex items-center ${fullWidth ? "w-full" : ""}`}
          >
            {/* Sliding Background */}
            <div
              className="absolute h-[calc(100%-0px)] bg-primary-border rounded-full transition-all duration-300 ease-in-out shadow-md"
              style={{
                left: `${sliderStyle.left}px`,
                width: `${sliderStyle.width}px`,
              }}
            />

            {/* Tab Buttons */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative z-10 px-8 py-3 rounded-full text-body-md 2xl:text-lg font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-primary-foreground"
                    : "text-white"
                } ${fullWidth ? "flex-1" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
