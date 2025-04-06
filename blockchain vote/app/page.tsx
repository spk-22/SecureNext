import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Database, Fingerprint, Vote } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-20">
        <div className="container flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Secure Next Blockchain Voting System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A transparent and secure voting platform built on blockchain technology to ensure integrity and trust in
              the electoral process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/register">
              <Button size="lg" className="px-8">
                Register to Vote
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our platform combines cutting-edge blockchain technology with robust security measures to provide a
              trustworthy voting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Secure Authentication</CardTitle>
                <CardDescription>
                  Multi-factor authentication ensures only eligible voters can participate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our system uses email verification, phone authentication, and document verification to confirm voter
                  identity before registration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Fingerprint className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Biometric Verification</CardTitle>
                <CardDescription>Iris recognition technology prevents impersonation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Before casting a vote, users must complete a biometric verification process to ensure the registered
                  voter is the one casting the ballot.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Blockchain Technology</CardTitle>
                <CardDescription>Immutable record of all votes ensures transparency</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Every vote is recorded on a decentralized blockchain, creating a permanent, tamper-proof record that
                  can be verified without compromising voter anonymity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Privacy Protection</CardTitle>
                <CardDescription>Vote anonymity is guaranteed while maintaining verifiability</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our system uses cryptographic techniques to separate voter identity from their ballot, ensuring
                  complete privacy while still allowing voters to verify their vote was counted.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Vote Verification</CardTitle>
                <CardDescription>Voters can verify their vote was correctly recorded</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  After casting a vote, users receive a unique transaction hash that allows them to verify their vote on
                  the public ledger without revealing their choice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Vote className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Transparent Results</CardTitle>
                <CardDescription>Real-time statistics and auditable outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Election results are calculated directly from the blockchain, providing transparent, auditable
                  outcomes that can be independently verified by any observer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How Blockchain Voting Works</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our system leverages blockchain technology to create a secure, transparent, and tamper-proof voting
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium">Voter Registration</h3>
                  <p className="text-muted-foreground mt-2">
                    Users register with multi-factor authentication and document verification to confirm eligibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium">Identity Verification</h3>
                  <p className="text-muted-foreground mt-2">
                    Before voting, users complete iris recognition to confirm they are the registered voter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium">Secure Vote Casting</h3>
                  <p className="text-muted-foreground mt-2">
                    Votes are encrypted and submitted to the blockchain network as transactions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium">Blockchain Verification</h3>
                  <p className="text-muted-foreground mt-2">
                    Each vote is verified by multiple nodes in the network before being added to the blockchain.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Blockchain Security Features</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Immutable Records</h4>
                      <p className="text-sm text-muted-foreground">
                        Once recorded, votes cannot be altered or deleted due to the blockchain's append-only structure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Lock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Cryptographic Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced encryption protects the integrity of each vote while maintaining voter anonymity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Database className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Decentralized Verification</h4>
                      <p className="text-sm text-muted-foreground">
                        Multiple independent nodes verify each transaction, eliminating single points of failure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FileCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Public Auditability</h4>
                      <p className="text-sm text-muted-foreground">
                        The blockchain ledger is publicly accessible, allowing independent verification of results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Experience Secure Voting?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of citizens who trust our blockchain voting system for secure, transparent elections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/register">
                <Button size="lg" className="px-8">
                  Register Now
                </Button>
              </Link>
              <Link href="/elections">
                <Button size="lg" variant="outline" className="px-8">
                  View Elections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

