"use client";

import PdfViewerClient from "@/components/ui/resume/pdf-viewer-client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 px-4 sm:px-0 transition-all"
    >
      <section aria-labelledby="resume-heading" className="mb-10 sm:mb-16">
        <h1 id="resume-heading" className="mt-4 sm:mt-10 text-center text-2xl gap-x-2 sm:text-3xl font-semibold tracking-tight">
          Resume
        </h1>
      </section>

      <PdfViewerClient />
    </motion.div>
  );
}
