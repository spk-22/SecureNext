"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Calendar, Users } from "lucide-react"

// Mock election data
const elections = [
  {
    id: "election-2023",
    title: "Presidential Election 2023",
    description: "National presidential election for the term 2024-2028",
    startDate: "2023-11-05T08:00:00",
    endDate: "2023-11-05T20:00:00",
    status: "active",
    participants: 1245789,
  },
  {
    id: "local-council-2023",
    title: "Local Council Election",
    description: "Election for your local city council representatives",
    startDate: "2023-11-12T08:00:00",
    endDate: "2023-11-12T20:00:00",
    status: "upcoming",
    participants: 45230,
  },
  {
    id: "referendum-2023",
    title: "National Referendum",
    description: "Vote on the proposed constitutional amendments",
    startDate: "2023-10-15T08:00:00",
    endDate: "2023-10-15T20:00:00",
    status: "completed",
    participants: 987654,
  },
]

export default function ElectionsPage() {
  const router = useRouter()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "upcoming":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Upcoming
          </Badge>
        )
      case "completed":
        return <Badge variant="secondary">Completed</Badge>
      default:
        return null
    }
  }

  const handleVote = (electionId: string) => {
    router.push(`/elections/${electionId}/vote`)
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Elections</h1>
      </div>

      <div className="grid gap-6">
        {elections.map((election) => (
          <Card key={election.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{election.title}</CardTitle>
                  <CardDescription>{election.description}</CardDescription>
                </div>
                {getStatusBadge(election.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">{formatDate(election.startDate)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(election.startDate)} - {formatTime(election.endDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Participants</p>
                    <p className="text-sm text-muted-foreground">{election.participants.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-end gap-4 pt-4">
              {election.status === "completed" ? (
                <Button onClick={() => router.push("/dashboard")}>View Dashboard</Button>
              ) : election.status === "active" ? (
                <Button onClick={() => handleVote(election.id)}>Cast Your Vote</Button>
              ) : (
                <Button variant="outline" disabled>
                  Not Yet Open
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

