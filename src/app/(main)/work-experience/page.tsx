"use client";

import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ExperienceItem } from "@/components/ui/work-experience/experience-item";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="w-full py-6 px-4 transition-all"
      >
        <h1 className="mt-4 sm:mt-10 text-center gap-x-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          Work Experience
        </h1>

        <p className="mt-4 mx-10 sm:mx-0 text-center text-secondary transition-all">
          My work experience across different companies and roles.
        </p>

        <Separator orientation="horizontal" className="my-10" />

        <ExperienceItem />
      </motion.div>
    </TooltipProvider>
  );
}
