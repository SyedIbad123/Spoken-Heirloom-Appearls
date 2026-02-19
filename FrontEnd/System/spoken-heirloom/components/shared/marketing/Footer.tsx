import Link from "next/link";
import Image from "next/image";
import { images, quickLinks, usefulLinks } from "@/utils/web-constants";
import SectionHeader from "@/components/shared/marketing/SectionHeader";

export default function Footer() {
  return (
    <footer className="text-primary-foreground pt-0">
      {/* Instagram CTA Section */}
      <div className="pt-0 pb-6">
        <div className="section-container text-center">
          <SectionHeader
            smallHeading="Instagram"
            bigHeading="@TheSpokenHeirloom"
            showWhirl={true}
            descriptionColor="text-primary-foreground"
            descriptionStyle="bold"
            headingTransformation="normal"
            fontStyleSmallHeading="font-cormorant"
            fontStyleBigHeading="font-cormorant"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary-foreground pt-10 pb-12 relative z-10">
        <div
          className="w-full flex justify-center relative z-30 -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-20 xl:-mt-21 px-0 "
          style={{ pointerEvents: "auto" }}
        >
          <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 overflow-hidden">
            {[
              images.FooterImage01,
              images.FooterImage02,
              images.FooterImage03,
              images.FooterImage04,
              images.FooterImage05,
              images.FooterImage06,
            ].map((img, idx) => (
              <div
                key={idx}
                className="aspect-4/4 w-full h-full relative group overflow-hidden cursor-pointer"
              >
                <Image
                  src={img}
                  alt="Instagram"
                  fill
                  className="object-cover"
                />

                {/* Black overlay - fades in on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>

                {/* Instagram logo - hidden below, slides up on hover */}
                <div className="absolute inset-0 overflow-hidden z-20">
                  <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="w-7 h-7 relative">
                      <Image
                        src={images.InstaLogo}
                        alt="Instagram"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-2 border-t border-primary-foreground/10 pt-10 md:pt-14 mt-0 mr-0">
            {/* Brand Column */}
            <div className="lg:col-span-1 flex flex-col items-start">
              <div className="flex flex-col sm:flex-row mb-6 gap-4 items-start">
                <Image
                  src={images.FooterLogo}
                  alt="Footer Logo"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-primary font-cormorant text-lg sm:text-xl font-semibold mb-2 max-w-sm">
                  Your Legacy, Told in Words, Images, and Sound.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 sm:mb-6">
                <p className="text-primary font-cormorant text-xl font-semibold mb-0 sm:mb-4">
                  Follow Us
                </p>
                <div className="flex flex-row gap-2">
                  <Link href="#">
                    <div className="w-9 h-9 bg-white flex items-center justify-center">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-5 h-5 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="w-9 h-9 bg-white flex items-center justify-center">
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-5 h-5 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="w-9 h-9 bg-white flex items-center justify-center">
                      <span className="sr-only">X</span>
                      <svg
                        className="w-5 h-5 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.22 5.22 5.22 5.22a.75.75 0 0 1-1.06 1.06l-5.22-5.22-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22-5.22-5.22a.75.75 0 0 1 1.06-1.06l5.22 5.22 5.22-5.22z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="relative pl-0 md:pl-10">
              <span className="hidden lg:block absolute left-0 top-10 h-34 w-px bg-primary/30"></span>
              <h4 className="text-primary font-cormorant text-2xl mb-4 ">
                Quick Links
              </h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="relative pl-0 md:pl-10">
              <span className="hidden lg:block absolute left-0 top-10 h-34 w-px bg-primary/30"></span>
              <h4 className="text-primary text-2xl font-cormorant mb-4">
                Useful Links
              </h4>
              <ul className="space-y-1">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="relative pl-0 md:pl-10">
              <span className="hidden lg:block absolute left-0 top-10 h-34 w-px bg-primary/30"></span>

              <h4 className="text-primary text-md font-cormorant text-2xl mb-4">
                Contact Info
              </h4>
              <ul className="text-primary text-sm space-y-3">
                <li className="font-sans flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-primary"
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
                  <span>support@thespokenheirloom.com</span>
                </li>
                <li className="font-sans flex items-start gap-3 text-md">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    The Spoken Heirloom LLC
                    <br />
                    4030 Wake Forest Rd, Ste 349
                    <br />
                    Raleigh, NC 27609
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-2 bg-primary-foreground">
        <span className="block absolute inset-x-2 top-0 h-px bg-primary/30"></span>
        <div className="font-sans section-container flex flex-col md:flex-row items-center md:items-center justify-between gap-3 md:gap-4 text-xs text-primary text-center md:text-left">
          <p>
            © 2026 The Spoken Heirloom LLC. Patent Pending.
            <br />
            THE SPOKEN HEIRLOOM™ is a trademark of The Spoken Heirloom LLC.
          </p>
          <div className="text-center md:text-right text-xs">
            Protected by Patent-Pending Technology
          </div>
        </div>
      </div>
    </footer>
  );
}
