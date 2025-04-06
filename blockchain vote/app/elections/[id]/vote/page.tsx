"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { IrisVerification } from "@/components/iris-verification"

// Mock candidate data
const candidates = [
  {
    id: "candidate-1",
    name: "Jane Smith",
    party: "Progressive Party",
    position: "Presidential Candidate",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "candidate-2",
    name: "John Doe",
    party: "Conservative Alliance",
    position: "Presidential Candidate",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "candidate-3",
    name: "Alex Johnson",
    party: "Liberty Union",
    position: "Presidential Candidate",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "candidate-4",
    name: "Maria Garcia",
    party: "People's Coalition",
    position: "Presidential Candidate",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function VotePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [step, setStep] = useState<"verification" | "selection" | "review" | "confirmation">("verification")
  const [transactionHash, setTransactionHash] = useState<string | null>(null)

  const handleCandidateSelect = (candidateId: string) => {
    setSelectedCandidate(candidateId)
  }

  const handleVerificationComplete = (success: boolean) => {
    if (success) {
      setStep("selection")
    }
  }

  const handleReview = () => {
    setStep("review")
  }

  const handleBack = () => {
    if (step === "review") {
      setStep("selection")
    } else if (step === "selection") {
      setStep("verification")
    }
  }

  const handleSubmitVote = async () => {
    // In a real app, this would submit the vote to the blockchain
    try {
      // Simulate blockchain transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock transaction hash
      const hash = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

      setTransactionHash(hash)
      setStep("confirmation")
    } catch (error) {
      console.error("Error submitting vote:", error)
      alert("There was an error submitting your vote. Please try again.")
    }
  }

  const handleFinish = () => {
    router.push("/")
  }

  const selectedCandidateData = candidates.find((c) => c.id === selectedCandidate)

  return (
    <div className="container max-w-3xl py-12">
      <Card>
        <CardHeader>
          <CardTitle>
            {step === "verification" && "Identity Verification"}
            {step === "selection" && "Cast Your Vote"}
            {step === "review" && "Review Your Selection"}
            {step === "confirmation" && "Vote Confirmation"}
          </CardTitle>
          <CardDescription>
            {step === "verification" && "Verify your identity before casting your vote"}
            {step === "selection" && "Select your preferred candidate for the election"}
            {step === "review" && "Please review your selection before submitting your vote"}
            {step === "confirmation" && "Your vote has been securely recorded on the blockchain"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "verification" && <IrisVerification onVerify={handleVerificationComplete} />}

          {step === "selection" && (
            <RadioGroup value={selectedCandidate || ""} onValueChange={handleCandidateSelect} className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center space-x-4 rounded-lg border p-4">
                  <RadioGroupItem value={candidate.id} id={candidate.id} />
                  <img
                    src={candidate.image || "/placeholder.svg"}
                    alt={candidate.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                    <div>
                      <h3 className="font-medium">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.party}</p>
                      <p className="text-xs text-muted-foreground">{candidate.position}</p>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {step === "review" && selectedCandidateData && (
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Your vote is final once submitted. Please verify your selection carefully.
                </AlertDescription>
              </Alert>

              <div className="rounded-lg border p-6 text-center">
                <img
                  src={selectedCandidateData.image || "/placeholder.svg"}
                  alt={selectedCandidateData.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold">{selectedCandidateData.name}</h3>
                <p className="text-muted-foreground">{selectedCandidateData.party}</p>
                <p className="text-sm text-muted-foreground">{selectedCandidateData.position}</p>
              </div>
            </div>
          )}

          {step === "confirmation" && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Vote Successfully Recorded</h3>
                <p className="text-muted-foreground">Your vote has been securely recorded on the blockchain</p>
              </div>

              {transactionHash && (
                <div className="rounded-lg border p-4 bg-muted/50">
                  <p className="text-sm font-medium mb-1">Transaction Hash:</p>
                  <p className="text-xs break-all">{transactionHash}</p>
                </div>
              )}

              <Alert>
                <AlertDescription>
                  You can verify your vote on the public ledger using the transaction hash while maintaining your
                  anonymity.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between pt-4">
          {(step === "selection" || step === "review") && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}

          {step === "selection" && (
            <Button onClick={handleReview} disabled={!selectedCandidate} className="ml-auto">
              Review Selection
            </Button>
          )}

          {step === "review" && <Button onClick={handleSubmitVote}>Submit Vote</Button>}

          {step === "confirmation" && (
            <Button onClick={handleFinish} className="mx-auto">
              Return to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

