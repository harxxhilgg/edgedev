"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
  loading: () => (
    <p className="text-sm text-black/60 dark:text-white/60">Loading PDF...</p>
  ),
});

export default function PdfViewerClient() {
  return <PdfViewer />;
}
