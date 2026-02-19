"use client";

import { useState } from "react";
import Image from "next/image";
import { stepFourContent, images } from "@/utils/web-constants";
import { Crop, ImageIcon, ChevronRight, GripVertical } from "lucide-react";
import Button from "@/components/shared/Button";

interface CoverOptionsPanelProps {
  onCrop?: () => void;
  onChangeCover?: () => void;
  onChooseTemplate?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  initialTitle?: string;
  initialSubtitle?: string;
  initialColor?: string;
}

export default function CoverOptionsPanel({
  onCrop,
  onChangeCover,
  onChooseTemplate,
  onCancel,
  onSave,
  initialTitle = "",
  initialSubtitle = "",
  initialColor = "sage",
}: CoverOptionsPanelProps) {
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSubtitle);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const {
    coverOptions,
    addTitle,
    subtitle: subtitleContent,
    coverColour,
    chooseTemplates,
    actions,
  } = stepFourContent;

  return (
    <div className="w-110 bg-white flex flex-col h-full ">
      {/* Drag Handle */}
      <div className="flex px-2 py-2">
        <GripVertical
          size={20}
          className="text-primary-foreground/30 rotate-90"
        />
      </div>

      {/* Scrollable Content */}
      <div className="font-cormorant px-8 flex-1 overflow-y-auto py-4 pr-26">
        {/* Cover Option Section */}
        <div className="mb-6">
          <h3 className=" text-lg text-primary-foreground mb-4">
            {coverOptions.title}
          </h3>
          <div className="flex gap-3">
            <button
              onClick={onCrop}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-border hover:bg-background-warm transition-colors cursor-pointer"
            >
              <Crop size={16} className="text-primary-foreground" />
              <span className="text-sm text-primary-foreground">Crop</span>
            </button>
            <button
              onClick={onChangeCover}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-border hover:bg-background-warm transition-colors cursor-pointer"
            >
              <ImageIcon size={16} className="text-primary-foreground" />
              <span className="text-sm text-primary-foreground">
                Change Cover
              </span>
            </button>
          </div>
        </div>

        {/* Add Title Section */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-primary-foreground mb-3">
            {addTitle.label}
          </h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={addTitle.placeholder}
            className="w-full px-4 py-2 border border-border rounded-full text-xs text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-olive transition-colors"
          />
        </div>

        {/* Subtitle Section */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-primary-foreground mb-3">
            {subtitleContent.label}
          </h3>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder={subtitleContent.placeholder}
            className="w-full px-4 py-2 border border-border rounded-full text-xs text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-olive transition-colors"
          />
        </div>

        {/* Cover Colour Section */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-primary-foreground mb-4">
            {coverColour.label}
          </h3>
          <div className="flex gap-3">
            {coverColour.colors.map((colorOption) => (
              <button
                key={colorOption.id}
                onClick={() => setSelectedColor(colorOption.id)}
                className={`w-10 h-10 rounded-full transition-all cursor-pointer ${
                  selectedColor === colorOption.id
                    ? "ring-2 ring-offset-2 ring-olive"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: colorOption.color }}
                aria-label={`Select ${colorOption.name} color`}
              />
            ))}
          </div>
        </div>

        {/* Choose Templates Section */}
        <div className="mb-6">
          <h3 className="font-serif text-lg text-primary-foreground mb-4">
            {chooseTemplates.label}
          </h3>
          <button
            onClick={onChooseTemplate}
            className="w-full flex items-center gap-3 p-3 bg-background-warm transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 bg-background-warm overflow-hidden shrink-0">
              <Image
                src={images.CreateYourBookStepFourDefaultTemplateImage}
                alt="Template Preview"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="flex-1 text-sm text-primary-foreground/70 text-left">
              {chooseTemplates.buttonText}
            </span>
            <ChevronRight size={20} className="text-primary-foreground/40" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="font-cormorant px-8 py-4 pr-26">
        <div className="flex gap-3">
          <Button
            text={actions.cancel}
            onClick={onCancel}
            backgroundColor="bg-transparent"
            textColor="text-primary-foreground"
            borderColor="border-border"
            hoverBgColor="hover:bg-background-warm"
            hoverTextColor="hover:text-primary-foreground"
            className="flex-1 px-6! py-2.5! text-sm! font-normal! "
          />
          <Button
            text={actions.save}
            onClick={onSave}
            backgroundColor="bg-primary-foreground"
            textColor="text-white"
            borderColor="border-primary-foreground"
            hoverBgColor="hover:bg-olive"
            hoverTextColor="hover:text-white"
            className="flex-1 px-6! py-2.5! text-md! font-semibold!"
          />
        </div>
      </div>
    </div>
  );
}
