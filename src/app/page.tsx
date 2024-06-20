import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      Hello Welcome
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
