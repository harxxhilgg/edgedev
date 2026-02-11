"use client";

import PdfViewerClient from "@/components/ui/resume/pdf-viewer-client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 px-4 sm:px-0 transition-all"
    >
      <h1 className="mt-2 text-center text-3xl font-semibold tracking-tight">
        Resume
      </h1>

      <Separator orientation="horizontal" className="my-10" />

      <div>
        <PdfViewerClient />
      </div>
    </motion.div>
  );
}
