interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  text,
  onClick,
  type = "button",
  textColor = "text-white",
  borderColor = "border-white",
  backgroundColor = "bg-transparent",
  hoverBgColor = "hover:bg-white",
  hoverTextColor = "hover:text-black",
  className = "",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 ${backgroundColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} font-semibold text-base transition-all duration-300 border ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {text}
    </button>
  );
}
