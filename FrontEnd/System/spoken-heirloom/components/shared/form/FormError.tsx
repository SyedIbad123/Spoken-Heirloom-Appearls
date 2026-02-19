import { cn } from "@/lib/utils";

interface FormErrorProps {
  message?: string;
  className?: string;
}

const FormError = ({ message, className }: FormErrorProps) => {
  if (!message) return null;

  return (
    <p
      role="alert"
      className={cn(
        "text-xs text-red-500 font-sans mt-1 flex items-center gap-1",
        className
      )}
    >
      <span aria-hidden="true">&#x26A0;</span>
      {message}
    </p>
  );
};

export default FormError;
