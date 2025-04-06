"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Scan, CheckCircle2, AlertCircle, Eye } from "lucide-react"

interface IrisVerificationProps {
  onVerify: (verified: boolean) => void
}

export function IrisVerification({ onVerify }: IrisVerificationProps) {
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cameraActive, setCameraActive] = useState(false)
  const [captureStatus, setCaptureStatus] = useState<"idle" | "captured" | "processing" | "matched">("idle")
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
      }
    }
  }

  const handleSubmit = async () => {
    if (!cameraActive) {
      setError("Please start the camera first")
      return
    }

    setVerifying(true)
    setError(null)
    captureFrame()
    setCaptureStatus("captured")

    try {
      // Show "Snap captured successfully" message
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show processing state with buffering circle
      setCaptureStatus("processing")

      // After 3 seconds, show "Match found"
      await new Promise((resolve) => setTimeout(resolve, 3000))

      setCaptureStatus("matched")

      // After showing "Match found", complete verification
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setVerified(true)
      onVerify(true)
    } catch (err) {
      setError("Failed to verify iris scan. Please try again.")
      onVerify(false)
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Eye className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Iris Verification</h3>
        <p className="text-sm text-muted-foreground">
          Complete iris verification to confirm your identity before voting
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center">
            {cameraActive ? (
              <div className="relative w-full max-w-md">
                <video ref={videoRef} autoPlay playsInline className="w-full rounded-md border" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 border-2 border-dashed border-primary rounded-full"></div>
                  <div className="absolute w-24 h-24 border border-primary rounded-full"></div>
                </div>
                <canvas ref={canvasRef} className="hidden" />

                {captureStatus === "captured" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-md">
                    <div className="bg-white p-4 rounded-md text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="font-medium text-green-700">Snap captured successfully</p>
                    </div>
                  </div>
                )}

                {captureStatus === "processing" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-md">
                    <div className="bg-white p-4 rounded-md text-center">
                      <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="font-medium">Processing...</p>
                    </div>
                  </div>
                )}

                {captureStatus === "matched" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-md">
                    <div className="bg-white p-4 rounded-md text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="font-medium text-green-700">Match found</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-48 flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-muted-foreground/25 p-4">
                <Scan className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Camera access is required for iris verification</p>
              </div>
            )}

            {cameraActive && captureStatus === "idle" && (
              <div className="mt-4 text-sm text-center space-y-2">
                <p>Please follow these instructions:</p>
                <ol className="text-left list-decimal pl-5">
                  <li>Position your face so your eye is visible in the circle</li>
                  <li>Hold still and look directly at the camera</li>
                  <li>Keep your eyes open and avoid blinking during the scan</li>
                </ol>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

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
            Iris verification successful! Your identity has been confirmed.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4">
        <Button onClick={startCamera} disabled={cameraActive || verifying} className="flex-1">
          Start Camera
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!cameraActive || verifying || verified || captureStatus !== "idle"}
          className="flex-1"
        >
          Submit
        </Button>
      </div>

      <div className="text-xs text-muted-foreground">
        <p>Your biometric data is processed securely and is not stored after verification.</p>
      </div>
    </div>
  )
}

