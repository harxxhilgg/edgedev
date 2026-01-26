"use client";

import { motion } from "framer-motion";

import { RotatingText, RotatingTextContainer } from "@/components/animate-ui/primitives/texts/rotating";
import { BodyBtn, ResumeShareBtn, SocialBtns } from "@/components/ui/main/body-btn";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        className="w-full py-6 md:px-3.5 px-6 transition-all"
      >
        <h1 className="mt-2 mb-7 flex flex-wrap items-center gap-x-2 text-2xl sm:text-[28px] font-semibold tracking-tight">
          <span>Hi, I&apos;m Harshil —</span>

          <span className="inline-flex min-w-65">
            <RotatingTextContainer
              text={["A Frontend web developer.", "A Frontend mobile developer."]}
              duration={2800}
              inView
              inViewOnce
            >
              <RotatingText
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="font-bold text-black/70 dark:text-white/70"
              />
            </RotatingTextContainer>
          </span>
        </h1>

        <p className="text-md leading-[2.3] tracking-wide text-zinc-800 dark:text-zinc-400">
          I build interactive mobile apps and web apps using
          <span className="ml-2">{<BodyBtn tech="TypeScript" />} ,</span>
          <span> {<BodyBtn tech="Next.js" />} ,</span>
          <span>{<BodyBtn tech="Expo" />} ,</span>
          <span> {<BodyBtn tech="React" />} ,</span>
          <span> {<BodyBtn tech="React Native" />} ,</span>
          <span> {<BodyBtn tech="npm" />} ,</span>
          <span> {<BodyBtn tech="Node.js" />} ,</span>
          <span> {<BodyBtn tech="PostgreSQL" />} . </span>
          With a focus
          on
          <span className="text-black dark:text-white font-semibold"> UI </span>
          Design. Enthusiastic about
          <span className="text-black dark:text-white font-semibold"> Fullstack Development </span>
          , driven by a keen eye
          for design.
        </p>

        <div className="mt-6 space-x-2">
          <ResumeShareBtn />
        </div>

        <div className="inline-flex mt-6">
          <SocialBtns />
        </div>

      </motion.div>
    </TooltipProvider>
  );
}
