"use client";

import { useEffect, useState } from "react";
import { FooterBtn } from "../ui/main/body-btn";
import { getVisitorId } from "@/lib/visitor";
import { trackVisitor } from "@/app/actions";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, LinktreeLogoIcon, MusicNoteIcon, SteamLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { socials } from "../data";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    async function init() {
      const visitorId = getVisitorId();

      if (!visitorId) return;

      const result = await trackVisitor(visitorId);
      setVisitorCount(result);
    };

    init();
  }, []);

  function getOrdinalSuffix(n: number) {
    const lastTwo = n % 100;

    if (lastTwo >= 11 && lastTwo <= 13) return "th";

    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <div className="text-secondary max-w-xl mx-auto py-4 rounded-lg">
      <div className="grid grid-cols-[300px_1fr] gap-20">
        <div>
          <p className="uppercase text-xs font-semibold tracking-wide">Navigate</p>

          <div className="mt-5 text-sm grid grid-cols-[40px_40px_50px_40px] gap-x-8 gap-y-1">
            <Link href="/" className="hover:text-primary duration-200">Home</Link>
            <Link href="/work-experience" className="hover:text-primary duration-200">Work</Link>
            <Link href="/projects" className="hover:text-primary duration-200">Projects</Link>
            <Link href="/resume" className="hover:text-primary duration-200">Resume</Link>
            <Link href="/tech" className="hover:text-primary duration-200">Stack</Link>
            <Link href="/get-in-touch" className="hover:text-primary duration-200">Contact</Link>
          </div>
        </div>

        <div>
          <p className="uppercase text-xs font-semibold tracking-wide">Connect</p>

          <div className="mt-4 grid grid-cols-[45px_45px_45px_45px] gap-y-2">
            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.linkedin, "_blank")}>
              <LinkedinLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.github, "_blank")}>
              <GithubLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.twitter, "_blank")}>
              <XLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.email, "_blank")}>
              <EnvelopeSimpleIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.instagram, "_blank")}>
              <InstagramLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.linktree, "_blank")}>
              <LinktreeLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.steam, "_blank")}>
              <SteamLogoIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer" onClick={() => window.open(socials.ytmusic, "_blank")}>
              <MusicNoteIcon weight="duotone" style={{ height: 18, width: 18 }} />
            </Button>
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="my-6" />

      <div className="flex justify-between items-center text-sm">
        <p className="tracking-wide text-center sm:text-left">
          © 2026 {" "}
          <b>
            <FooterBtn name="Harshil Patel" />
          </b>
          . All rights reserved.
        </p>

        {visitorCount !== null && (
          <p className="leading-6 text-muted-foreground text-center sm:text-right">
            You&apos;re the{" "}
            <span className="text-primary font-medium">
              {new Intl.NumberFormat("en-IN").format(visitorCount)}
              <sup>{getOrdinalSuffix(visitorCount)}</sup>
            </span>{" "}
            visitor
          </p>
        )}
      </div>
    </div>
  );
}
