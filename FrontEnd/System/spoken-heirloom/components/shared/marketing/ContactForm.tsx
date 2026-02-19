"use client";

import React, { useState } from "react";
import Button from "../Button";
import SectionHeader from "./SectionHeader";

interface ContactFormProps {
  alignment?: "left" | "center" | "right";
  smallHeading?: string;
  bigHeading?: string;
  showWhirl?: boolean;
  descriptionColor?: string;
  description?: string;
  descriptionStyle?: string;
  afterButtonDesc?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  alignment,
  smallHeading,
  bigHeading,
  showWhirl,
  descriptionColor,
  description,
  descriptionStyle,
  afterButtonDesc,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="order-2 lg:order-1">
      {/* Section header */}
      <div className="mb-10">
        <SectionHeader
          alignment={alignment}
          smallHeading={smallHeading}
          bigHeading={bigHeading ?? ""}
          showWhirl={showWhirl}
          descriptionColor={descriptionColor}
          description={description}
          descriptionStyle={descriptionStyle}
          fontStyleSmallHeading="font-cormorant"
          fontStyleBigHeading="font-cormorant"
        />
      </div>

      <form onSubmit={handleSubmit} className="font-sans space-y-8 2xl:space-y-6">
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm 2xl:text-xl text-primary-foreground mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pb-2 bg-transparent border-b border-[#D4D4D4] focus:border-primary outline-none transition-colors duration-300 text-foreground placeholder:text-[#BEBEBE]"
          />
        </div>

        {/* Email and Phone row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm 2xl:text-xl  text-primary-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b border-[#D4D4D4] focus:border-primary outline-none transition-colors duration-300 text-foreground placeholder:text-[#BEBEBE]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm 2xl:text-xl  text-primary-foreground mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b border-[#D4D4D4] focus:border-primary outline-none transition-colors duration-300 text-foreground placeholder:text-[#BEBEBE]"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm 2xl:text-xl  text-primary-foreground mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full pb-2 bg-transparent border-b border-[#D4D4D4] focus:border-primary outline-none transition-colors duration-300 text-foreground placeholder:text-[#BEBEBE] resize-none"
          />
        </div>

        {/* reCAPTCHA */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="recaptcha"
            className="mt-1 w-5 h-5 border-2 border-[#D4D4D4] rounded"
          />
          <label
            htmlFor="recaptcha"
            className="text-sm text-primary-foreground"
          >
            I&apos;m not a robot
          </label>
          <div className="ml-auto">
            <div className="text-xs text-primary-foreground">
              <div>reCAPTCHA</div>
              <div className="text-[10px]">Privacy - Terms</div>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div>
          <Button
            text="Send Message"
            type="submit"
            textColor="text-primary-foreground"
            borderColor="border-primary-foreground"
            backgroundColor="bg-transparent"
            hoverBgColor="hover:bg-primary-foreground"
            hoverTextColor="hover:text-white"
            className="px-8 py-3 font-serif"
          />
          {afterButtonDesc && (
            <p className="text-primary-foreground text-xs mt-3">
              We typically reply within one business day.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
