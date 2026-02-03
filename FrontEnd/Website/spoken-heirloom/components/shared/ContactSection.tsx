"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "@/utils/constant";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  alignment?: "left" | "center" | "right";
  smallHeading?: string;
  bigHeading?: string;
  showWhirl?: boolean;
  descriptionColor?: string;
  description?: string;
  descriptionStyle?: string;
  afterButtonDesc?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  alignment = "left",
  smallHeading = "Contact Us",
  bigHeading = "GET IN TOUCH WITH US",
  showWhirl = true,
  description,
  descriptionColor = "text-foreground",
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
    <section className="mt-20 ">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Contact form */}
          <ContactForm
            alignment={alignment}
            smallHeading={smallHeading}
            bigHeading={bigHeading}
            showWhirl={showWhirl}
            descriptionColor={descriptionColor}
            description={description}
            descriptionStyle={descriptionStyle}
            afterButtonDesc={afterButtonDesc}
          />

          {/* Image side */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative">
              {/* Main image with overlay */}
              <div className="relative aspect-auto lg:aspect-5/6 w-full overflow-hidden">
                <Image
                  src={images.ContactSectionImage}
                  alt="Contact us"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
