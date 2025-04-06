import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Eye } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy & Security</h1>
        <p className="text-xl text-muted-foreground">
          How we protect your data and maintain the integrity of the voting process
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> Our Privacy Commitment
            </CardTitle>
            <CardDescription>The foundation of our approach to voter privacy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At Secure Vote, we believe that privacy is a fundamental right, especially in the democratic process. Our
              blockchain voting system is designed with privacy as a core principle, ensuring that your personal
              information and voting choices remain protected at all times.
            </p>
            <p>
              We adhere to the highest standards of data protection and comply with all relevant privacy regulations.
              Our commitment is to collect only the minimum amount of personal information necessary to verify your
              eligibility to vote, and to process this information securely and transparently.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" /> Data Collection & Usage
            </CardTitle>
            <CardDescription>What information we collect and how we use it</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Registration Information:</span> Name, email address, phone number,
                    and government-issued ID for verification purposes.
                  </li>
                  <li>
                    <span className="font-medium">Biometric Data:</span> Iris scan data is processed during the voting
                    process for identity verification but is not stored after verification is complete.
                  </li>
                  <li>
                    <span className="font-medium">Blockchain Wallet:</span> Public key information associated with your
                    blockchain wallet for transaction verification.
                  </li>
                  <li>
                    <span className="font-medium">Voting Records:</span> The fact that you participated in an election
                    is recorded, but your specific ballot choices are encrypted and not linked to your identity.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How We Use Your Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Voter Eligibility:</span> To verify that you are eligible to
                    participate in specific elections.
                  </li>
                  <li>
                    <span className="font-medium">Identity Verification:</span> To confirm your identity before allowing
                    you to cast a vote, preventing fraud and ensuring one-person-one-vote integrity.
                  </li>
                  <li>
                    <span className="font-medium">System Improvements:</span> Anonymized usage data may be analyzed to
                    improve the security, performance, and usability of our voting platform.
                  </li>
                  <li>
                    <span className="font-medium">Communication:</span> To send you important information about
                    elections you're eligible for, system updates, and security notifications.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" /> Privacy Protection Measures
            </CardTitle>
            <CardDescription>How we safeguard your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Cryptographic Separation</h3>
                <p>
                  We use advanced cryptographic techniques to create a complete separation between your identity and
                  your vote. While the system verifies that you are eligible to vote and records that you participated,
                  it does not link your identity to your specific ballot choices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Zero-Knowledge Proofs</h3>
                <p>
                  Our system implements zero-knowledge proofs, allowing us to verify certain information without
                  revealing the underlying data. This means we can confirm your eligibility to vote without exposing
                  sensitive personal details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Minimal Data Retention</h3>
                <p>
                  We follow the principle of data minimization, collecting only what is necessary for the voting
                  process. Biometric data used for verification is processed in real-time and is not stored after
                  verification is complete.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Secure Infrastructure</h3>
                <p>
                  All personal data is stored in encrypted form on secure servers with strict access controls. Our
                  systems are regularly audited and tested for security vulnerabilities to ensure the highest level of
                  protection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-primary" /> Blockchain Security
            </CardTitle>
            <CardDescription>How blockchain technology protects the integrity of your vote</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Immutable Record</h3>
                <p>
                  Once your vote is recorded on the blockchain, it cannot be altered or deleted. This immutability
                  ensures that the voting record remains intact and tamper-proof throughout the election process and
                  beyond.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Distributed Verification</h3>
                <p>
                  Our blockchain network uses a distributed consensus mechanism, meaning that multiple independent nodes
                  must verify and agree on each transaction. This eliminates single points of failure and makes the
                  system highly resistant to attacks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Transparent Auditability</h3>
                <p>
                  The blockchain ledger is publicly accessible, allowing for independent verification of election
                  results. This transparency builds trust in the democratic process while our cryptographic techniques
                  ensure that individual votes remain private.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Individual Verification</h3>
                <p>
                  After casting your vote, you receive a unique transaction hash that allows you to verify that your
                  vote was correctly recorded on the blockchain. This gives you personal assurance that your vote was
                  counted without revealing your specific choices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You have the right to access, correct, and delete your personal information in accordance with applicable
            privacy laws. For more information about exercising these rights, please contact our privacy team at
            privacy@securevote.example.
          </p>
        </div>
      </div>
    </div>
  )
}

