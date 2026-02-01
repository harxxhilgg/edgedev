"use client";

import { useEffect, useRef } from "react";

export function CommitGraphScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to the right end when component mounts
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-auto pb-2 scrollbar-custom">
      {children}
    </div>
  );
}
