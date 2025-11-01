// /app/dashboard/page.tsx (Server Component)
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>You must be logged in.</div>;
  }

  if (session.user?.role != "admin") {
    return (
      <div>
        <h1>You dont have required Permision to access this page</h1>
      </div>
    );
  }

  if (!session && session.user?.role === "admin")
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
        <p>Email: {session.user?.email}</p>
        <p>Role: {session.user?.role}</p>
      </div>
    );
}
