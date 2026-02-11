"use client";

import { ProjectsNoteBtn } from "@/components/ui/main/body-btn";
import { Project } from "@/components/ui/projects/projects";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 px-4 sm:px-0 transition-all"
    >
      <h1 className="mt-4 sm:mt-10 text-center gap-x-2 text-3xl sm:text-4xl font-semibold tracking-tight">
        Projects
      </h1>

      <p className="mt-4 mx-10 sm:mx-0 text-center text-secondary transition-all">
        My projects and work across different technologies and domains.
      </p>

      <Separator orientation="horizontal" className="my-10" />

      <Project />

      <p className="flex text-sm text-center text-muted-foreground items-start gap-2 mt-10">
        <span>
          Some projects may take time to work due to API build processes, paused databases, or services waking up.
          If you notice any issues, you can let me know via the{" "}
          <ProjectsNoteBtn />
          {" "}and I’ll look into it.
        </span>
      </p>
    </motion.div>
  );
}
