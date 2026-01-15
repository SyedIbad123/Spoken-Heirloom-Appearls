export default function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-12 pb-20 md:pt-16 md:pb-28">
        {/* Main content */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-display-sm md:text-display-md lg:text-display-lg text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Stories You Can Hear,
            <br />
            <span className="text-accent-light">Memories You Can Hold</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-accent text-xl">✦</span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <span className="text-accent text-xl">✦</span>
          </div>

          <p className="text-primary-foreground/80 text-body-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Craft your way to preserve your family stories, and voices in a
            keepsake book.
          </p>

          <button className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-accent-foreground font-medium rounded-full transition-all duration-300 shadow-medium hover:shadow-elevated group">
            <span>Build My Heirloom Today</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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

        {/* Photo collage section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main collage container */}
          <div className="relative flex items-center justify-center">
            {/* Left side photos */}
            <div className="hidden md:flex flex-col gap-4 absolute left-0 -translate-x-1/4 z-10">
              <div className="w-32 h-40 rounded-xl bg-secondary/30 border-4 border-white/20 shadow-elevated transform -rotate-12 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-800/40 to-amber-600/30" />
              </div>
              <div className="w-28 h-36 rounded-xl bg-secondary/20 border-4 border-white/20 shadow-elevated transform rotate-6 overflow-hidden -mt-8 ml-8">
                <div className="w-full h-full bg-gradient-to-br from-stone-600/40 to-stone-400/30" />
              </div>
            </div>

            {/* Center main image/book */}
            <div className="relative z-20">
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-48 h-64 md:w-56 md:h-72 mx-auto bg-gradient-to-b from-secondary to-secondary-dark rounded-3xl shadow-elevated border-4 border-white/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-50 p-4">
                    {/* Mini book representation */}
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-20 mx-auto mb-2 rounded-lg bg-primary/30 border-2 border-primary/20" />
                        <p className="text-xs text-primary/60 font-serif">
                          Your Heirloom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-28 rounded-xl bg-secondary/40 border-4 border-white/30 shadow-medium transform rotate-12 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-stone-400/30 to-stone-300/20" />
                </div>
                <div className="absolute -bottom-4 -left-8 w-20 h-24 rounded-xl bg-secondary/30 border-4 border-white/30 shadow-medium transform -rotate-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-700/30 to-amber-500/20" />
                </div>
              </div>
            </div>

            {/* Right side photos */}
            <div className="hidden md:flex flex-col gap-4 absolute right-0 translate-x-1/4 z-10">
              <div className="w-28 h-36 rounded-xl bg-secondary/25 border-4 border-white/20 shadow-elevated transform rotate-12 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-500/30 to-stone-400/20" />
              </div>
              <div className="w-32 h-40 rounded-xl bg-secondary/20 border-4 border-white/20 shadow-elevated transform -rotate-6 overflow-hidden -mt-8 -ml-8">
                <div className="w-full h-full bg-gradient-to-br from-amber-600/30 to-amber-400/20" />
              </div>
            </div>
          </div>

          {/* Decorative scattered photos - mobile visible */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <div className="w-20 h-24 rounded-lg bg-secondary/30 border-2 border-white/20 shadow-soft transform -rotate-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-700/30 to-amber-500/20" />
            </div>
            <div className="w-20 h-24 rounded-lg bg-secondary/25 border-2 border-white/20 shadow-soft transform rotate-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-stone-500/30 to-stone-400/20" />
            </div>
            <div className="w-20 h-24 rounded-lg bg-secondary/20 border-2 border-white/20 shadow-soft transform -rotate-3 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-600/30 to-amber-400/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>
    </section>
  );
}
