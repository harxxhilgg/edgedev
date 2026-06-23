"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../skeleton";
import { useState, useEffect } from "react";
import { delay } from "@/lib/utils"; // or wherever your delay function is

const PdfViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
});

export default function PdfViewerClient() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    const showSkeletonForDuration = async () => {
      await delay(1500);
      setShowSkeleton(false);
      setShowPdf(true);
    };

    showSkeletonForDuration();
  }, []);

  if (showSkeleton) {
    return (
      <div className="w-full flex justify-center">
        <div className="rounded-3xl p-1 border border-transparent bg-zinc-950/5 dark:bg-white/5 dark:border-white/20">
          <div className="rounded-2xl overflow-hidden shadow-xs dark:shadow-none">
            <Skeleton
              className="w-[calc(100vw-40px)] max-w-165 aspect-595/842"
            />
          </div>
        </div>
      </div>
    );
  }

  return showPdf ? <PdfViewer /> : null;
}