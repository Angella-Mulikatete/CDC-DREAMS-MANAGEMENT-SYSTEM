import Link from "next/link";
import React from "react";
import UserAvatar from "../UserAvatar";
import { BarChart, Flame, LogOut, Search, Settings } from "lucide-react";

const Sidebarlinks = () => {
  return (
    <div>
      <Link href="/" className="flex space-x-4 items-center py-4">
        <UserAvatar />
        <p>All Girls</p>
      </Link>
      <ul>
        <li>
          <Link href="/events" className="flex space-x-3 items-center mb-4">
            {/* <Image src="/assets/icons/event.png" width={30} height={30} alt=""/> */}
            <Flame className="w-5 h-5" />
            <p>Events</p>
          </Link>
        </li>
        <li>
          <Link href="/materials" className="flex space-x-3 items-center mb-4">
            <Search className="w-5 h-5" />
            <p> Materials</p>
          </Link>
        </li>
        <li>
          <Link href="/report" className="flex space-x-3 items-center mb-4">
            <BarChart className="w-5 h-5" />
            <p> Reports</p>
          </Link>
        </li>
      </ul>
      <p className="my-2 font-bold text-muted-foreground">Settings</p>
      <ul>
        <li>
          <Link href="/settings" className="flex space-x-3 items-center mb-4">
            <Settings className="w-5 h-5" />
            <p>Settings</p>
          </Link>
        </li>
        <li>
          <Link href="/logout" className="flex space-x-3 items-center mb-4">
            <LogOut className="w-5 h-5" />
            <p>Logout</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebarlinks;
