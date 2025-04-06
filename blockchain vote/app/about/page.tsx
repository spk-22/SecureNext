import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Database, Vote, Users, FileCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Secure Next</h1>
        <p className="text-xl text-muted-foreground">
          Our mission is to revolutionize the democratic process through secure, transparent, and accessible blockchain
          voting technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Transforming democracy through technology</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Secure Next was founded with a clear mission: to create a voting system that combines the highest levels
              of security with complete transparency, making democratic participation more accessible and trustworthy
              for all citizens.
            </p>
            <p>
              We believe that by leveraging blockchain technology, we can address many of the challenges facing
              traditional voting systems, from security vulnerabilities to accessibility barriers and result
              verification issues.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Technology</CardTitle>
            <CardDescription>Built on blockchain innovation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our platform is built on a secure, permissioned blockchain network that provides the perfect balance
              between transparency and privacy. Each vote is recorded as a transaction on the blockchain, creating an
              immutable record that cannot be altered or deleted.
            </p>
            <p>
              We use advanced cryptographic techniques to ensure that while votes are verifiable, voter identities
              remain protected. This allows for complete election transparency without compromising individual privacy.
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Why Blockchain for Voting?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>Protection against tampering</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Blockchain's distributed ledger technology makes it virtually impossible to alter votes once they've
                been recorded. The decentralized nature eliminates single points of failure that could be targeted by
                attackers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Lock className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Privacy Protection</CardTitle>
                <CardDescription>Anonymous yet verifiable</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Our system uses cryptographic techniques to separate voter identity from their ballot choices. This
                ensures complete privacy while still allowing voters to verify their vote was counted correctly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Database className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Transparency</CardTitle>
                <CardDescription>Auditable by design</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                The blockchain ledger is publicly accessible, allowing independent verification of election results.
                This transparency builds trust in the democratic process without compromising individual voter privacy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Vote className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Immediate Results</CardTitle>
                <CardDescription>Real-time counting</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Votes are counted in real-time as they are added to the blockchain, eliminating the delays and potential
                errors associated with manual counting processes while maintaining complete accuracy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Increased Accessibility</CardTitle>
                <CardDescription>Voting from anywhere</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Our platform allows eligible voters to participate from anywhere with an internet connection, while
                maintaining the same level of security as in-person voting, increasing participation rates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <FileCheck className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Cost Efficiency</CardTitle>
                <CardDescription>Reduced operational costs</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                By digitizing the voting process, we eliminate many of the costs associated with traditional elections,
                from printing ballots to staffing polling stations, while improving security and accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">How We Protect Your Privacy</h2>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-lg">
                At Secure Next, we understand that privacy is paramount in any voting system. Here's how we protect your
                information:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Identity Separation</h3>
                  <p>
                    We use a cryptographic technique called zero-knowledge proofs to verify voter eligibility without
                    revealing the voter's identity. This creates a complete separation between your identity and your
                    vote.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Encrypted Ballots</h3>
                  <p>
                    All votes are encrypted before being submitted to the blockchain, ensuring that individual voting
                    choices cannot be seen, even by system administrators.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Minimal Data Storage</h3>
                  <p>
                    We only store the minimum amount of personal information necessary to verify voter eligibility.
                    Biometric data is processed in real-time and never stored after verification.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Transparent Code</h3>
                  <p>
                    Our voting system code is open-source and available for public review, ensuring that our privacy and
                    security claims can be independently verified by experts.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

