"use client";

import { ContactForm } from "@/components/ui/get-in-touch/contact-form";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="w-full py-6 md:px-3.5 px-6 transition-all"
      >
        <h1 className="my-4 sm:my-10 text-center gap-x-2 text-4xl font-semibold tracking-tight">
          Contact
        </h1>

        <p className="mt-4 text-center text-muted-foreground">
          Get in touch with me. I will get back you as soon as possible.
        </p>

        <Separator orientation="horizontal" className="my-10" />

        <ContactForm />
      </motion.div>
    </TooltipProvider>
  );
}
