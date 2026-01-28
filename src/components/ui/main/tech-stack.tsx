import { TechStackBtn } from "./body-btn";

export function TechStack() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Stack</h1>

      <div className="transition-all flex flex-wrap gap-1 mt-5 p-3 rounded-lg bg-black/5 dark:bg-white/5">
        {/* Languages */}
        <TechStackBtn tech="TypeScript" />
        <TechStackBtn tech="JavaScript" />

        {/* Frontend */}
        <TechStackBtn tech="React" />
        <TechStackBtn tech="Next.js" />
        <TechStackBtn tech="Vite" />

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
        <TechStackBtn tech="Jest" />

        {/* DevOps & Tools */}
        <TechStackBtn tech="Docker" />
        <TechStackBtn tech="Git" />
        <TechStackBtn tech="GitHub" />
        <TechStackBtn tech="npm" />

        {/* Development Environment */}
        <TechStackBtn tech="VSCode" />
        <TechStackBtn tech="Postman" />
        <TechStackBtn tech="Linux" />
      </div>

    </div>
  )
};