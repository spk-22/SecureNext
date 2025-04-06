"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileUp, CheckCircle2, AlertCircle } from "lucide-react"

interface DocumentVerificationProps {
  onVerify: (verified: boolean) => void
}

export function DocumentVerification({ onVerify }: DocumentVerificationProps) {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setPreviewUrl(url)
      setError(null)
    }
  }

  const handleVerify = async () => {
    if (!file) {
      setError("Please upload your ID document first")
      return
    }

    setVerifying(true)
    setError(null)

    try {
      // Simulate document verification
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // In a real app, this would send the document to a verification service
      setVerified(true)
      onVerify(true)
    } catch (err) {
      setError("Failed to verify document. Please try again.")
      onVerify(false)
    } finally {
      setVerifying(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <FileUp className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Document Verification</h3>
        <p className="text-sm text-muted-foreground">Upload your government-issued ID to verify your identity</p>
      </div>

      <div>
        <Label htmlFor="id-document" className="mb-2 block">
          Upload ID Document
        </Label>
        <Card className="border-dashed">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <Input
              ref={fileInputRef}
              id="id-document"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {previewUrl ? (
              <div className="space-y-4">
                <img
                  src={previewUrl || "/placeholder.svg"}
                  alt="ID Preview"
                  className="max-h-40 max-w-full object-contain mx-auto border rounded-md"
                />
                <Button variant="outline" onClick={triggerFileInput}>
                  Change Document
                </Button>
              </div>
            ) : (
              <div
                onClick={triggerFileInput}
                className="w-full h-40 flex flex-col items-center justify-center gap-2 cursor-pointer rounded-md border-2 border-dashed border-muted-foreground/25 p-4 hover:bg-muted/50 transition-colors"
              >
                <FileUp className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, PDF</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

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
            Document successfully verified! Your identity has been confirmed.
          </AlertDescription>
        </Alert>
      )}

      <Button onClick={handleVerify} disabled={!file || verifying || verified} className="w-full">
        {verifying ? "Verifying..." : verified ? "Verified" : "Verify Document"}
      </Button>

      <div className="text-xs text-muted-foreground">
        <p>Your document will be securely processed and will not be stored after verification.</p>
      </div>
    </div>
  )
}

