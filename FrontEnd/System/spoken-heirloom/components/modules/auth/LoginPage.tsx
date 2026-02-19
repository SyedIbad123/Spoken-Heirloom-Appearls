import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/dashboard-constant";
import LoginForm from "./subcomponents/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-transparent p-7">
      {/* ───────────────── LEFT PANEL ───────────────── */}
      <div className="flex-1 flex flex-col justify-start px-6 py-7 sm:px-10 md:px-12 lg:px-16 xl:px-20 bg-transparent min-h-screen md:min-h-0 relative">
        {/* Left panel background image */}
        <Image
          src={images.LoginLeftImage}
          alt="Login left background"
          fill
          className="object-cover object-center z-0"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* subtle paper texture overlay */}
        <div className="absolute inset-0 bg-texture pointer-events-none opacity-40 z-10" />

        <div className="relative z-20 flex flex-col h-full gap-8">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center w-fit -ml-10">
            <Image
              src={images.Logo}
              alt="The Spoken Heirloom"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Form area */}
          <div className="flex flex-col gap-5 flex-1 justify-center max-w-xl w-full mx-auto md:mx-0 pl-14">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl sm:text-5xl font-cormorant font-bold text-foreground leading-snug">
                Welcome Back
              </h1>

              <span className="h-1 w-26 bg-olive mb-3"/>  
              <p className="text-sm text-black font-sans">
                Enter your email and password to access your account.
              </p>
            </div>

            <LoginForm />
          </div>

          <div className="w-full max-w-7xl flex flex-row justify-between">

            <p className="relative z-20 text-body-md text-black font-sans text-center md:text-left">
              &copy; 2026 The Spoken Heirloom. All Rights Reserved.{" "}
            </p>
            {/* Footer note */}
            <p className="relative z-20 text-body-md text-black  font-sans text-center md:text-left">
              <Link
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-olive transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>


        </div>
      </div>

      {/* ───────────────── RIGHT PANEL ───────────────── */}
      <div className="hidden md:flex flex-1 relative overflow-hidden">
        {/* Background photo */}
        <Image
          src={images.LoginRightImage}
          alt="Family memories"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 0vw, 50vw"
        />

        {/* Dark gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Testimonial card */}
        <div className="absolute bottom-26 left-6 right-6 xl:left-10 xl:right-10 bg-white/30 backdrop-blur-md px-8 py-8 flex flex-col gap-4 shadow-elevated">
          {/* Stars */}
          <div className="flex items-center gap-2">
            <Image
              src={images.FiveStarLogin}
              alt={`Five star rating`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Quote */}
          <p className="text-white text-sm sm:text-xl leading-relaxed font-sans italic font-semibold">
            &ldquo;I never thought I&apos;d be able to turn my dad&apos;s voice
            messages and old photos into something this beautiful. The Spoken
            Heirloom helped me preserve memories I didn&apos;t even realize I
            was losing. This book means everything to our family.&rdquo;
          </p>

          {/* Author */}
          <p className="text-white/80 text-sm sm:text-2xl font-cormorant font-semibold">
            &mdash; Maria L.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
