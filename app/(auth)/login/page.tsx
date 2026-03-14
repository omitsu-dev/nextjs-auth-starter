import { LoginForm } from "@/components/LoginForm";

export const metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
