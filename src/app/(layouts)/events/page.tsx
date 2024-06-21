import EventsTable from '@/components/ui/eventsTable';
import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Table of All Events</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link
            href="/user/create"
            className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
          >
            Add new Event
          </Link>
        </div>
        <EventsTable />
      </div>
    </div>
  );
}

export default Page
