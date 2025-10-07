export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Nav skeleton */}
      <div className="h-16 bg-muted/30 border-b border-border" />

      {/* Hero skeleton */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="h-32 bg-muted/30 rounded-3xl w-3/4 mx-auto" />
          <div className="h-16 bg-muted/30 rounded-3xl w-1/2 mx-auto" />
          <div className="flex gap-4 justify-center">
            <div className="h-16 w-48 bg-muted/30 rounded-full" />
            <div className="h-16 w-48 bg-muted/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="h-96 bg-muted/30 rounded-3xl" />
          <div className="space-y-6">
            <div className="h-12 bg-muted/30 rounded-2xl w-3/4" />
            <div className="h-8 bg-muted/30 rounded-2xl" />
            <div className="h-8 bg-muted/30 rounded-2xl w-5/6" />
            <div className="h-8 bg-muted/30 rounded-2xl w-4/6" />
          </div>
        </div>
      </div>
    </div>
  )
}
