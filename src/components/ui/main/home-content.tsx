"use client";

import { motion } from "framer-motion";
import { RotatingText, RotatingTextContainer } from "@/components/animate-ui/primitives/texts/rotating";
import { BodyBtn, ResumeShareBtn, SocialBtns } from "@/components/ui/main/body-btn";
import { TechStack } from "@/components/ui/main/tech-stack";
import { ReactNode } from "react";
import { Experience } from "./experience";

export function HomeContent({ children }: { children?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 px-6 md:py-3.5 md:px-3.5 transition-all"
    >
      <h1 className="mt-2 mb-7 flex flex-wrap items-center gap-x-2 text-2xl sm:text-[28px] font-semibold tracking-normal">
        <span>Hi, I&apos;m Harshil —</span>

        <span className="inline-flex min-w-65">
          <RotatingTextContainer
            text={["A Frontend Web Developer", "A Frontend Mobile Developer", "Software Developer"]}
            duration={2800}
            inView
            inViewOnce
          >
            <RotatingText
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="font-bold text-secondary"
            />
          </RotatingTextContainer>
        </span>
      </h1>

      <p className="text-md leading-[2.3] tracking-wider text-black/90 dark:text-white/90">
        I build interactive mobile apps and web apps using
        <span className="ml-2">{<BodyBtn tech="TypeScript" />} ,</span>
        <span> {<BodyBtn tech="Next.js" />} ,</span>
        <span> {<BodyBtn tech="Expo" />} ,</span>
        <span> {<BodyBtn tech="React" />} ,</span>
        <span> {<BodyBtn tech="React Native" />} ,</span>
        <span> {<BodyBtn tech="Tailwind CSS" />} ,</span>
        <span> {<BodyBtn tech="npm" />} ,</span>
        <span> {<BodyBtn tech="Node.js" />} ,</span>
        <span> {<BodyBtn tech="PostgreSQL" />} . </span>
        With a focus on
        <b className="text-black dark:text-white"> UI </b>
        Design. Enthusiastic about
        <b className="text-black dark:text-white"> Fullstack Development </b>
        , driven by a keen eye for design.
      </p>

      <div className="mt-6 space-x-2">
        <ResumeShareBtn />
      </div>

      <div className="inline-flex mt-6">
        <SocialBtns />
      </div>

      <div className="mt-6">
        <TechStack />
      </div>

      {children}

      <div className="mt-6">
        <Experience />
      </div>
    </motion.div>
  );
}
