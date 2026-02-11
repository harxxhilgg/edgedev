"use client";

import { projectData } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, GithubLogoIcon, GlobeSimpleIcon } from "@phosphor-icons/react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { TooltipArrow, TooltipProvider } from "@radix-ui/react-tooltip";
import { ProjectTechStackBtn } from "../main/body-btn";

export function Project() {
  const totalProjects = projectData.length;

  return (
    <>
      <div className="flex gap-1.5 mt-2 mb-6">
        <h1 className="text-xl font-semibold">All Projects</h1>

        <p className="text-sm text-secondary pt-1.5">
          ({totalProjects} projects)
        </p>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {projectData.map((item) => {
            const isLive = item!.status === "Live";
            const isBuilding = item!.status === "Building";

            return (
              <div
                key={item.id}
                className="border rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="w-full aspect-3/2 relative overflow-hidden h-44 select-none">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    height={500}
                    width={500}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="w-full p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <div className="inline-flex">
                      {item.website && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-secondary cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(item.website, "_blank")
                              }}
                            >
                              <GlobeSimpleIcon />
                            </Button>
                          </TooltipTrigger>

                          <TooltipContent>
                            <TooltipArrow className="fill-primary" />
                            <p className="font-semibold">Website</p>
                          </TooltipContent>
                        </Tooltip>
                      )}

                      {item.github && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-secondary cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(item.github, "_blank")
                              }}
                            >
                              <GithubLogoIcon />
                            </Button>
                          </TooltipTrigger>

                          <TooltipContent>
                            <TooltipArrow className="fill-primary" />
                            <p className="font-semibold">GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>

                  <p className="text-sm line-clamp-3 text-secondary tracking-wide">{item.description || null}</p>

                  <div>
                    <p className="text-sm font-semibold text-secondary mt-4 mb-1">Technologies</p>

                    <div className="-ml-2 line-clamp-1 text-secondary">
                      {item.technologies.map((tech) => (
                        <ProjectTechStackBtn key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p
                      className={
                        `
                          text-xs rounded-lg py-1 px-2 flex items-center gap-1.5 border-[.5px]
                          ${isLive && "bg-green-500/10"}
                          ${isBuilding && "bg-red-500/10"}
                        `
                      }
                    >
                      <span className={`h-2 w-2 rounded-full blink ${isLive ? "bg-green-500" : isBuilding ? "bg-red-500" : "bg-gray-500"
                        }`} />
                      {isLive ? "All Systems Operational" : isBuilding ? "Building" : null}
                    </p>

                    <Link
                      href={`/projects/${item.slug}`}
                    >
                      <Button
                        variant="link"
                        className="px-0 cursor-pointer text-secondary hover:text-primary"
                      >
                        View Details
                        <ArrowRightIcon size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </TooltipProvider>
    </>
  );
};