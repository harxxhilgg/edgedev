import { projectData } from "@/components/data";
import { ProjectItem } from "@/components/ui/projects/project-item";
import { RouterBackBtn } from "@/components/ui/projects/router-back-btn";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectItem>
      <RouterBackBtn />

      <div className="w-full aspect-3/2 relative overflow-hidden rounded-xl mt-6">
        <Image
          src={project!.image}
          alt={project!.alt}
          fill
          className="object-cover"
          priority
        />
      </div>


      <h1 className="mt-4 sm:mt-10 text-center gap-x-2 text-3xl sm:text-4xl font-semibold tracking-tight">
        {project?.title}
      </h1>
    </ProjectItem>
  );
}
