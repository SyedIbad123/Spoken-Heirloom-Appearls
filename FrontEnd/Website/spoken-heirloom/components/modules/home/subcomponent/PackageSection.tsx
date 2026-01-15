"use client";

import { useState } from "react";

const packages = [
  {
    name: "Starter",
    price: "$100",
    description: "Perfect for single memory books with essential features.",
    features: [
      "1 Hardcover Book (up to 30 pages)",
      "5 QR Code Audio Recordings",
      "Basic Templates",
      "Standard Shipping",
      "Email Support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Family",
    price: "$250",
    description: "Ideal for creating comprehensive family memory collections.",
    features: [
      "2 Hardcover Books (up to 50 pages each)",
      "15 QR Code Audio Recordings",
      "Premium Templates",
      "Priority Shipping",
      "Phone & Email Support",
      "Digital Backup Copy",
    ],
    highlighted: true,
    cta: "Best Value",
  },
  {
    name: "Legacy",
    price: "$350",
    description:
      "The complete package for preserving your entire family history.",
    features: [
      "3 Hardcover Books (up to 75 pages each)",
      "Unlimited QR Code Audio Recordings",
      "All Premium Templates",
      "Express Shipping",
      "Dedicated Support",
      "Digital Archive Access",
      "Annual Reprints (20% off)",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

const subscriptions = [
  {
    name: "Monthly",
    price: "$29",
    period: "/month",
    description: "Flexible monthly access to all features.",
    features: [
      "Unlimited Book Projects",
      "10 QR Audio Recordings/month",
      "All Templates",
      "Cloud Storage",
      "Cancel Anytime",
    ],
    highlighted: false,
    cta: "Subscribe",
  },
  {
    name: "Annual",
    price: "$249",
    period: "/year",
    description: "Best value with 2 months free.",
    features: [
      "Everything in Monthly",
      "Unlimited QR Recordings",
      "Priority Support",
      "1 Free Book Annually",
      "Exclusive Templates",
      "Save $99/year",
    ],
    highlighted: true,
    cta: "Best Value",
  },
  {
    name: "Lifetime",
    price: "$599",
    period: "one-time",
    description: "Pay once, preserve forever.",
    features: [
      "All Annual Benefits",
      "Lifetime Access",
      "2 Free Books Annually",
      "VIP Support",
      "Early Access Features",
      "Family Account Sharing",
    ],
    highlighted: false,
    cta: "Get Lifetime",
  },
];

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<"packages" | "subscriptions">(
    "packages"
  );

  const currentPricing = activeTab === "packages" ? packages : subscriptions;

  return (
    <section className="py-section-md md:py-section-lg bg-background-warm">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent font-medium text-body-sm uppercase tracking-wider mb-3">
            Our Pricing
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-8">
            Packages & Subscription Prices
          </h2>

          {/* Toggle tabs */}
          <div className="inline-flex items-center bg-secondary rounded-full p-1.5 shadow-soft">
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-6 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300 ${
                activeTab === "packages"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => setActiveTab("subscriptions")}
              className={`px-6 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300 ${
                activeTab === "subscriptions"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Subscriptions
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {currentPricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-elevated scale-105 md:scale-110 z-10"
                  : "bg-white text-foreground shadow-soft hover:shadow-medium border border-border/50"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-soft">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3
                  className={`font-serif text-xl mb-2 ${
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span
                    className={`text-4xl md:text-5xl font-serif font-bold ${
                      plan.highlighted ? "text-accent-light" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {"period" in plan && (
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-primary-foreground/70"
                          : "text-foreground-muted"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-body-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-foreground-muted"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px mb-8 ${
                  plan.highlighted ? "bg-primary-foreground/20" : "bg-border"
                }`}
              />

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-accent-light" : "text-accent"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-body-sm ${
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-foreground-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-3.5 rounded-full font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent-light text-accent-foreground shadow-soft"
                    : "bg-primary hover:bg-primary-dark text-primary-foreground"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: "500+", label: "Happy Families" },
              { value: "85+", label: "Countries Served" },
              { value: "10+", label: "Years Experience" },
              { value: "2000+", label: "Books Created" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground-muted text-body-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second CTA Banner */}
      <div className="mt-section-md md:mt-section-lg">
        <div className="relative py-20 md:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-olive-dark via-olive to-sage opacity-95" />
            <div className="absolute inset-0 bg-texture opacity-20" />
          </div>

          {/* Decorative elements */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-40 h-52 rounded-2xl bg-white/10 transform -rotate-12 hidden lg:block overflow-hidden">
            <div className="absolute inset-4 rounded-xl border border-white/20" />
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-36 h-48 rounded-2xl bg-white/10 transform rotate-12 hidden lg:block overflow-hidden">
            <div className="absolute inset-4 rounded-xl border border-white/20" />
          </div>

          <div className="section-container relative z-10 text-center">
            <h2 className="font-serif text-display-sm md:text-display-md text-white mb-6">
              Because Every Memory
              <br />
              Deserves a Voice
            </h2>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-secondary transition-all duration-300 shadow-elevated">
              <span>Create Your Book</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
