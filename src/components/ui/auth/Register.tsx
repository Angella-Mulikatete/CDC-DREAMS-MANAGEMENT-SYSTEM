"use client";

import React, { useState } from "react";
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
import axiosClient from "@/lib/axios.config";
import { REGISTER_URL } from "@/lib/apiEndpoint";
import { toast } from "react-toastify";

const Register = () => {
  const [authState, setAuthState] = useState({
    name:"",
    email: "",
    password: "",
    password_confirmation: "",

  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name:[],
    email:[],
    password:[],
    password_confirmation:[]
  });
  console.log(errors)
  
  // const handleSubmit = (event:React.FormEvent) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   axiosClient.post(REGISTER_URL, authState)
  //   .then((res)=>{
  //     setLoading(false);
  //     const response = res.data
      
  //     console.log(" The response is",response)
  //     toast.success("Account created successfully, Now you can login")
  //   })
  //   .catch((err)=>{
  //      setLoading(false);
  //      if(err.response?.status === 422){
  //       setErrors(err.response?.data.errors);
  //      }else{
  //       toast.error("Something went wrong, please try again")
  //      }
  //   })
  // };

   const handleSubmit = async (event: React.FormEvent) => {
     event.preventDefault();
     setLoading(true);

     try {
       const res = await fetch("http://localhost:8000/api/auth/register", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(authState),
       });

       const response = await res.json();
       console.log(" The response is", response);
       setLoading(false);

       if (res.ok) {
         toast.success("Account created successfully, Now you can login");
       } else if (res.status === 422) {
         setErrors(response.errors);
       } else {
         toast.error("Something went wrong, please try again");
       }
     } catch (err) {
       setLoading(false);
       toast.error("Something went wrong, please try again");
     }
   };
    
  

  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            {/* <CardDescription>Welcome to CDC-DREAMS</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <form action="" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <Label htmlFor="name"> Name</Label>
                <Input
                  id="name"
                  value={authState.name}
                  type="text"
                  onChange={(e) =>
                    setAuthState({ ...authState, name: e.target.value })
                  }
                  placeholder="Enter name"
                />
                <span className="text-red-400">{errors.name?.[0]}</span>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={authState.email}
                  onChange={(e) =>
                    setAuthState({ ...authState, email: e.target.value })
                  }
                  placeholder="Enter Email"
                />
                <span className="text-red-400">{errors.email?.[0]}</span>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={authState.password}
                  onChange={(e) =>
                    setAuthState({ ...authState, password: e.target.value })
                  }
                  placeholder="Enter your password"
                />
                <span className="text-red-400">{errors.password?.[0]}</span>
              </div>

              <div className="space-y-1">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  id="cpassword"
                  type="password"
                  value={authState.password_confirmation}
                  onChange={(e) =>
                    setAuthState({
                      ...authState,
                      password_confirmation: e.target.value,
                    })
                  }
                  placeholder="Confirm your password"
                />
                <span className="text-red-400">{errors.password_confirmation?.[0]}</span>
              </div>

              <div className="mt-2">
                <Button className="w-full" disabled={loading}>
                  {loading ? "processing.." : "Register"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Register;
