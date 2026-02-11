"use client";

import { motion } from "framer-motion";

export function ProjectItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 px-4 sm:px-0 transition-all"
    >
      {children}
    </motion.div>
  );
};