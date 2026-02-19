# 📁 Copilot Architectural Instructions – Spoken Heirloom

## Project Context

This is a Next.js (App Router) TypeScript project structured using route groups:

- `(marketing)` → public website
- `(auth)` → login/register
- `(app)` → dashboard & admin
- `api` → backend routes

The project must follow clean architecture principles, reusability, and performance optimization.

---

## 🔧 UI & Component Architecture Rules

### 1️⃣ Shared UI Components

- Do **NOT** use raw HTML buttons.
- Always use shared `Button` component (`components/shared/Button.tsx`).
- Reusable Input component lives at: `components/shared/form/Input.tsx`

The `Input` component must:
- Support label
- Support error message
- Support different input types
- Support forwarding ref
- Work seamlessly with React Hook Form

Reusable form utilities live at:

```
components/shared/form/
  FormField.tsx
  Input.tsx
  TextArea.tsx
  Select.tsx
  FormError.tsx
  index.ts        ← barrel export
```

These must be generic and reusable across auth and dashboard.

---

## 📦 Form Management Rules

- Use **React Hook Form** for all forms.
- Do **NOT** centralize `useForm` logic globally.
- Each form must manage its own `useForm` instance.
- Use `zodResolver` for validation.

**Example pattern:**

```ts
const form = useForm<LoginFormType>({
  resolver: zodResolver(loginSchema),
});
```

---

## 🛡️ Validation Architecture

- Validation schemas live in `lib/validation/`.

```
lib/validation/
  auth.schema.ts        ← login, register, forgot/reset password
  dashboard.schema.ts   ← profile, book, contact, change password
```

**Rules:**
- Define schema once.
- Reuse same schema in frontend and API.
- Never duplicate validation logic.
- All schemas export their inferred types via `z.infer<typeof schema>`.

---

## 🧠 Type Management

All shared types for auth and dashboard are centralized in:

```
types/dashboard-types.ts
```

**Key types defined:**
- `UserRole`
- `SubscriptionStatus` / `SubscriptionPlan`
- `AuthPayload` / `AuthUser`
- `DashboardStats`
- `BookStatus` / `Book`
- `ApiResponse<T>` / `ApiError`
- `SelectOption`

Do **not** define duplicated types inside components.

---

## 📊 Constants & Mock Data

- Do **NOT** hardcode mock data inside components.
- All mock/static data must live in:

```
utils/dashboard-constant.ts   ← dashboard images, table data, nav items
utils/web-constants.ts        ← marketing images, nav links, testimonials
```

Components should import from constants only.

---

## ⚡ Performance Rules

- Default to **Server Components**.
- Use `"use client"` **ONLY** when:
  - Using React Hook Form
  - Using state (`useState`)
  - Using effects (`useEffect`)
  - Using browser APIs
- Avoid unnecessary client components.
- Layouts should remain server components.

---

## 🎯 Auth Implementation Rules

- Use shared `Button` component everywhere.
- Store JWT in **httpOnly cookies**.
- Do **not** store tokens in `localStorage`.
- Protect dashboard and admin routes using **middleware**.

---

## 🧱 Code Organization Rules

- Keep `page.tsx` **thin** — only import and render the page module.
- Business logic must be inside `components/modules/`.
- Do not mix marketing and dashboard components.
- Shared means **truly reusable**.

---

## 🚫 Avoid

- Hardcoded strings scattered in UI
- Duplicated types
- Client components without need
- Form validation without Zod
- Inline styling
- Raw `<button>`, `<input>`, `<textarea>`, `<select>` outside of shared form components

---

## 📈 Future Scalability

All implementations must:
- Be modular
- Be reusable
- Be type-safe
- Avoid tight coupling
- Follow feature-based architecture

---

## 🧠 Final Strategic Advice

You are building a **SaaS foundation**.

Real priorities:
1. **Strong type system** — types in `types/`, schemas in `lib/validation/`
2. **Shared validation** — Zod schemas used in both client and server
3. **Minimal duplication** — one source of truth per concern
4. **Clean boundaries** — marketing / auth / dashboard never bleed
5. **Clear data ownership** — constants in utils, not components

Everything else is secondary.
