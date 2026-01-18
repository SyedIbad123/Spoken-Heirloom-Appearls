"use client";

import { useState } from "react";
import Button from "@/components/shared/Button";

export default function ContactSection() {
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
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-section-md md:py-section-lg bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-medium text-body-sm uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-4">
            Get in Touch With Us
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground-light"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-body-sm font-medium text-foreground mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground-light"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-body-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground-light resize-none"
                />
              </div>

              {/* File upload placeholder */}
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors duration-300 cursor-pointer">
                <svg
                  className="w-10 h-10 mx-auto text-foreground-muted mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-foreground-muted text-body-sm">
                  Drag & drop files here or{" "}
                  <span className="text-accent font-medium">browse</span>
                </p>
                <p className="text-foreground-light text-xs mt-1">
                  Supports: JPG, PNG, PDF (Max 10MB)
                </p>
              </div>

              <Button
                type="submit"
                text="Send Message"
                backgroundColor="bg-primary"
                textColor="text-primary-foreground"
                borderColor="border-primary"
                hoverBgColor="hover:bg-primary/90"
                hoverTextColor="hover:text-primary-foreground"
                className="w-full sm:w-auto"
              />
            </form>
          </div>

          {/* Image/Info side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-elevated">
                <div className="absolute inset-0 bg-linear-to-br from-sage via-sage-light to-secondary">
                  {/* Overlay texture */}
                  <div className="absolute inset-0 bg-texture opacity-30" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-32 mx-auto mb-6 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-white/90 font-serif text-lg mb-2">
                      We&apos;re here to help
                    </p>
                    <p className="text-white/70 text-body-sm max-w-xs mx-auto">
                      Whether you have questions about creating your heirloom or
                      need support, our team is ready to assist you every step
                      of the way.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-elevated max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email Us</p>
                    <p className="text-foreground-muted text-body-sm">
                      hello@spokenheirloom.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
