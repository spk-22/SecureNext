"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stepper } from "@/components/stepper"
import { DocumentVerification } from "@/components/document-verification"
import { WalletConnection } from "@/components/wallet-connection"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    verificationCode: "",
    walletConnected: false,
    documentVerified: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleWalletConnection = (connected: boolean) => {
    setFormData((prev) => ({ ...prev, walletConnected: connected }))
    if (connected) handleNextStep()
  }

  const handleDocumentVerification = (verified: boolean) => {
    setFormData((prev) => ({ ...prev, documentVerified: verified }))
    if (verified) {
      // Registration complete, redirect to dashboard
      router.push("/dashboard")
    }
  }

  return (
    <div className="container max-w-3xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>Voter Registration</CardTitle>
          <CardDescription>Complete the verification process to register as a voter</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={["Initial Authentication", "Wallet Connection", "Document Verification"]}
            currentStep={step}
          />

          {step === 1 && (
            <div className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <InfoIcon className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-blue-700">
                  Please enter any dummy text as OTP. This feature is not yet fully developed.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email Verification</TabsTrigger>
                  <TabsTrigger value="sms">SMS Verification</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-4 mt-4">
                  <Button onClick={() => alert("Verification code sent to your email")}>Send Verification Code</Button>
                  <div className="space-y-2">
                    <Label htmlFor="email-code">Verification Code</Label>
                    <Input
                      id="email-code"
                      name="verificationCode"
                      placeholder="Enter the code sent to your email"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Please enter any dummy text as OTP. This feature is not yet fully developed.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="sms" className="space-y-4 mt-4">
                  <Button onClick={() => alert("Verification code sent to your phone")}>Send Verification Code</Button>
                  <div className="space-y-2">
                    <Label htmlFor="sms-code">Verification Code</Label>
                    <Input
                      id="sms-code"
                      name="verificationCode"
                      placeholder="Enter the code sent to your phone"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-muted-foreground">
                      Please enter any dummy text as OTP. This feature is not yet fully developed.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {step === 2 && <WalletConnection onConnect={handleWalletConnection} />}

          {step === 3 && <DocumentVerification onVerify={handleDocumentVerification} />}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
          )}
          {step < 3 && step !== 2 && (
            <Button onClick={handleNextStep} className={step === 1 ? "ml-auto" : ""}>
              Continue
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

