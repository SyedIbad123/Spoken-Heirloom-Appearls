import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import FormError from "./FormError";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      containerClassName,
      labelClassName,
      className,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-xs font-medium text-foreground-muted font-sans",
              labelClassName
            )}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            "w-full px-4 py-3 rounded-md border border-primary-border bg-white/80",
            "text-foreground placeholder:text-foreground-light text-sm font-sans",
            "focus:outline-none focus:ring-2 focus:ring-olive/40 focus:border-olive",
            "transition-all duration-200 resize-y disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-400 focus:ring-red-300 focus:border-red-400",
            className
          )}
          {...props}
        />

        <FormError message={error} />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
