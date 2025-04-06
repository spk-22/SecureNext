"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WalletConnection } from "@/components/wallet-connection"
import { IrisVerification } from "@/components/iris-verification"

export default function LoginPage() {
  const router = useRouter()
  const [loginMethod, setLoginMethod] = useState<"credentials" | "wallet">("credentials")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [step, setStep] = useState<"login" | "verification">("login")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Move to iris verification step
    setStep("verification")
  }

  const handleWalletLogin = (connected: boolean) => {
    if (connected) {
      // Move to iris verification step
      setStep("verification")
    }
  }

  const handleVerificationComplete = (success: boolean) => {
    if (success) {
      // In a real app, this would authenticate with a backend
      router.push("/elections")
    }
  }

  return (
    <div className="container max-w-md py-12">
      {step === "login" ? (
        <Card>
          <CardHeader>
            <CardTitle>Login to Secure Next</CardTitle>
            <CardDescription>Access your account to participate in elections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={loginMethod === "credentials" ? "default" : "outline"}
                onClick={() => setLoginMethod("credentials")}
              >
                Email & Password
              </Button>
              <Button
                variant={loginMethod === "wallet" ? "default" : "outline"}
                onClick={() => setLoginMethod("wallet")}
              >
                Wallet
              </Button>
            </div>

            {loginMethod === "credentials" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            ) : (
              <WalletConnection onConnect={handleWalletLogin} />
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="link" onClick={() => router.push("/register")}>
              Don't have an account? Register
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Identity Verification</CardTitle>
            <CardDescription>Verify your identity to complete login</CardDescription>
          </CardHeader>
          <CardContent>
            <IrisVerification onVerify={handleVerificationComplete} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" onClick={() => setStep("login")}>
              Back to Login
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

