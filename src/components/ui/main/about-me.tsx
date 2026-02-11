import Image from "next/image";
import { ProjectTechStackBtn } from "./body-btn";
import { aboutMeTech } from "@/components/data";

export function AboutMe() {
  return (
    <>
      <div className="block sm:flex py-4 gap-7 transition-all">
        <div className="sm:shrink-0">
          <Image
            src="/profile-icon-y.png"
            alt="Profile Icon"
            height={250}
            width={250}
            className="rounded-lg sm:rounded-xl h-55 w-55 sm:h-62.5 sm:w-62.5 transition-all border border-black/15 dark:border-white/15 select-none"
          />
        </div>

        <section aria-labelledby="about-me-heading" className="flex flex-col justify-between pt-4 sm:pt-2 pl-1 sm:pl-0 pb-1">
          <div>
            <h2 id="about-me-heading" className="text-2xl font-bold">Harshil Patel</h2>

            <h3 className="text-sm leading-relaxed tracking-wide text-secondary pt-3">
              I&apos;m a Full Stack mobile and web developer, I love building products to solve real-world problems. I&apos;m specialized in building MVP&apos;s.
            </h3>
          </div>

          <div className="space-y-1 pt-4 sm:pt-0">
            <h4 className="text-[15px] text-secondary tracking-wide font-semibold">
              Skills
            </h4>

            <div className="-ml-2">
              {aboutMeTech.map((tech) => (
                <ProjectTechStackBtn key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </section>
      </div >
    </>
  );
};