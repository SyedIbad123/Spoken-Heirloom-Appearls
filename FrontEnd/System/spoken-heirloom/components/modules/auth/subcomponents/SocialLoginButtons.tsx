"use client";

import Image from "next/image";
import { images } from "@/utils/dashboard-constant";

const SocialLoginButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Google */}
      <button
        type="button"
        className="flex items-center justify-center gap-2.5 flex-1 px-4 py-4.5 rounded-xl border border-black bg-transparent hover:bg-secondary/30 transition-colors duration-200 text-foreground text-body-md font-bold font-sans cursor-pointer"
      >
        <Image src={images.GoogleIcon} alt="Google" width={20} height={20} />
        <span>Google</span>
      </button>

      {/* Facebook */}
      <button
        type="button"
        className="flex items-center justify-center gap-2.5 flex-1 px-4 py-4.5 rounded-xl border border-black bg-transparent hover:bg-secondary/30 transition-colors duration-200 text-foreground text-body-md font-bold font-sans cursor-pointer"
      >
        <Image src={images.FacebookIcon} alt="Facebook" width={20} height={20} />
        <span>Facebook</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;
