"use client";

import { GithubLogoIcon, GlobeIcon } from "@phosphor-icons/react";
import { Button } from "../button";
import Link from "next/link";

export function DetailsLinkBtns({
  website,
  github
}: {
  website: string;
  github: string
}) {
  return (
    <>
      {website && (
        <Button
          variant="default"
          className="cursor-pointer"
          onClick={() => window.open(website, "_blank")}
        >
          <GlobeIcon />
          Live Demo
        </Button>
      )}

      {github && (
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => window.open(github, "_blank")}
        >
          <GithubLogoIcon />
          Source
        </Button>
      )}
    </>
  );
};

export function ViewAllProjectsButton() {
  return (
    <Link href="/projects">
      <Button
        variant="outline"
        size="default"
        className="rounded-xl cursor-pointer"
      >
        View All Projects
      </Button>
    </Link>
  )
};