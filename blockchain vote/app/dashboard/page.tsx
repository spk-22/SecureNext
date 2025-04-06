"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ElectionTimeline } from "@/components/election-timeline"
import { VoteVerification } from "@/components/vote-verification"
import { Activity, Users, CheckCircle2, Clock, User } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock statistics data
  const statistics = {
    totalVoters: 2500000,
    votesRecorded: 1876543,
    participationRate: 75.06,
    verifiedTransactions: 1876543,
    pendingTransactions: 0,
    averageResponseTime: "1.2s",
  }

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    registrationDate: "2023-09-15",
    walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    voteHistory: [
      {
        id: "vote-1",
        election: "Presidential Election 2023",
        date: "2023-11-05T10:23:45",
        transactionHash: "0x8a7d953d42e635bf3924a12b73a320dbc168724b9fdaf93e538c58d1b0bc8b12",
      },
      {
        id: "vote-2",
        election: "National Referendum",
        date: "2023-10-15T14:12:33",
        transactionHash: "0x3a1d953d42e635bf3924a12b73a320dbc168724b9fdaf93e538c58d1b0bc8b45",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <p className="text-muted-foreground">Monitor your voting activity and verify votes</p>
        </div>
        <Button>Export Data</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Registered Voters</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.totalVoters.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Eligible citizens registered to vote</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Votes Recorded</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.votesRecorded.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Securely recorded on the blockchain</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Participation Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.participationRate}%</div>
            <p className="text-xs text-muted-foreground">Of registered voters have cast their vote</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="votes">My Votes</TabsTrigger>
          <TabsTrigger value="verification">Vote Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {userData.name}</CardTitle>
              <CardDescription>Your personal voting dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">{userData.name}</h3>
                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                    <p className="text-xs text-muted-foreground">
                      Registered on {new Date(userData.registrationDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Recent Activity</h3>
                  {userData.voteHistory.length > 0 ? (
                    <div className="space-y-3">
                      {userData.voteHistory.map((vote) => (
                        <div
                          key={vote.id}
                          className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium">{vote.election}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(vote.date).toLocaleDateString()} at {new Date(vote.date).toLocaleTimeString()}
                            </p>
                          </div>
                          <Badge>Verified</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No voting activity yet</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>Blockchain network statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Verified Transactions</span>
                  <span className="font-medium">{statistics.verifiedTransactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pending Transactions</span>
                  <span className="font-medium">{statistics.pendingTransactions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Response Time</span>
                  <span className="font-medium">{statistics.averageResponseTime}</span>
                </div>
                <Separator />
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Clock className="h-4 w-4" />
                  <span>All systems operational</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Election Timeline</CardTitle>
                <CardDescription>Key dates and events</CardDescription>
              </CardHeader>
              <CardContent>
                <ElectionTimeline />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
              <CardDescription>Your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Personal Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Full Name</span>
                      <span className="text-sm">{userData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email</span>
                      <span className="text-sm">{userData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Registration Date</span>
                      <span className="text-sm">{new Date(userData.registrationDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Blockchain Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Wallet Address</span>
                      <span className="text-sm truncate max-w-[200px]">{userData.walletAddress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Votes Cast</span>
                      <span className="text-sm">{userData.voteHistory.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Activity</span>
                      <span className="text-sm">
                        {userData.voteHistory.length > 0
                          ? new Date(userData.voteHistory[0].date).toLocaleDateString()
                          : "No activity"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-4">
                <Button variant="outline">Edit Profile</Button>
                <Button>Update Security Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="votes">
          <Card>
            <CardHeader>
              <CardTitle>My Voting History</CardTitle>
              <CardDescription>Record of your past votes</CardDescription>
            </CardHeader>
            <CardContent>
              {userData.voteHistory.length > 0 ? (
                <div className="space-y-6">
                  {userData.voteHistory.map((vote) => (
                    <div key={vote.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{vote.election}</h3>
                        <Badge>Verified</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date</span>
                          <span>{new Date(vote.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time</span>
                          <span>{new Date(vote.date).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Transaction Hash</span>
                          <span className="truncate max-w-[200px]">{vote.transactionHash}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">
                          Verify on Blockchain
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">You haven't cast any votes yet</p>
                  <Button className="mt-4">View Available Elections</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Verify Your Vote</CardTitle>
              <CardDescription>Confirm your vote was recorded correctly on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <VoteVerification />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

