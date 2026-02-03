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
    <section className="section-container px-6 py-16 text-primary-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-cormorant text-4xl  font-semibold text-primary-foreground mb-16">
          BECAUSE SOME STORIES DESERVE TO BE HEARD — NOT JUST REMEMBERED.
        </h1>
        <h2 className="font-cormorant text-4xl md:text-3xl font-semibold text-primary-foreground mb-6">
          We’re an Online Studio
        </h2>
        <p className="font-sans text-primary-foreground/80 text-xs">
          The Spoken Heirloom is proudly based in North Carolina, but we work
          with families everywhere. We don’t have a public storefront — all
          projects, consultations, and support are handled online.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 items-center gap-2 ml-10">
        <div className="md:col-span-1 flex items-start gap-6 px-6 md:px-12">
          <div className="text-primary-foreground">
            <MailIcon />
          </div>
          <div>
            <h3 className="font-cormorant font-semibold text-xl text-gray-600/50">
              support@thespokenheirloom.com
            </h3>
            <p className="font-sans text-xs text-primary-foreground/70 mt-2 italic">
              We typically reply within one business day, Monday–Friday.
            </p>
          </div>
        </div>

        <div className="hidden md:block h-40 border-l border-primary-foreground/70 mx-auto" />

        <div className="md:col-span-1 flex items-start gap-6 justify-start md:justify-end -ml-30">
          <div className="text-primary-foreground">
            <PinIcon />
          </div>
          <div className="text-left md:text-left lg:text-left">
            <h4 className="font-coromorant text-2xl fomt-semibold text-primary-foreground">
              The Spoken Heirloom LLC
            </h4>
            <p className="font-coromorant text-2xl text-gray-600/50 mt-2">
              4030 Wake Forest Rd, Ste 349 Raleigh, NC 27609
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
