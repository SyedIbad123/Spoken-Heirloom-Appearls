"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginSchema, type LoginFormType } from "@/lib/validation/auth.schema";
import { Input } from "@/components/shared/form";
import Button from "@/components/shared/Button";
import SocialLoginButtons from "./SocialLoginButtons";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "", rememberMe: false },
    });

    const onSubmit = async (data: LoginFormType) => {
        // TODO: wire to auth API
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full flex flex-col gap-4">
            {/* Email */}

            <div className="flex flex-col gap-2 mb-3">
                <div className="flex flex-col gap-4">
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
                        autoComplete="current-password"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            {...register("rememberMe")}
                            type="checkbox"
                            className="w-4 h-4 border border-black bg-transparent appearance-none checked:bg-olive checked:border-none checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMCA2TDkgMTdsLTUtNSIvPjwvc3ZnPg==')] bg-center bg-no-repeat bg-size-[11.7px_11.7px] cursor-pointer transition-all duration-200"
                        />
                        <span className="text-xs sm:text-body-md text-black font-sans">Remember Me</span>
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-sm font-bold text-black font-sans hover:text-olive transition-colors"
                    >
                        Forget Password?
                    </Link>
                </div>
            </div>

            {/* Remember me + Forgot password */}


            {/* Submit */}
            <Button
                text={isSubmitting ? "Logging in…" : "Log In"}
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
                <span className="flex-1 h-px bg-black/30" />
                <span className="text-xs sm:text-body-md font-bold text-black font-sans whitespace-nowrap">
                    Or Login With
                </span>
                <span className="flex-1 h-px bg-black/30" />
            </div>

            {/* Social buttons */}
            <SocialLoginButtons />

            {/* Register link */}
            <p className="text-center text-xs sm:text-body-md text-black font-sans">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="font-semibold text-primary-foreground transition-colors"
                >
                    Register now
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;

