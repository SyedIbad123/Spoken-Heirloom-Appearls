import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import FormError from "./FormError";
import { SelectOption } from "@/types/dashboard-types";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder,
      containerClassName,
      labelClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const selectId =
      id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              "text-xs font-medium text-foreground-muted font-sans",
              labelClassName
            )}
          >
            {label}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={cn(
            "w-full px-4 py-3 rounded-md border border-primary-border bg-white/80",
            "text-foreground text-sm font-sans appearance-none",
            "focus:outline-none focus:ring-2 focus:ring-olive/40 focus:border-olive",
            "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
            "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6560' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")] bg-no-repeat bg-position-[right_1rem_center]",
            error && "border-red-400 focus:ring-red-300 focus:border-red-400",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <FormError message={error} />
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
