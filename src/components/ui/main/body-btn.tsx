"use client";

import Image from "next/image";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { socials, techData } from "@/components/data";
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, ReadCvLogoIcon, XLogoIcon } from "@phosphor-icons/react";

type Props = {
  tech: string;
};

export function BodyBtn({ tech }: Props) {
  const item = techData.find((t) => t.tech === tech);

  if (!item) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          className="text-[13px] border-dashed font-semibold px-2 h-6 rounded-lg text-black dark:text-white bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-900 cursor-pointer"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Image
            src={item.icon}
            alt={item.tech}
            width={14}
            height={14}
            style={{ width: '14px', height: '14px', objectFit: 'contain' }}
            className={`rounded-xs select-none ${item.tech === "Next.js" && "dark:invert"} ${item.tech === "Expo" && "dark:invert"} ${item.tech === "Socket.IO" && "dark:invert"} ${item.tech === "shadcn/ui" && "dark:invert"}`}
          />
          {item.tech}
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>{item.tech}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function TechStackBtn({ tech }: Props) {
  const item = techData.find((t) => t.tech === tech);

  if (!item) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className="text-xs font-semibold p-0 h-10 w-10 hover:bg-black/5 hover:dark:bg-white/10 cursor-pointer"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Image
            src={item.icon}
            alt={item.tech}
            width={item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : item.tech === "shadcn/ui" ? 22 : item.tech === "mdx" ? 34 : 28}
            height={
              item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : item.tech === "shadcn/ui" ? 22 : item.tech === "mdx" ? 34 : 28
            }
            style={{
              width: `${item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : item.tech === "shadcn/ui" ? 22 : item.tech === "mdx" ? 34 : 28}px`,
              height: `${item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : item.tech === "shadcn/ui" ? 22 : item.tech === "mdx" ? 34 : 28}px`,
              objectFit: 'contain'
            }}
            className={`rounded-xs select-none ${item.tech === "Next.js" && "dark:invert"} ${item.tech === "Expo" && "dark:invert"} ${item.tech === "Express.js" && "dark:invert"} ${item.tech === "GitHub" && "dark:invert"} ${item.tech === "shadcn/ui" && "dark:invert"} ${item.tech === "mdx" && "dark:invert"} ${item.tech === "Vercel" && "invert dark:invert-0"}`}
          />
        </Button>
      </TooltipTrigger>

      <TooltipContent className="inline-flex gap-1 text-sm font-semibold">
        <p>{item.tech}</p>

        {item.techDescription && (
          <p>({item.techDescription})</p>
        )}
      </TooltipContent>
    </Tooltip>
  );
}

export function ResumeShareBtn() {
  return (
    <>
      <Button variant="outline" className="cursor-pointer rounded-xl" sound asChild>
        <Link href="/resume">
          <ReadCvLogoIcon style={{ height: 19, width: 19 }} weight="duotone" />
          Resume / CV
        </Link>
      </Button>

      <Button variant="ghost" className="cursor-pointer rounded-xl" sound asChild>
        <Link href="/get-in-touch">
          <PaperPlaneTiltIcon style={{ height: 18, width: 18 }} weight="duotone" />
          Get in Touch
        </Link>
      </Button>
    </>
  );
}

export function SocialBtns() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary cursor-pointer hover:bg-transparent"
            onClick={() => window.open(socials.github, "_blank")}
          >
            <GithubLogoIcon style={{ height: 20, width: 20 }} />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-semibold">GitHub</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary cursor-pointer hover:bg-transparent -ml-0.5"
            onClick={() => window.open(socials.linkedin, "_blank")}
          >
            <LinkedinLogoIcon style={{ height: 22, width: 22 }} />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-semibold">LinkedIn</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary cursor-pointer hover:bg-transparent -ml-0.5"
            onClick={() => window.open(socials.twitter, "_blank")}
          >
            <XLogoIcon style={{ height: 22, width: 22 }} />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-semibold">X</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-secondary cursor-pointer hover:bg-transparent"
          >
            <a href={`mailto:${socials.email}`} aria-label="Mail">
              <EnvelopeSimpleIcon style={{ height: 24, width: 24 }} />
            </a>
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p className="font-semibold">Mail</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

export function FooterBtn({ name }: { name: string }) {
  return (
    <Button
      variant="link"
      size="sm"
      className="text-sm leading-8 tracking-wide text-secondary px-0 cursor-pointer hover:text-primary"
      onClick={() => window.open("https://github.com/harxxhilgg", "_blank")}
    >
      {name}
    </Button>
  );
}

export function ProjectsNoteBtn() {
  return (
    <Link href="/get-in-touch">
      <Button
        variant="link"
        size="sm"
        className="text-sm underline text-muted-foreground cursor-pointer h-0 p-0 hover:text-primary"
        sound
      >
        contact page
      </Button>
    </Link>
  );
}

export function ProjectTechStackBtn({ tech }: Props) {
  const item = techData.find((t) => t.tech === tech);

  if (!item) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className="text-xs font-semibold p-0 h-10 w-10 cursor-pointer"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Image
            src={item.icon}
            alt={item.tech}
            width={20}
            height={20}
            style={{ width: '20px', height: '20px', objectFit: 'contain' }}
            className={`rounded-xs select-none ${item.tech === "Next.js" && "dark:invert"} ${item.tech === "Expo" && "dark:invert"} ${item.tech === "Express.js" && "dark:invert"} ${item.tech === "GitHub" && "dark:invert"} ${item.tech === "shadcn/ui" && "dark:invert"} ${item.tech === "mdx" && "dark:invert"} ${item.tech === "Vercel" && "invert&&dark:invert-0"}`}
          />
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>{item.tech}</p>
      </TooltipContent>
    </Tooltip>
  );
};