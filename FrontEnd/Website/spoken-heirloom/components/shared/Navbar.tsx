"use client";

import { useState } from "react";
import Link from "next/link";
import { images, navLinks } from "@/utils/constant";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-primary-light backdrop-blur-sm border-b border-primary/20">
        <div className=" px-8 mx-2">
          <div className="flex items-center h-16 md:h-20 relative">
            {/* All nav links - left side */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent-light text-body-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - center */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 translate-y-1/6 flex flex-col items-center z-10 bg-primary-light py-4 px-8 rounded-2xl"
            >
              <div className="relative w-36 h-36 md:w-32 md:h-32 -my-4">
                <Image
                  src={images.NavbarLogo}
                  width={700}
                  height={700}
                  alt="The Spoken Heirloom Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-4 ml-auto">
              <button className="hidden md:flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-primary-foreground/80 text-body-sm font-medium">
                  EN
                </span>
                <div className="w-7 h-7 rounded-full overflow-hidden border border-primary-foreground/20">
                  <span className="w-full h-full flex items-center justify-center text-xs font-semibold">
                    <Image
                      src={images.USLogo}
                      width={400}
                      height={400}
                      alt="The Spoken Heirloom Logo"
                      className="w-full h-full object-contain"
                    />
                  </span>
                </div>
              </div>
              <Link
                href="#"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2  text-foreground/50 border-foreground/50 border-2 text-body-sm font-medium"
              >
                Login Now
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary/20">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-primary-foreground/80 hover:text-accent-light py-2 px-4 rounded-lg hover:bg-primary/30 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#"
                  className="mt-4 mx-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-body-sm font-medium rounded-full hover:bg-accent-light transition-colors duration-200"
                >
                  Login Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
