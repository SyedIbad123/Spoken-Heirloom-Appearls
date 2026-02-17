import React from "react";

const MailIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="14"
      width="52"
      height="36"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 18L32 36L56 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="38" r="1" fill="currentColor" />
  </svg>
);

const PinIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 6C22 6 14 14 14 24c0 11.5 14.5 28.5 16.2 30.4a2 2 0 0 0 3.6 0C35.5 52.5 50 35.5 50 24 50 14 42 6 32 6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function ContactDetails() {
  return (
    <section className="section-container px-4 sm:px-6 py-6 md:py-8 text-primary-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-semibold text-primary-foreground mb-8 md:mb-16 leading-tight">
          BECAUSE SOME STORIES DESERVE TO BE HEARD — NOT JUST REMEMBERED.
        </h1>
        <h2 className="font-cormorant text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-semibold text-primary-foreground mb-4 md:mb-6">
          We’re an Online Studio
        </h2>
        <p className="font-sans text-primary-foreground/80 text-sm sm:text-base 2xl:text-body-md leading-relaxed">
          The Spoken Heirloom is proudly based in North Carolina, but we work
          with families everywhere. We don’t have a public storefront — all
          projects, consultations, and support are handled online.
        </p>
      </div>

      <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 items-start md:items-center gap-8 md:gap-10 lg:gap-2 mx-auto max-w-6xl">
        <div className="md:col-span-1 flex items-start gap-4 sm:gap-6 px-0 md:px-8 lg:px-12">
          <div className="text-primary-foreground">
            <MailIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="min-w-0">
            <h3 className="font-cormorant font-semibold text-lg sm:text-xl xl:text-3xl text-gray-600/50 wrap-break-word">
              support@thespokenheirloom.com
            </h3>
            <p className="font-sans text-xs sm:text-sm xl:text-body-sm text-primary-foreground/70 mt-2 italic">
              We typically reply within one business day, Monday–Friday.
            </p>
          </div>
        </div>

        <div className="hidden lg:block h-40 border-l border-primary-foreground/70 mx-auto" />

        <div className="md:col-span-1 flex items-start gap-4 sm:gap-6 justify-start lg:justify-end px-0 md:px-8 lg:px-12">
          <div className="text-primary-foreground">
            <PinIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="text-left">
            <h4 className="font-cormorant text-xl sm:text-2xl font-semibold text-primary-foreground leading-snug">
              The Spoken Heirloom LLC
            </h4>
            <p className="font-cormorant text-lg sm:text-2xl text-gray-600/50 mt-2 leading-relaxed">
              4030 Wake Forest Rd, Ste 349 Raleigh, NC 27609
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
