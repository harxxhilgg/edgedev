"use client";

import { useEffect, useState } from "react";
import { FooterBtn } from "../ui/main/body-btn";
import { getVisitorId } from "@/lib/visitor";
import { trackVisitor } from "@/app/actions";
import { hanken } from "../fonts";

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
    <div className={`${hanken.className} text-secondary gap-1 sm:gap-0 mb-3 sm:mb-2 max-w-xl mx-auto px-4 py-3 rounded-lg`}>
      <div className="flex flex-col justify-between items-center text-sm">
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
