/* eslint-disable react-hooks/error-boundaries */
import { getGitHubContributions } from "@/actions/github";
import { Suspense } from "react";
import { CommitGraphScrollContainer } from "./commit-graph-scroll-container";
import { CircleAlert } from "lucide-react";
import { CommitGraphSkeleton } from "@/components/skeleton";
import { CommitCell } from "./commit-cell";

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
      const month = date.getUTCMonth(); // Use UTC to ensure consistency

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
          label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getUTCMonth()],
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
        <section aria-labelledby="activity-heading" className="flex items-center">
          <h2 id="activity-heading" className="text-[22px] font-bold">GitHub Activity</h2>
        </section>

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
      <section aria-labelledby="activity-error-heading" className="space-y-4">
        <h2 id="acitivity-error-heading" className="text-2xl font-semibold">Activity</h2>

        <p className="text-red-500 text-sm">
          Failed to load contribution graph. Please try again later.
        </p>
      </section>
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