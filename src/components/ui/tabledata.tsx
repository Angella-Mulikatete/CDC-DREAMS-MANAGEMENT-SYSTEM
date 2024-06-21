


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
// import { useEffect } from "react";

 const fetchUsers = async () => {
    try{
       const res = await fetch("http://localhost:8000/api/user", {
         next: {
           revalidate: 10,
         },
       });

      if (!res.ok) {
       throw new Error("Failed to fetch");
      }
      const data = await res.json();

      return data;
 
    }catch(err){
      console.log("something went wrong");
    }
  }
export default async function TableData() {
  // useEffect(() =>{
  //   fetchUsers();
  // }, [])
  const users = await fetchUsers();
  console.log(users.result);

  return (
    <Table className="min-w-full bg-white border">
      <TableCaption className="text-lg font-semibold text-gray-700">
        Table
      </TableCaption>
      <TableHeader className="text-sm text-gray-700 uppercase bg-gray-50">
        <TableRow>
          <TableHead className="py-3 px-6 border-b">Name</TableHead>
          <TableHead className="py-3 px-6 border-b">Address</TableHead>
          <TableHead className="py-3 px-6 text-right border-b">Age</TableHead>
          <TableHead className="py-3 px-6 border-b">HIV Status</TableHead>
          <TableHead className="py-3 px-6 border-b">DOB</TableHead>
          <TableHead className="py-3 px-6 border-b">Village</TableHead>
          <TableHead className="py-3 px-6 border-b">Schooling Status</TableHead>
          <TableHead className="py-3 px-6 border-b">Created At</TableHead>
          <TableHead className="py-3 px-6 text-center border-b">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.result?.map((user: any) => (
          <TableRow key={user.id} className="hover:bg-gray-100">
            <TableCell className="py-3 px-6 border-b">{user.name}</TableCell>
            <TableCell className="py-3 px-6 border-b">{user.address}</TableCell>
            <TableCell className="py-3 px-6 text-right border-b">
              {user.age}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {user.HIV_Status}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {user.Date_of_Birth}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">{user.village}</TableCell>
            <TableCell className="py-3 px-6 border-b">
              {user.Schooling_Status}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {user.created_at}
            </TableCell>
            <TableCell className="py-3 px-6 text-center border-b space-x-2">
              <Link
                href={`/user/view/${user.id}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>
              <Link href="#" className="text-yellow-500 hover:underline">
                Edit
              </Link>
              <Link href="#" className="text-red-500 hover:underline">
                Delete
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


   // <table>
    //   <thead className="text-sm text-gray-700 uppercase bg-gray-50">
    //    <tr> <th>#</th>
    //     <th>Name</th>
    //     <th>address</th>
    //     <th>age</th>
    //     <th>HIV_Status</th>
    //     <th>DOB</th>
    //     <th>Village</th>
    //     <th>Schooling_Status</th></tr>
    //   </thead>
    // </table>