import { RegisterForm } from "@/components/RegisterForm";

export const metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <RegisterForm />
    </div>
  );
}
