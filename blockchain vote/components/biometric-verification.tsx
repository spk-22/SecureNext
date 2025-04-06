"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, CheckCircle2, AlertCircle, Camera, Fingerprint } from "lucide-react"

interface BiometricVerificationProps {
  onVerify: (verified: boolean) => void
}

export function BiometricVerification({ onVerify }: BiometricVerificationProps) {
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("face")
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    return () => {
      // Clean up camera stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setCameraActive(true)
      }
    } catch (err) {
      setError("Could not access camera. Please check permissions.")
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setCameraActive(false)
    }
  }

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // In a real app, you would send this image for facial recognition
        // canvas.toDataURL('image/jpeg') would give you the base64 image
      }
    }
  }

  const handleVerify = async () => {
    setVerifying(true)
    setError(null)

    if (activeTab === "face" && cameraActive) {
      captureFrame()
    }

    try {
      // Simulate biometric verification
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // In a real app, this would verify the biometric data
      setVerified(true)
      onVerify(true)

      // Stop camera after successful verification
      if (activeTab === "face") {
        stopCamera()
      }
    } catch (err) {
      setError("Failed to verify biometrics. Please try again.")
      onVerify(false)
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Scan className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Biometric Verification</h3>
        <p className="text-sm text-muted-foreground">Complete biometric verification to finalize your registration</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="face">Facial Recognition</TabsTrigger>
          <TabsTrigger value="fingerprint">Fingerprint</TabsTrigger>
        </TabsList>

        <TabsContent value="face" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                {cameraActive ? (
                  <div className="relative w-full max-w-md">
                    <video ref={videoRef} autoPlay playsInline className="w-full rounded-md border" />
                    <div className="absolute inset-0 border-4 border-dashed border-primary/50 rounded-md pointer-events-none" />
                    <canvas ref={canvasRef} className="hidden" />
                  </div>
                ) : (
                  <div className="w-full h-48 flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-muted-foreground/25 p-4">
                    <Camera className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Camera access is required for facial verification</p>
                    <Button onClick={startCamera} className="mt-2">
                      Start Camera
                    </Button>
                  </div>
                )}

                {cameraActive && (
                  <div className="mt-4 text-sm text-center space-y-2">
                    <p>Please look directly at the camera and follow these instructions:</p>
                    <ol className="text-left list-decimal pl-5">
                      <li>Ensure your face is well-lit and clearly visible</li>
                      <li>Remove glasses, masks, or other face coverings</li>
                      <li>Blink naturally when prompted to verify liveness</li>
                    </ol>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fingerprint" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <Fingerprint className="h-24 w-24 text-primary/80 mb-4" />
                <p className="text-center text-sm mb-4">
                  Place your finger on the fingerprint scanner to verify your identity
                </p>
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center bg-muted/50">
                  <Fingerprint className="h-16 w-16 text-muted-foreground" />
                </div>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  This is a simulation. In a real application, this would connect to a fingerprint scanner.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {verified && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Biometric verification successful! Your identity has been confirmed.
          </AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handleVerify}
        disabled={(activeTab === "face" && !cameraActive) || verifying || verified}
        className="w-full"
      >
        {verifying ? "Verifying..." : verified ? "Verified" : "Complete Verification"}
      </Button>

      <div className="text-xs text-muted-foreground">
        <p>Your biometric data is processed securely and is not stored after verification.</p>
      </div>
    </div>
  )
}

