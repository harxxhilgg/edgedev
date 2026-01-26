import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggleClient } from "./theme-toggle-client";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function TopNav() {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-between w-full h-16 px-4 md:px-0 pt-4 select-none transition-all">
        <div className="text-sm">
          <Button variant="link" asChild>
            <Link href="/work-experience">Work</Link>
          </Button>

          <Button variant="link" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
        </div>

        <div className="flex items-center">
          <ThemeToggleClient />
        </div>
      </div >
    </TooltipProvider>
  );
};
