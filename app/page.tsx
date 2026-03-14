import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold">Next.js Auth Starter</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Authentication with Auth.js v5 + Prisma + PostgreSQL
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="rounded-lg border border-gray-300 px-6 py-2.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
