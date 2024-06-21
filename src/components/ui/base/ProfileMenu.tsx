'use client'

import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserAvatar from '../UserAvatar';
import { Button } from '../button';
import { CustomAdmin } from '@/app/api/auth/[...nextauth]/authOptions';
import { signOut } from 'next-auth/react';
import axiosClient from '@/lib/axios.config';
import {Label} from '../label'

const ProfileMenu = ({admin}:{admin:CustomAdmin}) => {
  const[logoutOpen, setLogOutOpen] = useState(false)
  const [ProfileOpen, setProfileOpen] = useState(false);
  const[loading, setLoading] = useState(false);
  const[image, setImage] = useState<File|null>(null);

  const logoutUser = async () => {
   try {
     const response = await fetch("http://localhost:8000/api/auth/logout", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${admin.token}`,
       },
     });

     if (response.ok) {
       signOut({
         callbackUrl: "/login",
         redirect: true,
       });
     } else {
       // Handle the error if the response is not OK
       console.error("Logout failed:", response.statusText);
     }
   } catch (error) {
     // Handle the network error
     console.error("Network error:", error);
   }
  };

    // const logoutUser = async()=>{
    //   axiosClient.post("http://localhost:8000/api/auth/logout", {}, {headers:{
    //     "Authorization": `Bearer ${admin.token}`,
    //   }}).then((res) =>{
    //     signOut({
    //       callbackUrl: "/login",
    //       redirect: true,
    //     })
    //   });
    // }
    

    const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      const file = event.target.files?.[0];
       console.log("The selected file",file);
      if(file){
        setImage(file);
      }
    }


  return (
    <div>
      <Dialog open={logoutOpen} onOpenChange={setLogOutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action expire your current session. To access home page login
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-4">
            <Button variant="destructive" onClick={logoutUser}>
              Yes LogOut
            </Button>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {/* ProfileUpdate */}
      <Dialog open={ProfileOpen} onOpenChange={setProfileOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>

          <form action="">
            <div className="mb-2">
              <Label htmlFor="profile">Profile Image</Label>
              <input type="file" className='file:text-white' accept='image/png, image/jpeg, image/svg, image/png, image/gif, image/webp' onChange={handleImageChange}/>
            </div>
            <div className="mb-2">
              <Button  onClick={logoutUser} className='w-full'>
                Update Profile
              </Button>
            </div>
          </form>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setProfileOpen(true)}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLogOutOpen(true)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ProfileMenu
