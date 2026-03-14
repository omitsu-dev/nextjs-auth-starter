import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome, {session.user.name ?? session.user.email}
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <h2 className="mb-3 text-sm font-medium text-gray-500">
          Session Info
        </h2>
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium">Name:</dt>
            <dd>{session.user.name ?? "—"}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium">Email:</dt>
            <dd>{session.user.email}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium">ID:</dt>
            <dd className="font-mono text-xs">{session.user.id}</dd>
          </div>
        </dl>
      </div>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
