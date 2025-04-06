"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface WalletConnectionProps {
  onConnect: (connected: boolean) => void
}

export function WalletConnection({ onConnect }: WalletConnectionProps) {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConnect = async () => {
    setConnecting(true)
    setError(null)

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, this would connect to MetaMask or another wallet
      // if (window.ethereum) {
      //   await window.ethereum.request({ method: 'eth_requestAccounts' })
      // }

      setConnected(true)
      onConnect(true)
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
      onConnect(false)
    } finally {
      setConnecting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Wallet className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Connect Your Wallet</h3>
        <p className="text-sm text-muted-foreground">Connect your blockchain wallet to securely verify your identity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="MetaMask" className="h-10 w-10 mb-2" />
            <span className="text-sm font-medium">MetaMask</span>
            <Button
              onClick={handleConnect}
              disabled={connecting || connected}
              className="mt-2 w-full"
              variant={connected ? "outline" : "default"}
            >
              {connecting ? "Connecting..." : connected ? "Connected" : "Connect"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="WalletConnect" className="h-10 w-10 mb-2" />
            <span className="text-sm font-medium">WalletConnect</span>
            <Button disabled={connecting || connected} className="mt-2 w-full" variant="outline">
              Connect
            </Button>
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {connected && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Wallet successfully connected! Your identity is now securely verified.
          </AlertDescription>
        </Alert>
      )}

      <div className="text-xs text-muted-foreground">
        <p>By connecting your wallet, you agree to our Terms of Service and Privacy Policy.</p>
        <p className="mt-1">Your private keys will never leave your device.</p>
      </div>
    </div>
  )
}

