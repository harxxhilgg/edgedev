import { Skeleton } from "./ui/skeleton";

export function CommitGraphSkeleton() {
  const weeks = Array.from({ length: 53 });
  const daysPerWeek = 7;

  return (
    <div className="space-y-4">
      <Skeleton className="h-7 w-32" />
      <div className="flex gap-0.75 overflow-x-auto pb-2 scrollbar-custom">
        {weeks.map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-0.75">
            {Array.from({ length: daysPerWeek }).map((_, dayIndex) => (
              <Skeleton key={dayIndex} className="w-2.5 h-2.5 rounded-[2px]" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
