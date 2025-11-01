// /app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
      <p>Your role: {session?.user?.role}</p>

      {session?.user?.role === "admin" && (
        <Link href="/admin">
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
            Go to Admin Panel
          </button>
        </Link>
      )}
    </div>
  );
}
