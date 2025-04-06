"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VoteStatistics() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="participation">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="participation">Participation</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="regional">Regional Data</TabsTrigger>
        </TabsList>

        <TabsContent value="participation" className="pt-4">
          <div className="space-y-4">
            <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Participation Rate Chart</p>
              {/* In a real app, this would be a chart showing participation rates */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Hourly Voting Rate</div>
                  <div className="text-2xl font-bold">12,453</div>
                  <div className="text-xs text-muted-foreground">votes per hour</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Peak Voting Time</div>
                  <div className="text-2xl font-bold">10:00 - 11:00</div>
                  <div className="text-xs text-muted-foreground">highest activity</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">First-Time Voters</div>
                  <div className="text-2xl font-bold">23.4%</div>
                  <div className="text-xs text-muted-foreground">of total participants</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="demographics" className="pt-4">
          <div className="space-y-4">
            <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Demographic Distribution Chart</p>
              {/* In a real app, this would be a chart showing demographic data */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Age Group 18-29</div>
                  <div className="text-2xl font-bold">68.2%</div>
                  <div className="text-xs text-muted-foreground">participation rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Age Group 30-49</div>
                  <div className="text-2xl font-bold">74.5%</div>
                  <div className="text-xs text-muted-foreground">participation rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Age Group 50+</div>
                  <div className="text-2xl font-bold">82.1%</div>
                  <div className="text-xs text-muted-foreground">participation rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="regional" className="pt-4">
          <div className="space-y-4">
            <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Regional Distribution Map</p>
              {/* In a real app, this would be a map showing regional voting data */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Highest Participation</div>
                  <div className="text-2xl font-bold">Northern Region</div>
                  <div className="text-xs text-muted-foreground">83.7% participation</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Lowest Participation</div>
                  <div className="text-2xl font-bold">Southern Region</div>
                  <div className="text-xs text-muted-foreground">67.2% participation</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm font-medium">Most Improved</div>
                  <div className="text-2xl font-bold">Eastern Region</div>
                  <div className="text-xs text-muted-foreground">+12.3% from last election</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

