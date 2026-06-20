import { projectData } from "@/components/data";
import { Badge } from "@/components/ui/badge";
import { DetailsLinkBtns, ViewAllProjectsButton } from "@/components/ui/projects/details-link-btns";
import { ProjectItem } from "@/components/ui/projects/project-item";
import { RouterBackBtn } from "@/components/ui/projects/router-back-btn";
import { Timeline } from "@/components/ui/projects/timeline";
import { ImageCarousel } from "@/components/ui/projects/image-carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = projectData.find((p) => p.slug === slug);

  const hasWhyIBuiltThis = project?.details.whyIBuilt;
  const hasFuturePlans = project?.details.futurePlans;
  const hasNotes = project?.details.note;

  const website = project?.website;
  const github = project?.github;

  if (!project) {
    notFound();
  }

  return (
    <ProjectItem>
      <RouterBackBtn />

      <div className="w-full aspect-2/1 relative overflow-hidden rounded-xl mt-6">
        <Image
          src={project.image}
          alt={project.alt}
          height={700}
          width={700}
          priority
          loading="eager"
        />
      </div>

      <div className="flex justify-start mt-4">
        <Badge variant={`${project.status === "Live" ? "default" : "outline"}`}>
          {project.status === "Live" ? "Completed" : project.status === "Building" ? "In Development" : project.status === "Developed" ? "Developed" : "Not Specified"}
        </Badge>
      </div>

      <div className="space-y-3">
        <h1 className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="tracking-wide text-black/70 dark:text-white/70">
          {project.details.description} {" "}
        </p>

        <div className="w-full mt-4">
          <Timeline details={project.details} status={project.status} />
        </div>

        <div className="flex gap-2 mt-4">
          <DetailsLinkBtns website={website!} github={github!} />
        </div>

        <Separator className="my-6" />

        {hasNotes && (
          <blockquote className="flex items-center border border-orange-500/50 bg-orange-500/10 rounded-xl p-4 mb-4">
            <p className="text-sm tracking-wide leading-5.25">{project.details.note}</p>
          </blockquote>
        )}

        <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
          {project.title}: {" "}
          <span className="tracking-normal">{project.details.tag}</span>
        </h2>

        <div className="mt-6 sm:mt-10">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold">
            Overview
          </h2>

          <p className="text-secondary tracking-wide">{project.details.overview}</p>
        </div>

        {project.details.images && project.details.images.length > 0 && (
          <div className="mt-6 sm:mt-10 flex flex-col items-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold w-full text-left">
              Image Gallery
            </h2>

            <ImageCarousel images={project.details.images} />
          </div>
        )}

        <div className="mt-6 sm:mt-10">
          <h2 className="mb-6 text-xl sm:text-2xl font-semibold">
            What Users Can Do
          </h2>

          <ul className="space-y-4 ml-4 sm:ml-6">
            {project.details.feature?.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {item.title}
                  </span>
                  {" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {hasWhyIBuiltThis && (
          <div className="mt-6 sm:mt-10 space-y-4">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold">
              Why I Built This
            </h2>

            <p className="text-secondary mb-6">{project.details.whyIBuiltTitle}</p>

            <ul className="space-y-4 ml-4 sm:ml-6">
              {project.details.whyIBuilt?.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                  <p className="text-secondary">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 sm:mt-10 space-y-4">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold">
            Tech Stack
          </h2>

          <ul className="space-y-4 ml-4 sm:ml-6">
            {project.technologies?.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                <p className="text-secondary">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {hasFuturePlans && (
          <div className="mt-6 sm:mt-10 space-y-4">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold">
              Future Plans
            </h2>

            <ul className="space-y-4 ml-4 sm:ml-6">
              {project.details.futurePlans?.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/70 shrink-0" />

                  <p className="text-secondary">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Separator className="mt-10 mb-6" />

        <div className="flex justify-center">
          <ViewAllProjectsButton />
        </div>
      </div>

    </ProjectItem>
  );
}
