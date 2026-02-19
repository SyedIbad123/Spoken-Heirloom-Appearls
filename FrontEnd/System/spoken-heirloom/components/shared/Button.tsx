"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  navigateTo?: string;
  type?: "button" | "submit" | "reset";
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  text,
  onClick,
  navigateTo,
  type = "button",
  textColor = "text-white",
  borderColor = "border-white",
  backgroundColor = "bg-transparent",
  hoverBgColor = "hover:bg-white",
  hoverTextColor = "hover:text-black",
  hoverBorderColor = "hover:border-white",
  className = "",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`cursor-pointer inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3 ${backgroundColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor} font-semibold text-base transition-all duration-300 border ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {text}
    </button>
  );
}
