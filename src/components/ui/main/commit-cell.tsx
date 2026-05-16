"use client";

import { type ContributionDay } from "@/actions/github";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CommitCell({ day }: { day: ContributionDay }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Use UTC to ensure consistent output on server and client
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getUTCDay()];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getUTCMonth()];
    const dayNum = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${weekday}, ${month} ${dayNum}, ${year}`;
  };

  const getContributionLevel = (count: number): string => {
    if (count === 0) return "bg-zinc-200 dark:bg-zinc-800";
    if (count <= 3) return "bg-green-300 dark:bg-green-900";
    if (count <= 6) return "bg-green-500 dark:bg-green-700";
    if (count <= 9) return "bg-green-600 dark:bg-green-600";
    return "bg-green-700 dark:bg-green-500";
  };

  const contributionText =
    day.contributionCount === 0
      ? "No contributions"
      : day.contributionCount === 1
        ? "1 contribution"
        : `${day.contributionCount} contributions`;

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div
          className={`w-2.5 h-2.5 rounded-[2px] transition-all hover:ring-2 hover:ring-offset-1 hover:ring-zinc-500 dark:hover:ring-zinc-400 ${getContributionLevel(
            day.contributionCount,
          )}`}
          aria-label={`${contributionText} on ${formatDate(day.date)}`}
          suppressHydrationWarning
        />
      </TooltipTrigger>

      <TooltipContent>
        <p className="font-semibold" suppressHydrationWarning>{contributionText}</p>
        <p className="text-xs opacity-80" suppressHydrationWarning>{formatDate(day.date)}</p>
      </TooltipContent>
    </Tooltip>
  );
}
