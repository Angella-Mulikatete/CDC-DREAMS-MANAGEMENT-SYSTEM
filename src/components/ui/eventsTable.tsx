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

const fetchEvents = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/event", {
      next: {
        revalidate: 10,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("something went wrong");
  }
};
export default async function EventsTable() {

  const events = await fetchEvents();
  console.log(events.result);

  return (
    <Table className="min-w-full bg-white border">
      <TableCaption className="text-lg font-semibold text-gray-700">
        Table
      </TableCaption>
      <TableHeader className="text-sm text-gray-700 uppercase bg-gray-50">
        <TableRow>
          <TableHead className="py-3 px-6 border-b">Events Name</TableHead>
          <TableHead className="py-3 px-6 border-b">Events Type</TableHead>
          <TableHead className="py-3 px-6 text-right border-b">
            Learning Outcomes
          </TableHead>
          <TableHead className="py-3 px-6 border-b">Start Date</TableHead>
          <TableHead className="py-3 px-6 border-b">End date</TableHead>
          <TableHead className="py-3 px-6 border-b">Created At</TableHead>
          <TableHead className="py-3 px-6 text-center border-b">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.result?.map((user: any) => (
          <TableRow key={events.id} className="hover:bg-gray-100">
            <TableCell className="py-3 px-6 border-b">
              {events.event_name}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {events.event_type}
            </TableCell>
            <TableCell className="py-3 px-6 text-right border-b">
              {events.learning_outcomes}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {events.start_date}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {events.end_date}
            </TableCell>
            <TableCell className="py-3 px-6 border-b">
              {events.created_at}
            </TableCell>

            <TableCell className="py-3 px-6 text-center border-b space-x-2">
              <Link
                href={`/events/view/${events.id}`}
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


