export default function BrandStorySection() {
  return (
    <>
      {/* Brand Story Section */}
      <section className="py-section-md md:py-section-lg bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main image placeholder */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark">
                    {/* Texture overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    {/* Image placeholder content */}
                    <div className="absolute inset-8 rounded-2xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-24 mx-auto mb-4 rounded-xl bg-primary/20 border border-primary/10" />
                        <p className="text-primary/50 text-sm">Heirloom Book</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-40 rounded-2xl bg-sage/40 shadow-medium transform rotate-6 -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/10 -z-10" />
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium text-body-sm uppercase tracking-wider mb-4">
                Our Story
              </p>

              <h2 className="font-serif text-display-sm md:text-display-md text-foreground mb-4">
                The Spoken Heirloom
              </h2>

              {/* Decorative flourish */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-accent/40" />
                <span className="text-accent">✦</span>
                <div className="w-12 h-px bg-accent/40" />
              </div>

              <div className="space-y-6 text-foreground-muted text-body-lg leading-relaxed">
                <p>
                  <span className="font-serif text-foreground text-xl">
                    Preserving the stories,
                  </span>
                  <br />
                  <span className="font-serif text-foreground text-xl">
                    and voices that deserve
                  </span>
                  <br />
                  <span className="font-serif text-foreground text-xl">
                    to last forever
                  </span>
                </p>

                <p>
                  At Spoken Heirloom, we believe every family has stories worth
                  preserving. Our mission is to help you capture the voices,
                  memories, and moments that define your legacy—transforming
                  them into beautiful, tangible keepsakes that can be treasured
                  for generations.
                </p>

                <p>
                  Through innovative QR technology, we bridge the gap between
                  traditional memory books and modern storytelling, allowing you
                  to hear the voices of loved ones simply by scanning a page.
                </p>
              </div>

              <div className="mt-10">
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-sage py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-foreground/80 text-lg md:text-xl font-serif italic">
                ~ Every Family Has a Story Worth Hearing
              </span>
              <span className="text-accent mx-6">✦</span>
              <span className="text-foreground/80 text-lg md:text-xl font-serif italic">
                Preserve Voices, Cherish Moments, Create Heirlooms
              </span>
              <span className="text-accent mx-6">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Value Reinforcement Section */}
      <section className="relative py-section-lg md:py-section-xl overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-olive-dark via-olive to-olive-light opacity-90" />
          {/* Texture overlay */}
          <div className="absolute inset-0 bg-texture opacity-30" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-display-sm md:text-display-md lg:text-display-lg text-white mb-6 leading-tight">
              Because Every Memory
              <br />
              Deserves a Voice
            </h2>

            <p className="text-white/80 text-body-lg mb-10 max-w-xl mx-auto">
              Transform fleeting moments into lasting legacies. Your
              family&apos;s story is unique—preserve it in a way that can be
              seen, touched, and heard.
            </p>

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

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-32 h-40 rounded-2xl bg-white/10 transform -rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-28 h-36 rounded-2xl bg-white/10 transform rotate-12 hidden lg:block" />
      </section>
    </>
  );
}
