"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, AlertCircle, Search } from "lucide-react"

export function VoteVerification() {
  const [transactionHash, setTransactionHash] = useState("")
  const [receiptId, setReceiptId] = useState("")
  const [verifying, setVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null)
  const [activeTab, setActiveTab] = useState("transaction")

  const handleVerifyTransaction = async () => {
    if (!transactionHash) return

    setVerifying(true)
    setVerificationResult(null)

    try {
      // Simulate blockchain verification
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would verify the transaction on the blockchain
      setVerificationResult("success")
    } catch (err) {
      setVerificationResult("error")
    } finally {
      setVerifying(false)
    }
  }

  const handleVerifyReceipt = async () => {
    if (!receiptId) return

    setVerifying(true)
    setVerificationResult(null)

    try {
      // Simulate receipt verification
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would verify the receipt
      setVerificationResult("success")
    } catch (err) {
      setVerificationResult("error")
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Verify that your vote was correctly recorded on the blockchain while maintaining your anonymity.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transaction">Transaction Hash</TabsTrigger>
          <TabsTrigger value="receipt">Receipt ID</TabsTrigger>
        </TabsList>

        <TabsContent value="transaction" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="transaction-hash">Transaction Hash</Label>
            <div className="flex gap-2">
              <Input
                id="transaction-hash"
                placeholder="Enter your transaction hash"
                value={transactionHash}
                onChange={(e) => setTransactionHash(e.target.value)}
              />
              <Button onClick={handleVerifyTransaction} disabled={!transactionHash || verifying}>
                {verifying ? "Verifying..." : "Verify"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              The transaction hash was provided to you after casting your vote.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="receipt" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="receipt-id">Receipt ID</Label>
            <div className="flex gap-2">
              <Input
                id="receipt-id"
                placeholder="Enter your receipt ID"
                value={receiptId}
                onChange={(e) => setReceiptId(e.target.value)}
              />
              <Button onClick={handleVerifyReceipt} disabled={!receiptId || verifying}>
                {verifying ? "Verifying..." : "Verify"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              The receipt ID was provided to you in your encrypted vote receipt.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {verificationResult === "success" && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Verification successful! Your vote was correctly recorded on the blockchain.
          </AlertDescription>
        </Alert>
      )}

      {verificationResult === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Verification failed. Please check the information you entered and try again.
          </AlertDescription>
        </Alert>
      )}

      {verificationResult === "success" && (
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Vote Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Timestamp:</span>
                <span>Nov 5, 2023, 10:23:45 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Election:</span>
                <span>Presidential Election 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Block Number:</span>
                <span>15,234,567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="text-green-600 font-medium">Confirmed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-center p-4 bg-muted rounded-md">
        <div className="flex items-center gap-2 text-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span>You can also verify your vote on the public blockchain explorer</span>
        </div>
      </div>
    </div>
  )
}

