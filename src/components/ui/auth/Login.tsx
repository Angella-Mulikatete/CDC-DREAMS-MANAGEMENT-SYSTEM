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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Login() {
  const[authState, setAuthState] = useState({
    email:'',
    password:'',
  })

  const[loading, setLoading] = useState(false);
  return (
    <>
      <div>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Welcome to CDC-DREAMS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form action="">
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
