import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between w-full sticky top-0 z-50 h-16 sm:px-4 md:px-0 pt-4 backdrop-blur-xs select-none">
      <div className="flex text-sm">
        <Button variant="link" asChild>
          <Link href="/work-experience">Work</Link>
        </Button>

        <Button variant="link" asChild>
          <Link href="/projects">Projects</Link>
        </Button>
      </div>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </div >
  );
};
