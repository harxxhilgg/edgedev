/* eslint-disable react-hooks/error-boundaries */
import { getGitHubContributions, type ContributionDay } from "@/actions/github";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Suspense } from "react";
import { CommitGraphScrollContainer } from "./commit-graph-scroll-container";
import { CircleAlert } from "lucide-react";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { CommitGraphSkeleton } from "@/components/skeleton";

// Commit cell with tooltip
function CommitCell({ day }: { day: ContributionDay }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getContributionLevel = (count: number): string => {
    if (count === 0) return "bg-zinc-200 dark:bg-zinc-800";
    if (count <= 3) return "bg-green-200 dark:bg-green-900";
    if (count <= 6) return "bg-green-400 dark:bg-green-700";
    if (count <= 9) return "bg-green-500 dark:bg-green-600";
    return "bg-green-600 dark:bg-green-500";
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
        />
      </TooltipTrigger>

      <TooltipContent>
        <TooltipArrow className="fill-primary" />

        <p className="font-semibold">{contributionText}</p>
        <p className="text-xs opacity-80">{formatDate(day.date)}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// Main graph component
async function CommitGraphContent() {
  try {
    const username = process.env.GITHUB_USERNAME;
    const data = await getGitHubContributions(username!);

    // Show all available weeks
    const recentWeeks = data.weeks;

    // Calculate month spans (which weeks belong to which month)
    const monthSpans: {
      startIndex: number;
      weekCount: number;
      label: string;
    }[] = [];
    let currentMonth = -1;
    let currentSpan: {
      startIndex: number;
      weekCount: number;
      label: string;
    } | null = null;

    recentWeeks.forEach((week, weekIndex) => {
      if (!week.contributionDays[0]) return;

      const date = new Date(week.contributionDays[0].date);
      const month = date.getMonth();

      if (month !== currentMonth) {
        // Save previous span
        if (currentSpan) {
          monthSpans.push(currentSpan);
        }
        // Start new span
        currentMonth = month;
        currentSpan = {
          startIndex: weekIndex,
          weekCount: 1,
          label: date.toLocaleDateString("en-US", { month: "short" }),
        };
      } else if (currentSpan) {
        // Continue current span
        currentSpan.weekCount++;
      }
    });

    // Don't forget the last span
    if (currentSpan) {
      monthSpans.push(currentSpan);
    }

    // Remove the first month span (partial month at the start)
    const visibleMonthSpans = monthSpans.slice(1);

    return (
      <div className="space-y-4">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold">Activity</h2>
        </div>

        <div className="px-4 py-3 rounded-lg bg-black/5 dark:bg-white/5">
          <CommitGraphScrollContainer>
            <div className="inline-block min-w-full">
              <div className="flex gap-0.75 mb-2 h-5">
                {monthSpans[0] && (
                  <div
                    style={{
                      width: `${monthSpans[0].weekCount * 10 + (monthSpans[0].weekCount - 1) * 3}px`,
                    }}
                  />
                )}

                {/* Month labels */}
                {visibleMonthSpans.map((span, index) => (
                  <div
                    key={index}
                    className="text-xs text-secondary"
                    style={{
                      width: `${span.weekCount * 10 + (span.weekCount - 1) * 3}px`,
                    }}
                  >
                    {span.label}
                  </div>
                ))}
              </div>

              {/* Contribution grid */}
              <div className="flex gap-0.75">
                {recentWeeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="flex flex-col gap-0.75 shrink-0"
                  >
                    {week.contributionDays.map((day, dayIndex) => (
                      <CommitCell key={`${weekIndex}-${dayIndex}`} day={day} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CommitGraphScrollContainer>

          <div className="flex justify-between text-xs text-secondary mt-3">
            <div>
              <p className="inline-flex gap-1 items-center text-xs">
                <CircleAlert size={12} />
                {data.totalContributions} contributions in the last year
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span>Less</span>

              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-green-200 dark:bg-green-900" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-green-400 dark:bg-green-700" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-green-500 dark:bg-green-600" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-green-600 dark:bg-green-500" />
              </div>

              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Activity</h2>
        <div className="text-red-500 text-sm">
          Failed to load contribution graph. Please try again later.
        </div>
      </div>
    );
  }
}

export async function GithubCommitGraph() {
  return (
    <Suspense fallback={<CommitGraphSkeleton />}>
      <CommitGraphContent />
    </Suspense>
  );
}
