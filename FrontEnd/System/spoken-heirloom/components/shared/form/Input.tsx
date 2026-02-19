import { forwardRef, InputHTMLAttributes, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FormError from "./FormError";
import { images } from "@/utils/dashboard-constant"
import { EyeOff } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClassName?: string;
    labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            containerClassName,
            labelClassName,
            className,
            type = "text",
            id,
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";
        const resolvedType = isPassword && showPassword ? "text" : type;
        const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

        return (
            <div className={cn("flex flex-col gap-1", containerClassName)}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn(
                            "text-xs font-medium text-foreground-muted font-sans",
                            labelClassName
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    <input
                        ref={ref}
                        id={inputId}
                        type={resolvedType}
                        className={cn(
                            "w-full px-4 py-3.5 rounded-xl border border-black bg-transparent",
                            "text-foreground placeholder:text-foreground placeholder:font-normal text-sm sm:text-body-md font-sans",
                            "focus:outline-none focus:ring-2 focus:ring-olive/90 focus:border-none",
                            "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                            isPassword && "pr-11",
                            error && "border-red-400 focus:ring-red-300 focus:border-red-400",
                            className
                        )}
                        {...props}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground-light hover:text-foreground transition-colors"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff className="cursor-pointer" color="#7A8872" size={20} /> :
                                <Image
                                    src={images.EyeIconPassword}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                    width={20}
                                    height={20}
                                    className="object-contain cursor-pointer"
                                />}
                        </button>
                    )}
                </div>

                <FormError message={error} />
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
