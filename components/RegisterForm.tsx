"use client";

import { useActionState } from "react";
import { register, type RegisterState } from "@/lib/actions";

export function RegisterForm() {
  const [state, action, pending] = useActionState<RegisterState, FormData>(register, {});

  if (state.success) {
    return (
      <div className="w-full max-w-sm space-y-4 text-center">
        <h1 className="text-2xl font-bold">Account Created</h1>
        <p className="text-gray-600 dark:text-gray-400">
          You can now sign in with your email and password.
        </p>
        <a
          href="/login"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700"
        >
          Go to Sign In
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="mt-1 text-sm text-gray-500">
          Register a new account to get started
        </p>
      </div>

      <form action={action} className="space-y-4">
        {state.error && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
            {state.error}
          </p>
        )}

        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
          />
          <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {pending ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}
