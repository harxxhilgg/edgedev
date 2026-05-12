import { Button } from "@/components/ui/button";
import { ThemeToggleClient } from "./theme-toggle-client";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../separator";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between h-18 sm:h-20 px-4 py-3 sm:py-4 sm:px-2 select-none transition-all">
      <Link href="/" className="active:scale-95 transition-all">
        <Image
          src="/profile-icon-y.png"
          alt="Profile Icon"
          height={46}
          width={46}
          className="rounded-lg w-11.5 h-11.5 sm:w-11.5 sm:h-11.5 border border-secondary"
          loading="eager"
        />
      </Link>

      <div className="flex items-center">
        <div className="mr-1 -space-x-1">
          <Button variant="link" className="cursor-pointer text-[15px]" asChild>
            <Link href="/work-experience">Work</Link>
          </Button>

          <Button variant="link" className="cursor-pointer text-[15px]" asChild>
            <Link href="/projects">Projects</Link>
          </Button>

          <Button variant="link" className="cursor-pointer text-[15px]" asChild>
            <Link href="/resume">Resume</Link>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-5" />

        <div className="flex items-center ml-2">
          <ThemeToggleClient />
        </div>
      </div>
    </div>
  );
}
