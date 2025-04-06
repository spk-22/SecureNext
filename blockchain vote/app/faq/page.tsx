"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// FAQ data
const faqItems = [
  {
    category: "General",
    questions: [
      {
        question: "What is blockchain voting?",
        answer:
          "Blockchain voting is a secure method of conducting elections where votes are recorded on a blockchain - a distributed, immutable ledger. This technology ensures that once a vote is cast, it cannot be altered or deleted, providing transparency and security to the electoral process.",
      },
      {
        question: "How does your system ensure my vote remains private?",
        answer:
          "Our system uses advanced cryptographic techniques to separate your identity from your vote. While the blockchain records that you voted (to prevent double-voting), it does not link your identity to your specific ballot choices. This ensures complete privacy while maintaining the integrity of the election.",
      },
      {
        question: "Can I vote from anywhere?",
        answer:
          "Yes, our platform allows eligible voters to participate from anywhere with an internet connection. You'll need to complete the registration process and identity verification before you can vote remotely.",
      },
      {
        question: "What happens if I lose internet connection while voting?",
        answer:
          "Our system is designed to handle connection issues. If you lose connection during the voting process, your vote will not be submitted until you reconnect and complete the process. No partial or incomplete votes are recorded on the blockchain.",
      },
    ],
  },
  {
    category: "Registration & Verification",
    questions: [
      {
        question: "How do I register to vote on your platform?",
        answer:
          "Registration involves a multi-step process: First, create an account with your email and phone for multi-factor authentication. Then connect a blockchain wallet for secure key management. Finally, upload your government-issued ID for verification. Once verified, you'll be eligible to vote in available elections.",
      },
      {
        question: "What documents do I need for verification?",
        answer:
          "You'll need a valid government-issued photo ID such as a passport, driver's license, or national ID card. The document must clearly show your photo, name, and date of birth for verification purposes.",
      },
      {
        question: "How does the iris verification work?",
        answer:
          "Before casting your vote, you'll be prompted to complete an iris scan using your device's camera. This biometric verification ensures that you are the registered voter. The system analyzes the unique patterns in your iris to confirm your identity. This data is processed in real-time and is not stored after verification.",
      },
      {
        question: "What if I can't complete the biometric verification?",
        answer:
          "If you're unable to complete the iris verification for any reason (technical issues, accessibility concerns, etc.), please contact our support team. We have alternative verification methods available to ensure all eligible voters can participate.",
      },
    ],
  },
  {
    category: "Voting Process",
    questions: [
      {
        question: "How do I cast my vote?",
        answer:
          "After logging in and verifying your identity through iris recognition, you'll be presented with the ballot for available elections. Select your preferred candidate or option, review your selection, and submit your vote. The system will then record your vote on the blockchain and provide you with a transaction hash for verification.",
      },
      {
        question: "Can I change my vote after submitting it?",
        answer:
          "No, once your vote is submitted and recorded on the blockchain, it cannot be changed. This is why we include a review step before final submission to ensure you're confident in your selection.",
      },
      {
        question: "How do I know my vote was counted correctly?",
        answer:
          "After casting your vote, you'll receive a unique transaction hash. You can use this hash on our verification page to confirm that your vote was recorded correctly on the blockchain. This verification process allows you to confirm your vote was counted without revealing your specific ballot choices.",
      },
      {
        question: "What happens if there's a technical issue during voting?",
        answer:
          "Our system has multiple redundancies to handle technical issues. If you encounter any problems during the voting process, please contact our technical support team immediately. We maintain backup systems to ensure the continuity of the election process.",
      },
    ],
  },
  {
    category: "Security & Technology",
    questions: [
      {
        question: "How secure is blockchain voting compared to traditional methods?",
        answer:
          "Blockchain voting offers several security advantages over traditional methods. The distributed nature eliminates single points of failure, making it resistant to tampering and hacking. Each vote is cryptographically secured and the immutable ledger ensures votes cannot be altered once recorded. Additionally, the transparent nature allows for independent verification of results without compromising voter privacy.",
      },
      {
        question: "What blockchain technology does your platform use?",
        answer:
          "Our platform uses a permissioned blockchain network specifically designed for secure voting. We've implemented a consensus mechanism that prioritizes security and efficiency while maintaining the core benefits of blockchain technology: immutability, transparency, and decentralization.",
      },
      {
        question: "How do you prevent double-voting?",
        answer:
          "Our system uses a combination of identity verification and blockchain technology to prevent double-voting. Once a voter casts their ballot for a specific election, the system records this action on the blockchain, making it impossible for the same voter to submit another ballot for that election.",
      },
      {
        question: "Can the blockchain be hacked to change votes?",
        answer:
          "The distributed nature of blockchain makes it extremely resistant to hacking. To alter a vote, an attacker would need to simultaneously compromise the majority of nodes in the network, which is practically impossible with our implementation. Additionally, any attempt to alter the blockchain would be immediately detectable due to the consensus mechanism.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = searchQuery
    ? faqItems
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqItems

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground">
          Find answers to common questions about our blockchain voting system.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for questions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredFAQs.length > 0 ? (
        <div className="space-y-8 max-w-3xl mx-auto">
          {filteredFAQs.map(
            (category, index) =>
              category.questions.length > 0 && (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>Common questions about {category.category.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground">{item.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ),
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}

