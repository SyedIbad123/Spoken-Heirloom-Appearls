"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show footer on stepfour page
  if (pathname === "/create-your-book/stepfour") {
    return null;
  }

  return <Footer />;
}
