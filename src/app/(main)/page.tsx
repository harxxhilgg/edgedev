import { TooltipProvider } from "@/components/ui/tooltip";
import { GithubCommitGraph } from "@/components/ui/main/github-commit-graph";
import { HomeContent } from "@/components/ui/main/home-content";

export default function Home() {
  return (
    <TooltipProvider>
      <HomeContent>
        <div className="mt-6">
          <GithubCommitGraph />
        </div>
      </HomeContent>
    </TooltipProvider>
  );
}
