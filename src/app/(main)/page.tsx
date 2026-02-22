import { GithubCommitGraph } from "@/components/ui/main/github-commit-graph";
import { HomeContent } from "@/components/ui/main/home-content";

export default function Home() {
  return (
    <HomeContent>
      <div className="mt-5 sm:mt-6">
        <GithubCommitGraph />
      </div>
    </HomeContent>
  );
}
