"use client";

import { projectData } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, FunnelIcon, GithubLogoIcon, GlobeSimpleIcon } from "@phosphor-icons/react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { ProjectTechStackBtn } from "../main/body-btn";
import { useState } from "react";
import { Skeleton } from "../skeleton";

export function Project() {
  const totalProjects = projectData.length;
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 mt-2 mb-6">
          <h2 className="text-xl font-semibold">All Projects</h2>

          <p className="text-sm text-secondary pt-1.5">
            ({totalProjects} projects)
          </p>
        </div>

        <div className="flex items-center text-muted-foreground gap-1.5">
          <FunnelIcon size={16} />

          <p className="text-sm">Most recent</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        {projectData.map((item) => {
          const isLive = item!.status === "Live";
          const isBuilding = item!.status === "Building";
          const isDeveloped = item!.status === "Developed";

          return (
            <article
              key={item.id}
              className="border rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="w-full aspect-3/2 relative overflow-hidden h-44 select-none">
                {!loadedImages[item.id] && (
                  <Skeleton className="absolute inset-0 rounded-none" />
                )}

                <Image
                  src={item.image}
                  alt={item.alt}
                  className={`object-cover transition-opacity duration-300 ${loadedImages[item.id] ? "opacity-100" : "opacity-0"}`}
                  onLoad={async () => {
                    // await delay(5000);

                    setLoadedImages((prev) => ({
                      ...prev,
                      [item.id]: true,
                    }))
                  }}
                  height={500}
                  width={500}
                  priority
                />
              </div>

              <div className="w-full px-5 pt-5 pb-5 sm:pb-2 space-y-3">
                {/* Title and Icons */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <div className="inline-flex">
                    {item.website && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-secondary cursor-pointer hover:bg-transparent"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(item.website, "_blank")
                            }}
                          >
                            <GlobeSimpleIcon style={{ height: 18, width: 18 }} />
                          </Button>
                        </TooltipTrigger>

                        <TooltipContent>
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
                            className="text-secondary cursor-pointer hover:bg-transparent"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(item.github, "_blank")
                            }}
                          >
                            <GithubLogoIcon style={{ height: 18, width: 18 }} />
                          </Button>
                        </TooltipTrigger>

                        <TooltipContent>
                          <p className="font-semibold">GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm line-clamp-3 text-secondary tracking-wide">{item.description || null}</p>

                {/* Technologies map */}
                <div>
                  <h4 className="text-sm font-medium text-secondary mt-4 mb-1">Technologies</h4>

                  <div className="-ml-2 line-clamp-1 text-secondary">
                    {item.technologies.map((tech) => (
                      <ProjectTechStackBtn key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Web Btn */}
                <div className="flex justify-between items-center mt-4">
                  <p
                    className={
                      ` text-xs rounded-lg py-1 px-2 flex items-center gap-1.5 border-[.5px] tracking-wide
                        ${isLive && "bg-green-500/10"}
                        ${isBuilding && "bg-red-500/10"}
                        ${isDeveloped && "bg-blue-500/10"}
                      `
                    }
                  >
                    <span
                      className={
                        `h-2 w-2 rounded-full blink
                        ${isLive ? "bg-green-500" : isBuilding ? "bg-red-500" : isDeveloped ? "bg-blue-500" : "bg-gray-500"}`
                      }
                    />

                    {isLive ? "Live" : isBuilding ? "Building" : isDeveloped ? "Developed" : null}
                  </p>

                  <Link
                    href={`/projects/${item.slug}`}
                    className="hidden sm:block"
                  >
                    <Button
                      variant="link"
                      className="hover:no-underline px-0 cursor-pointer text-secondary hover:text-primary"
                      sound
                    >
                      View Details
                      <ArrowRightIcon size={20} />
                    </Button>
                  </Link>
                </div>

                {/* Mobile Btn */}
                <Link
                  href={`/projects/${item.slug}`}
                  className="sm:hidden"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full cursor-pointer text-secondary hover:text-primary mt-1"
                    sound
                  >
                    View Details
                    <ArrowRightIcon />
                  </Button>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </>
  );
};