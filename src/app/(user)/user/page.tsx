
import Dashboard from "@/app/components/dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route"; // pastikan path bener

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // lempar ke login kalau belum login
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
