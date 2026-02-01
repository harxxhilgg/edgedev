export type TechItem = {
  tech: string;
  url: string;
  icon: string;
};

export const socials = {
  github: "https://github.com/harxxhilgg/",
  linkedin: "https://www.linkedin.com/in/harxxhilgg/",
  email: "harshilp046@gmail.com",
};

export const techData: TechItem[] = [
  {
    tech: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "/typescript-icon.svg",
  },
  {
    tech: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/javascript-icon.svg",
  },
  {
    tech: "React",
    url: "https://react.dev/",
    icon: "/react.svg",
  },
  {
    tech: "Next.js",
    url: "https://nextjs.org/",
    icon: "/nextjs-icon.svg",
  },
  {
    tech: "React Native",
    url: "https://reactnative.dev/",
    icon: "/react.svg",
  },
  {
    tech: "npm",
    url: "https://npmjs.com/",
    icon: "/npm-icon.svg",
  },
  {
    tech: "Node.js",
    url: "https://nodejs.org/",
    icon: "/nodejs-icon.svg",
  },
  {
    tech: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: "/postgresql.svg",
  },
  {
    tech: "Expo",
    url: "https://expo.dev/",
    icon: "/expo-icon.svg",
  },
  {
    tech: "SQL",
    url: "https://www.iso.org/standard/63555.html",
    icon: "/sql-icon.svg",
  },
  {
    tech: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: "/tailwindcss-icon.svg",
  },
  {
    tech: "Nativewind",
    url: "https://www.nativewind.dev/",
    icon: "/nativewind-icon.svg",
  },
  {
    tech: "Express.js",
    url: "https://expressjs.com/",
    icon: "/express-icon.svg",
  },
  {
    tech: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: "/mongodb-icon.svg",
  },
  {
    tech: "Git",
    url: "https://git-scm.com/",
    icon: "/git-icon.svg",
  },
  {
    tech: "GitHub",
    url: "https://github.com/",
    icon: "/github-icon.svg",
  },
  {
    tech: "VSCode",
    url: "https://code.visualstudio.com/",
    icon: "/vscode-icon.svg",
  },
  {
    tech: "Cursor",
    url: "https://cursor.com/",
    icon: "/cursor-icon.svg",
  },
  {
    tech: "Postman",
    url: "https://www.postman.com/",
    icon: "/postman-icon.svg",
  },
  {
    tech: "Ubuntu",
    url: "https://ubuntu.com/",
    icon: "/ubuntu-icon.svg",
  },
  {
    tech: "Linux",
    url: "https://www.linux.org/",
    icon: "/linux-icon.svg",
  },
  {
    tech: "Vite",
    url: "https://vitejs.dev/",
    icon: "/vite-icon.svg",
  },
  {
    tech: "Jest",
    url: "https://jestjs.io/",
    icon: "/jest-icon.svg",
  },
  {
    tech: "Socket.IO",
    url: "https://socket.io/",
    icon: "/socket-io-icon.svg",
  },
  {
    tech: "Docker",
    url: "https://www.docker.com/",
    icon: "/docker-icon.svg",
  },
];

export type homeExperienceItem = {
  id: string;
  icon: string;
  alt: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  location: string;
  jobType: string;
};

export const homeExperienceData: homeExperienceItem[] = [
  {
    id: "41b48b2d84d4608e95b63107c9b48f53",
    icon: "/itf-icon.png",
    alt: "IT Futurz Icon",
    company: "IT Futurz",
    role: "React Native Developer Intern",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    location: "Surat, India",
    jobType: "On Site",
  },
  {
    id: "573818ba41b98da3262bbdafae1eb417",
    icon: "/byte-xl-icon.png",
    alt: "ByteXL Icon",
    company: "ByteXL",
    role: "Frontend Intern",
    startDate: "May 2024",
    endDate: "Jul 2024",
    location: "Vadodara, India",
    jobType: "On Site",
  },
];
