export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-800 ${className}`}
      {...props}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
