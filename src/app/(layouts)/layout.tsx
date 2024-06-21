import Navbar from "@/components/ui/base/Navbar";
import Sidebar from "@/components/ui/base/Sidebar";
import { getServerSession } from "next-auth";
import { CustomSession, authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function Layouts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions) as CustomSession | null
  return (
    <div className="h-screen">
      <Navbar admin={session?.admin!}/>
      <div className="flex">
        <Sidebar />
        <div className="flex justify-center items-center w-full">{children}</div>
      </div>
    </div>
  );
}
