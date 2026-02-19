"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  registerSchema,
  type RegisterFormType,
} from "@/lib/validation/auth.schema";
import { Input } from "@/components/shared/form";
import Button from "@/components/shared/Button";
import SocialLoginButtons from "./SocialLoginButtons";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormType) => {
    // TODO: wire to auth API
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full flex flex-col gap-5"
    >
      {/* Full Name */}
      <Input
        {...register("fullName")}
        type="text"
        placeholder="Full Name"
        error={errors.fullName?.message}
        autoComplete="name"
      />

      {/* Email */}
      <Input
        {...register("email")}
        type="email"
        placeholder="Email Address"
        error={errors.email?.message}
        autoComplete="email"
      />

      {/* Password */}
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        autoComplete="new-password"
      />

      {/* Confirm Password */}
      <Input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
      />

      {/* Submit */}
      <Button
        text={isSubmitting ? "Creating account…" : "Create Account"}
        type="submit"
        disabled={isSubmitting}
        fullWidth
        backgroundColor="bg-olive"
        textColor="text-white"
        borderColor="border-olive"
        hoverBgColor="hover:bg-olive-dark"
        hoverTextColor="hover:text-white"
        hoverBorderColor="hover:border-olive-dark"
        className="rounded-md py-3 text-sm font-semibold shadow-soft active:scale-[0.98]"
      />

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-px bg-primary-border" />
        <span className="text-xs text-foreground-muted font-sans whitespace-nowrap">
          Or Sign Up With
        </span>
        <span className="flex-1 h-px bg-primary-border" />
      </div>

      {/* Social buttons */}
      <SocialLoginButtons />

      {/* Login link */}
      <p className="text-center text-xs text-foreground-muted font-sans">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-foreground hover:text-olive transition-colors"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;

