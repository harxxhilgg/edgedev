"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(520);

  useEffect(() => {
    const updateWidth = () => {
      const containerWidth = wrapperRef.current?.clientWidth ?? 0;
      const w = Math.min(containerWidth - 40, 660);

      setPageWidth(w);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div ref={wrapperRef} className="w-full flex justify-center">
      <div className="rounded-3xl p-1 border border-transparent bg-zinc-950/5 dark:bg-white/5 dark:border-white/20">
        <div className="rounded-2xl overflow-hidden shadow-xs dark:shadow-none">
          <Document
            file="/resume-harshil.pdf"
            loading={
              <p className="p-4 text-sm text-black/60 dark:text-white/60">
              </p>
            }
            error={<p className="p-4 text-sm text-red-500">Failed to load PDF</p>}
          >
            <Page
              pageNumber={1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
