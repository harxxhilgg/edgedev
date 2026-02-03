"use client";

import { cardExample } from "@/components/data";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ExperienceItem } from "@/components/ui/work-experience/experience-item";
import { TestCard } from "@/components/ui/work-experience/test-card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <TooltipProvider>

      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="w-full py-6 md:px-3.5 px-6 transition-all"
      >
        <h1 className="mt-10 text-center gap-x-2 text-4xl font-semibold tracking-tight">Work Experience</h1>

        <p className="mt-4 text-center text-muted-foreground">My work experience across different companies and roles.</p>

        <Separator orientation="horizontal" className="my-10" />

        <ExperienceItem>

        </ExperienceItem>
      </motion.div>
    </TooltipProvider>
  );
};