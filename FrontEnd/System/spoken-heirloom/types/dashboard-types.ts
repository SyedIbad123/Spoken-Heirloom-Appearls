// ─── User & Auth ──────────────────────────────────────────────────────────────

export type UserRole = "admin" | "user" | "editor";

export interface AuthPayload {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

// ─── Subscription ─────────────────────────────────────────────────────────────

export type SubscriptionStatus = "active" | "inactive" | "trial" | "cancelled" | "past_due";

export type SubscriptionPlan = "free" | "basic" | "premium" | "pro";

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startDate: string;
  endDate?: string;
  renewsAt?: string;
}

// ─── Book ─────────────────────────────────────────────────────────────────────

export type BookStatus = "draft" | "in_progress" | "review" | "published" | "archived";

export interface Book {
  id: string;
  title: string;
  coverImageUrl?: string;
  status: BookStatus;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  pageCount?: number;
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────

export interface DashboardStats {
  totalBooks: number;
  publishedBooks: number;
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  newUsersThisMonth: number;
}

// ─── API Responses ────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

// ─── Form ─────────────────────────────────────────────────────────────────────

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}
