"use client";

import Image from "next/image";
import { Button } from "../button";
import { techData } from "./body-btn-data";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FileUser, Mail, Send } from "lucide-react";
import { socials } from "@/components/data";
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
        <p>{item.tech}</p>
      </TooltipContent>
    </Tooltip>
  )
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