"use client";

import CoverOptionsPanel from "./CoverOptionsPanel";
import PhotoUploadArea from "./PhotoUploadArea";
import StepFourHeader from "./StepFourHeader";

interface StepFourProps {
  onBack?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function StepFour({ onBack, onSave, onCancel }: StepFourProps) {
  const handleAddPhoto = () => {
    // Handle photo upload logic
    console.log("Add photo clicked");
  };

  const handleCrop = () => {
    // Handle crop logic
    console.log("Crop clicked");
  };

  const handleChangeCover = () => {
    // Handle change cover logic
    console.log("Change cover clicked");
  };

  const handleChooseTemplate = () => {
    // Handle choose template logic
    console.log("Choose template clicked");
  };

  const handleRearrange = () => {
    // Handle rearrange logic
    console.log("Rearrange clicked");
  };

  const handleSettings = () => {
    // Handle settings logic
    console.log("Settings clicked");
  };

  const handlePreview = () => {
    // Handle preview logic
    console.log("Preview clicked");
  };

  return (
    <section className="min-h-screen flex flex-col bg-primary">
      {/* Header */}
      <StepFourHeader
        onBack={onBack}
        onRearrange={handleRearrange}
        onSettings={handleSettings}
        onPreview={handlePreview}
      />

      {/* Main Content */}
      <div className="flex-1 flex relative">
        {/* Photo Upload Area */}
        <PhotoUploadArea onAddPhoto={handleAddPhoto} currentStep={1} />

        {/* Cover Options Panel */}
        <CoverOptionsPanel
          onCrop={handleCrop}
          onChangeCover={handleChangeCover}
          onChooseTemplate={handleChooseTemplate}
          onCancel={onCancel}
          onSave={onSave}
        />
      </div>
    </section>
  );
}
