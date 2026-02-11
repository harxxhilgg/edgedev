import { TechStackBtn } from "./body-btn";

export function TechStack() {
  return (
    <div className="transition-all flex flex-wrap gap-1 p-3 rounded-lg bg-black/5 dark:bg-white/5">
      {/* Languages */}
      <TechStackBtn tech="TypeScript" />
      <TechStackBtn tech="JavaScript" />

      {/* Frontend */}
      <TechStackBtn tech="React" />
      <TechStackBtn tech="Next.js" />
      <TechStackBtn tech="Vite" />
      <TechStackBtn tech="shadcn/ui" />

      {/* Mobile */}
      <TechStackBtn tech="React Native" />
      <TechStackBtn tech="Expo" />
      <TechStackBtn tech="Tailwind CSS" />
      <TechStackBtn tech="Nativewind" />

      {/* Backend */}
      <TechStackBtn tech="Node.js" />
      <TechStackBtn tech="Express.js" />

      {/* Database */}
      <TechStackBtn tech="PostgreSQL" />
      <TechStackBtn tech="MongoDB" />
      <TechStackBtn tech="SQL" />

      {/* Testing */}
      <TechStackBtn tech="React Testing Library" />
      <TechStackBtn tech="Postman" />

      {/* DevOps & Tools */}
      <TechStackBtn tech="Vercel" />
      <TechStackBtn tech="mdx" />
      <TechStackBtn tech="Docker" />
      <TechStackBtn tech="Git" />
      <TechStackBtn tech="GitHub" />
      <TechStackBtn tech="npm" />
      <TechStackBtn tech="Figma" />
      <TechStackBtn tech="Google Play Console" />

      {/* Development Environment */}
      <TechStackBtn tech="VS Code" />
      <TechStackBtn tech="Linux" />
    </div>
  );
}
