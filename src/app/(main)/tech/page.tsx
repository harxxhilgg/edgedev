"use client";

import { backendTechStack, dbORMTechStack, designContentTechStack, developmentEnvironemnt, devOpsTechStack, frontendTechStack, languagesTechStack, mobileTechStack, testingTechStack } from "@/components/data";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="w-full py-6 md:px-3.5 px-6 transition-all"
    >
      <section aria-labelledby="detailed-technologies">
        <h1 id="detailed-technologies" className="my-4 sm:my-10 text-center gap-x-2 text-4xl font-semibold tracking-tight">
          Technologies & Skills
        </h1>
      </section>

      <Separator orientation="horizontal" className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section aria-labelledby="languages">
          <h2 id="languages" className="font-semibold text-lg leading-loose">Programming Languages</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {languagesTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="frontend">
          <h2 id="frontend" className="font-semibold text-lg leading-loose">Frontend Frameworks & Libraries</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {frontendTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="mobile">
          <h2 id="mobile" className="font-semibold text-lg leading-loose">Mobile Development</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {mobileTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="backend">
          <h2 id="backend" className="font-semibold text-lg leading-loose">Backend Development</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {backendTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="databases">
          <h2 id="databases" className="font-semibold text-lg leading-loose">Databases & ORM</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {dbORMTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="testing">
          <h2 id="testing" className="font-semibold text-lg leading-loose">Testing & API Tools</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {testingTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="devops">
          <h2 id="devops" className="font-semibold text-lg leading-loose">DevOps & Cloud</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {devOpsTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="versioncontrol">
          <h2 id="versioncontrol" className="font-semibold text-lg leading-loose">Version Control & Collaboration</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {designContentTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="design">
          <h2 id="design" className="font-semibold text-lg leading-loose">Design & Content</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {designContentTechStack.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="devenvironment">
          <h2 id="devenvironment" className="font-semibold text-lg leading-loose">Development Environment</h2>

          <ul className="space-y-2 mt-2 ml-4 sm:ml-6">
            {developmentEnvironemnt.map((tech) => (
              <li
                key={tech}
                className="flex gap-4"
              >
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="text-primary text-sm">
                    {tech}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
