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
          <Link href="/events/create" className="btn btn-primary">
            Add new Event
          </Link>
        </div>
        <EventsTable/>
      </div>
    </div>
  );
}

export default Page
