import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FormError from "./FormError";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}

const FormField = ({
  label,
  htmlFor,
  error,
  required,
  hint,
  className,
  children,
}: FormFieldProps) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-xs font-medium text-foreground-muted font-sans"
        >
          {label}
          {required && (
            <span className="text-red-400 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {hint && !error && (
        <p className="text-xs text-foreground-light font-sans">{hint}</p>
      )}

      <FormError message={error} />
    </div>
  );
};

export default FormField;
