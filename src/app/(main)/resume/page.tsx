"use client";

import PdfViewerClient from "@/components/ui/resume/pdf-viewer-client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 md:px-3.5 px-6 transition-all"
    >
      <h1 className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-2xl sm:text-[28px] font-semibold tracking-tight">
        Resume
      </h1>

      <div className="h-0.5 my-10 bg-black/10 dark:bg-white/10 rounded-full" />

      <div>
        <PdfViewerClient />
      </div>
    </motion.div>
  );
};