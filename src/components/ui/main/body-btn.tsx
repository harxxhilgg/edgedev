"use client";

import Image from "next/image";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FileUser, Mail, Send } from "lucide-react";
import { socials, techData } from "@/components/data";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

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
          className="text-xs border-dashed font-semibold px-2 h-7 rounded-lg text-black dark:text-white bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-900"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Image
            src={item.icon}
            alt={item.tech}
            width={14}
            height={14}
            className={`rounded-xs select-none ${item.tech === "Next.js" ? "dark:invert" : ""} ${item.tech === "Expo" ? "dark:invert" : ""}`}
          />
          {item.tech}
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <TooltipArrow className="fill-primary" />
        <p className="font-semibold">{item.tech}</p>
      </TooltipContent>
    </Tooltip>
  )
};

export function TechStackBtn({ tech }: Props) {
  const item = techData.find((t) => t.tech === tech);

  if (!item) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className="text-xs font-semibold p-0 h-10 w-10 hover:bg-black/5 hover:dark:bg-white/10"
          onClick={() => window.open(item.url, "_blank")}
        >
          <Image
            src={item.icon}
            alt={item.tech}
            width={item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : 28}
            height={item.tech === "Expo" ? 24 : item.tech === "Docker" ? 38 : 28}
            className={`rounded-xs select-none ${item.tech === "Next.js" ? "dark:invert" : ""} ${item.tech === "Expo" ? "dark:invert" : ""} ${item.tech === "Express.js" ? "dark:invert" : ""} ${item.tech === "GitHub" ? "dark:invert" : ""}`}
          />
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <TooltipArrow className="fill-primary" />
        <p className="font-semibold">{item.tech}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export function ResumeShareBtn() {
  return (
    <>
      <Button
        variant="outline"
        className="cursor-pointer"
        asChild
      >
        <Link href="/resume">
          <FileUser size={15} className="rotate-6" />
          Resume / CV
        </Link>
      </Button>

      <Button
        variant="ghost"
        className="cursor-pointer"
        asChild
      >
        <Link href="/contact">
          <Send size={15} />
          Get in Touch
        </Link>
      </Button>
    </>
  )
};

export function SocialBtns() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-black/70 dark:text-white/70 cursor-pointer"
            onClick={() => window.open(socials.github, "_blank")}
          >
            <FiGithub color="currentColor" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <TooltipArrow className="fill-primary" />
          <p className="font-semibold">GitHub</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-black/70 dark:text-white/70 cursor-pointer"
            onClick={() => window.open(socials.linkedin, "_blank")}
          >
            <FaLinkedinIn color="currentColor" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <TooltipArrow className="fill-primary" />
          <p className="font-semibold">LinkedIn</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-black/70 dark:text-white/70 cursor-pointer"
          >
            <a href={`mailto:${socials.email}`} aria-label="Mail">
              <Mail color="currentColor" />
            </a>
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <TooltipArrow className="fill-primary" />
          <p className="font-semibold">Mail</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export function FooterBtn() {
  return (
    <Button
      variant="link"
      size="sm"
      className="font-semibold text-[13px] leading-8 tracking-wide text-black/60 dark:text-white/60 px-0 cursor-pointer"
      onClick={() => window.open("https://github.com/harxxhilgg", "_blank")}
    >
      Harshil
    </Button>
  );
};