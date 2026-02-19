import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/dashboard-constant";
import RegisterForm from "./subcomponents/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-primary">
      {/* ───────────────── LEFT PANEL ───────────────── */}
      <div className="flex-1 flex flex-col justify-between px-6 py-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 bg-primary min-h-screen md:min-h-0 relative">
        {/* subtle paper texture overlay */}
        <div className="absolute inset-0 bg-texture pointer-events-none opacity-40" />

        <div className="relative z-10 flex flex-col h-full gap-8">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center w-fit">
            <Image
              src={images.Logo}
              alt="The Spoken Heirloom"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>

          {/* Form area */}
          <div className="flex flex-col gap-5 flex-1 justify-center max-w-sm w-full mx-auto md:mx-0">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl sm:text-4xl font-cormorant font-semibold text-foreground leading-snug">
                Create an Account
              </h1>
              <p className="text-sm text-foreground-muted font-sans">
                Join us and start preserving your cherished family memories.
              </p>
            </div>

            <RegisterForm />
          </div>

          {/* Footer note */}
          <p className="relative z-10 text-xs text-foreground-muted font-sans text-center md:text-left">
            &copy; 2025 The Spoken Heirloom. All Rights Reserved.{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2 hover:text-olive transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* ───────────────── RIGHT PANEL ───────────────── */}
      <div className="hidden md:flex flex-1 relative overflow-hidden">
        <Image
          src={images.LoginRightImage}
          alt="Family memories"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 0vw, 50vw"
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Testimonial card */}
        <div className="absolute bottom-10 left-6 right-6 xl:left-10 xl:right-10 bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl px-6 py-5 flex flex-col gap-3 shadow-elevated">
          {/* Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src={images.FiveStarLogin}
                alt={`star ${i + 1}`}
                width={18}
                height={18}
                className="object-contain"
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-white text-sm sm:text-base leading-relaxed font-sans italic">
            &ldquo;I never thought I&apos;d be able to turn my dad&apos;s voice
            messages and old photos into something this beautiful. The Spoken
            Heirloom helped me preserve memories I didn&apos;t even realize I
            was losing. This book means everything to our family.&rdquo;
          </p>

          {/* Author */}
          <p className="text-white/80 text-sm font-cormorant font-semibold italic">
            &mdash; Maria L.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
