import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/ui/base/Navbar";
import Link from "next/link";
import TableData from "@/components/ui/tabledata";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Table of All girls</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/user/create" className="btn btn-primary">
            Add new Girl
          </Link>
        </div>
        <TableData />
      </div>
    </div>
  );
}
