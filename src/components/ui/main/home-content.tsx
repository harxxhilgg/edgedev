"use client";

import { motion } from "framer-motion";
import {
  RotatingText,
  RotatingTextContainer,
} from "@/components/animate-ui/primitives/texts/rotating";
import {
  BodyBtn,
  ResumeShareBtn,
  SocialBtns,
} from "@/components/ui/main/body-btn";
import { TechStack } from "@/components/ui/main/tech-stack";
import { ReactNode } from "react";
import { Experience } from "./experience";
import { AboutMe } from "./about-me";

export function HomeContent({ children }: { children?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-1 px-4 sm:py-3.5 sm:px-0 transition-all"
    >
      <section aria-labelledby="intro-heading">
        <h1
          id="intro-heading"
          className="mt-2 mb-7 flex flex-wrap items-center space-x-2 text-[23px] sm:text-2xl font-semibold tracking-normal"
        >
          <span>Hi, I&apos;m Harshil</span>{" "}
          <span className="hidden sm:block">—</span>
          <span className="inline-flex min-w-80">
            <RotatingTextContainer
              text={[
                "A Frontend Web Developer",
                "A Frontend Mobile Developer",
                "Software Developer",
              ]}
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

        <p className="leading-loose sm:leading-[2.3] tracking-wider text-black/70 dark:text-white/70">
          I build interactive mobile apps and web apps using
          <span className="ml-0 sm:ml-2">{<BodyBtn tech="TypeScript" />} ,</span>
          <span> {<BodyBtn tech="Next.js" />} ,</span>
          <span> {<BodyBtn tech="Expo" />} ,</span>
          <span> {<BodyBtn tech="React" />} ,</span>
          <span> {<BodyBtn tech="React Native" />} ,</span>
          <span> {<BodyBtn tech="Tailwind CSS" />} ,</span>
          <span> {<BodyBtn tech="shadcn/ui" />} ,</span>
          <span> {<BodyBtn tech="npm" />} ,</span>
          <span> {<BodyBtn tech="Node.js" />} ,</span>
          <span> {<BodyBtn tech="PostgreSQL" />} . </span>
          With a focus on
          <b className="text-black dark:text-white"> UI </b>
          Design. Enthusiastic about
          <b className="text-black dark:text-white"> Fullstack Development </b>
          with
          <b className="text-black dark:text-white"> Next.js</b>,
          driven by a keen eye for design.
        </p>

        <div className="mt-5 sm:mt-6 space-x-2">
          <ResumeShareBtn />
        </div>

        <div className="inline-flex mt-5 sm:mt-6">
          <SocialBtns />
        </div>
      </section>

      <section
        aria-labelledby="tech-stack-heading"
        className="mt-5 sm:mt-6"
      >
        <h2
          id="tech-stack-heading"
          className="text-xl font-semibold mb-4"
        >
          Stack
        </h2>
        <TechStack />
      </section>

      <section
        aria-labelledby="experience-heading"
        className="mt-5 sm:mt-6"
      >
        <h2
          id="experience-heading"
          className="text-xl mb-4 font-semibold"
        >
          Experience
        </h2>
        <Experience />
      </section>

      <section
        aria-labelledby="about-me-heading"
        className="mt-5 sm:mt-6"
      >
        <p className="text-sm text-secondary tracking-wide">About</p>

        <h2
          id="about-me-heading"
          className="text-xl font-semibold tracking-wide"
        >
          Me
        </h2>
        <AboutMe />
      </section>

      {children}
    </motion.div>
  );
}
