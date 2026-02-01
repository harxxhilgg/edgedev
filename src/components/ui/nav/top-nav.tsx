import { Button } from "@/components/ui/button";
import { ThemeToggleClient } from "./theme-toggle-client";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../separator";

export default function TopNav() {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-between w-full h-20 px-4 py-4 select-none transition-all">
        <Link href="/" className="active:scale-95 transition-all">
          <Image
            src="/profile-icon-y.png"
            alt="Profile Icon"
            height={46}
            width={46}
            className="rounded-lg"
          />
        </Link>

        <div className="flex items-center">
          <div className="mr-1">
            <Button variant="link" asChild>
              <Link href="/work-experience">Work</Link>
            </Button>

            <Button variant="link" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
          </div>

          <Separator orientation="vertical" className="h-5" />

          <div className="flex items-center ml-2">
            <ThemeToggleClient />
          </div>
        </div>
      </div >
    </TooltipProvider>
  );
};
