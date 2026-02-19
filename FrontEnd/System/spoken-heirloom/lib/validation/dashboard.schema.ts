import { z } from "zod";

// ─── Profile Update ───────────────────────────────────────────────────────────

export const updateProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be under 60 characters"),
  email: z.string().email("Please enter a valid email address"),
  bio: z.string().max(300, "Bio must be under 300 characters").optional(),
  avatarUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export type UpdateProfileFormType = z.infer<typeof updateProfileSchema>;

// ─── Change Password ─────────────────────────────────────────────────────────

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmNewPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>;

// ─── Create / Edit Book ───────────────────────────────────────────────────────

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be under 100 characters"),
  description: z
    .string()
    .max(500, "Description must be under 500 characters")
    .optional(),
  status: z.enum(["draft", "in_progress", "review", "published", "archived"]),
});

export type BookFormType = z.infer<typeof bookSchema>;

// ─── Contact / Support ────────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(60),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required").max(120),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
