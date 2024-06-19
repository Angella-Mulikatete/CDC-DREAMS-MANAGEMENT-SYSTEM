import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Register from '@/components/ui/auth/Register';
import Login from '@/components/ui/auth/Login';
 

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="hidden lg:flex justify-center items-center h-screen">
          <Image
            src=""
            height={500}
            width={500}
            alt="Image"
            className="w-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center h-screen flex-col w-full px-4 md:w-[500px]">
          <div className="flex justify-start items-start mb-6 w-full flex-col">
            <Image src="" alt="logo" width={500} height={500} />
            <h1 className="text-cabbage font-bold text-2xl md:text-3xl mt-2">
              Lets empower Girls
            </h1>
          </div>
          <Tabs defaultValue="login" className="w-full p-2 lg:w-[500px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login />
            </TabsContent>

            <TabsContent value="register">
              <Register />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Page


