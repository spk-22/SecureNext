export function ElectionTimeline() {
  return (
    <div className="relative pl-6 space-y-6">
      <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-muted" />

      <div className="relative">
        <div className="absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <div>
          <h4 className="font-medium">Registration Deadline</h4>
          <p className="text-sm text-muted-foreground">October 15, 2023</p>
          <p className="text-xs text-muted-foreground">Last day to register as a voter</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <div>
          <h4 className="font-medium">Early Voting Period</h4>
          <p className="text-sm text-muted-foreground">October 25 - November 2, 2023</p>
          <p className="text-xs text-muted-foreground">Cast your vote before election day</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <div className="h-2 w-2 rounded-full bg-current" />
        </div>
        <div>
          <h4 className="font-medium">Election Day</h4>
          <p className="text-sm text-muted-foreground">November 5, 2023</p>
          <p className="text-xs text-muted-foreground">Main voting day from 8:00 AM to 8:00 PM</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full border border-muted bg-background">
          <div className="h-2 w-2 rounded-full bg-muted" />
        </div>
        <div>
          <h4 className="font-medium text-muted-foreground">Results Announcement</h4>
          <p className="text-sm text-muted-foreground">November 6, 2023</p>
          <p className="text-xs text-muted-foreground">Official results will be published</p>
        </div>
      </div>
    </div>
  )
}

