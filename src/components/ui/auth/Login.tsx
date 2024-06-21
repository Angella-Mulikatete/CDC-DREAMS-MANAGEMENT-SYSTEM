

'use client'

import React,{useState} from 'react'
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
import { toast } from "react-toastify";
import axiosClient from "@/lib/axios.config";
import { CHECK_CREDENTIALS, LOGIN_URL } from "@/lib/apiEndpoint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { signIn } from 'next-auth/react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

function Login() {
  const[authState, setAuthState] = useState({
    email:'',

    password:'',

  })

  const[loading, setLoading] = useState(false);
   const [errors, setErrors] = useState({
     email: [],

     password: [],
   });

  //  console.log(errors);

  //  const handleSubmit = (event: React.FormEvent) => {
  //    event.preventDefault();
  //    setLoading(true);
  //    axiosClient
  //      .post(CHECK_CREDENTIALS, authState)
  //      .then((res) => {
  //        setLoading(false);
  //        const response = res.data;
  //        if(response.status === 200) {
  //          signIn("credentials", {
  //            email: authState.email,
  //            password: authState.password,
  //            redirect: true,
  //            callbackUrl: "/",
  //          });

  //          console.log(" The response is", response);
  //          toast.success("Logged in successfully");
  //         }
  //      })
  //      .catch((err) => {
  //        setLoading(false);
  //        if (err.response?.status === 422) {
  //          setErrors(err.response?.data.errors);
  //        }
  //        else if(err.response?.status === 401){
  //         toast.error("Invalid credentials")
  //        }
  //        else {
  //          toast.error("Something went wrong, please try again");
  //        }
  //      });
  // "http://localhost:8000/api/auth/login"
  //  };

   const handleSubmit = async (event: React.FormEvent) => {
     event.preventDefault();
     setLoading(true);

     try {
       const res = await fetch("http://localhost:8000/api/auth/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(authState),
       });

       const response = await res.json();
       console.log("The response is", response);
       setLoading(false);

       if (response.status === 200) {
         signIn("credentials", {
           email: authState.email,
           password: authState.password,
           redirect: true,
          //  callbackUrl: "/",
           callbackUrl: "/user",
         });

         toast.success("Logged in successfully");

       } else if (res.status === 422) {
         setErrors(response.errors);
       } else if (res.status === 401) {
         toast.error("Invalid credentials");
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
            <CardTitle>Login</CardTitle>
            {/* <CardDescription>Welcome to CDC-DREAMS</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <form action="" onSubmit={handleSubmit}>
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

              <div className="mt-2">
                <Button className="w-full" disabled={loading}>
                  {loading ? "processing.." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "react-toastify";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

// function Login() {
//   const [authState, setAuthState] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({
//     email: [],
//     password: [],
//   });

//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(authState),
//       });

//       const response = await res.json();
//       console.log("The response is", response);
//       setLoading(false);

//       if (response.status === 200) {
//         const signInResult = await signIn("credentials", {
//           email: authState.email,
//           password: authState.password,
//           redirect: true,
//           callbackUrl: "/dashboard", // Specify the redirect URL after successful login
//         });

//         if (signInResult?.error) {
//           toast.error("Failed to sign in");
//         } else {
//           toast.success("Logged in successfully");
//           router.push("/dashboard"); // Redirect to dashboard after successful login
//         }
//       } else if (res.status === 422) {
//         setErrors(response.errors);
//       } else if (res.status === 401) {
//         toast.error("Invalid credentials");
//       } else {
//         toast.error("Something went wrong, please try again");
//       }
//     } catch (err) {
//       setLoading(false);
//       toast.error("Something went wrong, please try again");
//     }
//   };

//   return (
//     <>
//       <div>
//         <Card>
//           <CardHeader>
//             <CardTitle>Login</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   value={authState.email}
//                   onChange={(e) =>
//                     setAuthState({ ...authState, email: e.target.value })
//                   }
//                   placeholder="Enter Email"
//                 />
//                 <span className="text-red-400">{errors.email?.[0]}</span>
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={authState.password}
//                   onChange={(e) =>
//                     setAuthState({ ...authState, password: e.target.value })
//                   }
//                   placeholder="Enter your password"
//                 />
//                 <span className="text-red-400">{errors.password?.[0]}</span>
//               </div>
//               <div className="mt-2">
//                 <Button className="w-full" disabled={loading}>
//                   {loading ? "Processing.." : "Login"}
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default Login;