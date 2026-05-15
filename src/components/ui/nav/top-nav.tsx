import { Button } from "@/components/ui/button";
import { ThemeToggleClient } from "./theme-toggle-client";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between h-18 px-2 sm:px-0 py-3 sm:py-4s select-none transition-all">
      {/* <Link href="/" className="active:scale-95 transition-all">
        <Image
          src="/profile-icon-y.png"
          alt="Profile Icon"
          height={46}
          width={46}
          className="rounded-lg w-11.5 h-11.5 sm:w-11.5 sm:h-11.5 border border-secondary"
          loading="eager"
        />
      </Link> */}

      <div className="flex items-center -space-x-1">
        <Link href="/">
          <Button variant="link" className="cursor-pointer text-secondary hover:text-primary hover:no-underline">
            Home
          </Button>
        </Link>

        <Link href="/work-experience">
          <Button variant="link" className="cursor-pointer text-secondary hover:text-primary hover:no-underline">
            Work
          </Button>
        </Link>

        <Link href="/projects">
          <Button variant="link" className="cursor-pointer text-secondary hover:text-primary hover:no-underline">
            Projects
          </Button>
        </Link>

        <Link href="/resume">
          <Button variant="link" className="cursor-pointer text-secondary hover:text-primary hover:no-underline">
            Resume
          </Button>
        </Link>
      </div>

      <div className="flex items-center ml-2">
        <ThemeToggleClient />
      </div>
    </div>
  );
}
