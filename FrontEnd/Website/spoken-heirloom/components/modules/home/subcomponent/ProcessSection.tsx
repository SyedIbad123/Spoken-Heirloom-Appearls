const processSteps = [
  {
    step: "1",
    title: "Upload Your Memories",
    description:
      "Share your photos, voice recordings, and stories. Our platform makes it easy to gather everything in one place.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    step: "2",
    title: "Design with Ease",
    description:
      "Choose from beautiful templates and customize your heirloom book. Add personal touches that reflect your family's unique story.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Print & Cherish",
    description:
      "Receive your professionally printed keepsake book with embedded QR codes that bring your stories to life with audio.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-section-md md:py-section-lg bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Decorative image placeholder */}
          <div className="relative w-48 h-32 md:w-64 md:h-40 mx-auto mb-10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light shadow-soft overflow-hidden transform -rotate-3">
              <div className="w-full h-full bg-gradient-to-br from-amber-100/50 to-amber-50/30" />
            </div>
            <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transform rotate-2 flex items-center justify-center">
              <div className="w-12 h-14 rounded-lg bg-primary/20 border border-primary/10" />
            </div>
          </div>

          <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-4">
            From Voice to Heirloom in
            <br />
            <span className="text-primary">Three Simple Steps</span>
          </h2>

          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-accent">❧</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>

          <p className="text-foreground-muted text-body-lg max-w-2xl mx-auto">
            We guide you through preserving your family&apos;s legacy with care
            and simplicity. Every step is designed to honor your memories.
          </p>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {processSteps.map((step, index) => (
            <div key={step.step} className="group relative">
              {/* Connector line - hidden on mobile, visible between cards on desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-accent/30 via-accent/20 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group-hover:border-accent/20">
                {/* Step number badge */}
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif text-lg shadow-soft">
                  {step.step}
                </div>

                {/* Icon placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-primary mb-6 mt-4 group-hover:bg-accent/10 transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="font-serif text-heading-lg text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-foreground-muted text-body-md leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
