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

const Register = () => {
  const [authState, setAuthState] = useState({
    name:"",
    username:"",
    email: "",
    password: "",
    password_confirmation: "",

  });

  const [loading, setLoading] = useState(false);
  return (
    <>
      <div>
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Welcome to CDC-DREAMS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form action="">
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
                </div>

                <div className="space-y-1">
                  <Label htmlFor="username">User Name</Label>
                  <Input
                    id="username"
                    value={authState.username}
                    type="text"
                    onChange={(e) =>
                      setAuthState({ ...authState, username: e.target.value })
                    }
                    placeholder="Enter Username"
                  />
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
                </div>

                <div className="space-y-1">
                  <Label htmlFor="cpassword">Confirm Password</Label>
                  <Input
                    id="cpassword"
                    type="password"
                    value={authState.password_confirmation}
                    onChange={(e) =>
                      setAuthState({ ...authState, password_confirmation: e.target.value })
                    }
                    placeholder="Confirm your password"
                  />
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
