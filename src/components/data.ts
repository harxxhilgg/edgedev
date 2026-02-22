import React from "react";

export const socials = {
  github: "https://github.com/harxxhilgg/",
  linkedin: "https://www.linkedin.com/in/harxxhilgg/",
  email: "harshilp046@gmail.com",
};

export type TechItem = {
  tech: string;
  techDescription?: string;
  url: string;
  icon: string;
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
    tech: "VS Code",
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
  {
    tech: "Figma",
    url: "https://www.figma.com/",
    icon: "/figma-icon.svg",
  },
  {
    tech: "Firebase",
    url: "https://firebase.com/",
    icon: "/firebase-icon.svg",
  },
  {
    tech: "Google Play Console",
    url: "https://play.google.com/console/",
    icon: "/google-play-console-icon.svg",
  },
  {
    tech: "HTML",
    url: "https://en.wikipedia.org/wiki/HTML",
    icon: "/html-icon.svg",
  },
  {
    tech: "CSS",
    url: "https://en.wikipedia.org/wiki/CSS",
    icon: "/css-icon.svg",
  },
  {
    tech: "React Testing Library",
    url: "https://testing-library.com/docs/react-testing-library/intro/",
    icon: "/testing-library-icon.svg",
  },
  {
    tech: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    icon: "/shadcn-ui-icon.svg",
  },
  {
    tech: "mdx",
    url: "https://mdxjs.com/",
    icon: "/mdx-icon.svg",
  },
  {
    tech: "Vercel",
    url: "https://vercel.com/",
    icon: "/vercel.svg",
  },
  {
    tech: "Prisma",
    url: "https://prisma.io",
    icon: "/prisma-icon.svg",
  },
  {
    tech: "Supabase",
    techDescription: "Auth, Database",
    url: "https://supabase.com",
    icon: "/supabase-icon.svg",
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

export type ExperienceItem = {
  id: string;
  icon: string;
  alt: string;
  company: string;
  role: string;
  website: string;
  linkedin: string;
  startDate: string;
  endDate?: string | null;
  location: string;
  jobType: string;
  children?: React.ReactNode;
  technologies: string[];
  responsibilities: string[];
  // social links (optional)
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
};

export const experienceData: ExperienceItem[] = [
  {
    id: "41b48b2d84d4608e95b63107c9b48f53",
    icon: "/itf-icon.png",
    alt: "IT Futurz Icon",
    company: "IT Futurz",
    role: "React Native Intern",
    website: "https://itfuturz.in/",
    linkedin: "https://www.linkedin.com/company/it-futurz/",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    location: "Surat, India",
    jobType: "On Site",
    technologies: [
      "React Native",
      "Nativewind",
      "Git",
      "GitHub",
      "MongoDB",
      "Figma",
      "Expo",
      "Postman",
      "VS Code",
      "Firebase",
      "Google Play Console",
      "Socket.IO",
    ],
    responsibilities: [
      "Developed and enhanced features for delivery portal mobile application using React Native (Expo).",
      "Implemented real-time communication using sockets and integrated map-based functionality for location tracking.",
      "Worked on UI development, state management and backend API integration to deliver end-to-end features.",
      "Collaborated in developing, debugging and optimizing application with backend team.",
    ],
    instagram: "https://www.instagram.com/itfuturz_digital/",
    facebook: "https://www.facebook.com/ITFuturz/",
  },
  {
    id: "573818ba41b98da3262bbdafae1eb417",
    icon: "/byte-xl-icon.png",
    alt: "ByteXL Icon",
    company: "ByteXL",
    role: "Frontend Intern",
    website: "https://www.bytexl.com/",
    linkedin: "https://www.linkedin.com/company/bytexl/",
    startDate: "May 2024",
    endDate: "Jul 2024",
    location: "Vadodara, India",
    jobType: "On Site",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Tailwind CSS",
      "SQL",
      "Node.js",
    ],
    responsibilities: [
      "Progressed from foundational web standards (HTML5, CSS3, JavaScript) to modern ecosystem tools, mastering React, Tailwind CSS, and Git version control, while grounding problem-solving strategies in core Data Structures and Algorithms.",
      "Applied this technical stack to architect SkillZone' a full-stack solution utilizing Node.js and Express, where you designed scalable backend logic and engineered RESTful APIs to handle data processing and server-side operations.",
      "Integrated these backend services with a responsive React frontend to finalize the application architecture, demonstrating end-to-end development proficiency and documenting these technical achievements within a professional developer portfolio.",
    ],
    facebook: "https://www.facebook.com/byteXL/",
    youtube: "https://www.youtube.com/channel/UCDI3dUKMgAgqrp6Yzvymm1A",
    instagram: "https://www.instagram.com/byteXL/",
  },
];

export type ProjectFeatureItem = {
  title?: string;
  description?: string;
};

export type ProjectWhyIBuiltItem = {
  description: string;
};

export type FuturePlanItem = {
  description: string;
};

export type ProjectDetails = {
  description: string;
  timeline: string;
  role: string;
  team: string;
  tag?: string;
  note?: string;
  overview: string;
  feature?: ProjectFeatureItem[];
  whyIBuiltTitle?: string;
  whyIBuilt?: ProjectWhyIBuiltItem[];
  futurePlans?: FuturePlanItem[];
};

export type ProjectItem = {
  id: string;
  slug: string;
  image: string;
  alt: string;
  status: "Live" | "Building";
  title: string;
  description: string;
  website?: string;
  github?: string;
  technologies: string[];
  details: ProjectDetails;
};

export const projectData: ProjectItem[] = [
  {
    id: "571a43274d71fb5eb11c6e05aae9babb",
    slug: "pickndeliver",
    image: "/projects/pickndeliver-final.png",
    alt: "PicknDeliver Image",
    status: "Live",
    title: "PicknDeliver",
    description:
      "Delivery portal mobile application enhanced with real-time communication using sockets and integrated map-based functionality for location tracking.",
    website:
      "https://play.google.com/store/apps/details?id=app.itfuturz.pickndeliver&pcampaignid=web_share",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Nativewind",
      "MongoDB",
      "Firebase",
      "Google Play Console",
      "Zod",
      "Git",
      "GitHub",
    ],
    details: {
      description:
        "A mobile application for a delivery portal where users can add & track locations using map-based functionality, receive real-time communication.",
      timeline: "2 Months",
      role: "Frontend",
      team: "2",
      tag: "Your Smart Pickup & Delivery Partner",
      overview:
        "Experience a faster, simpler, and more reliable way to send or receive items. With PicknDeliver, you can easily choose your pickup and drop-off locations, select a vehicle that fits your needs, and place your order in just a few taps.",
      feature: [
        {
          title: "Live Location Tracking:",
          description:
            "Track your deliveries in real-time with integrated map functionality.",
        },
        {
          title: "Delivery Management:",
          description:
            "Efficiently manage and monitor all your delivery operations.",
        },
        {
          title: "Smart Notifications:",
          description: "Get instant updates on delivery status and milestones.",
        },
        {
          title: "Optimized Routes:",
          description: "Navigate efficiently with built-in map integration.",
        },
        {
          title: "Fast & Reliable:",
          description:
            "Built with Expo framework which is fast, reliable and future proof which provides smooth performance with less bugs.",
        },
      ],
    },
  },
  {
    id: "5ec402a44db0732b3595c9bf5cefab69",
    slug: "univent",
    image: "/projects/univent-final.png",
    alt: "Univent Image",
    status: "Live",
    title: "Univent",
    description:
      "Engineered a real-time event discovery and registration platform that reduced search time by 20% and streamlined the user's registration flow.",
    website:
      "https://expo.dev/accounts/harshil0/projects/univent/builds/79d3ccc8-3a45-46cf-9460-b3208b19aa5b",
    github: "https://github.com/harxxhilgg/univent",
    technologies: [
      "React-Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL (Supabase)",
      "Vercel",
      "Jest",
    ],
    details: {
      description:
        "An event discovery and registration platform with a responsive user interface with haptics, delivering a seamless and intuitive navigation experience on mobile devices. It includes a user authentication system with push notifications for event reminders.",
      timeline: "4 Months (Approximation)",
      role: "Full Stack",
      team: "Solo (Approximation)",
      tag: "Create & Manage Events (Approximation)",
      overview:
        "A platform for real-time event discovery and registration. Users can find events and have a streamlined registration flow.",
      feature: [
        {
          title: "Real-time Event Discovery & Registration:",
          description:
            "Engineered a real-time event discovery and registration platform that reduced search time by 20% and streamlined the user's registration flow.",
        },
        {
          title: "User Authentication & Push Notifications:",
          description:
            "Implemented a user authentication system with push notifications for event reminders, which led to a slight increase in user engagement.",
        },
        {
          title: "Responsive User Interface:",
          description:
            "Developed a responsive user interface with haptics, delivering a seamless and intuitive navigation experience on mobile devices.",
        },
      ],
      whyIBuiltTitle:
        "My motivation to build Univent was driven by the desire to streamline the event discovery and registration process for users, leveraging modern mobile development practices and real-time communication.",
      whyIBuilt: [
        {
          description:
            "To gain hands-on experience with the full mobile development lifecycle, from frontend UI/UX to backend infrastructure and database management.",
        },
        {
          description:
            "To implement and optimize a real-time system using technologies like Expo and PostgreSQL for immediate data updates.",
        },
        {
          description:
            "To solve the common problem of fragmented event platforms by creating a unified, efficient, and user-friendly solution.",
        },
        {
          description:
            "To deepen my knowledge in full-stack development, utilizing TypeScript for type safety across the entire application.",
        },
        {
          description:
            "To practice developing high-quality, responsive mobile applications that incorporate modern features like haptics and push notifications.",
        },
        {
          description:
            "To integrate robust authentication and state management systems (using tools like Jest for testing) to ensure application reliability and security.",
        },
      ],
      futurePlans: [
        {
          description:
            "Integrate a payment gateway (e.g., Stripe) to support paid event registrations and ticket sales directly within the app.",
        },
        {
          description:
            "Implement an event recommendation engine based on user activity, location, and past registrations to enhance discovery.",
        },
        {
          description:
            "Develop a dedicated organizer dashboard with tools for event analytics, attendee management, and communication features.",
        },
        {
          description:
            "Expand the platform with social features, allowing users to share events and invite friends directly.",
        },
      ],
    },
  },
  {
    id: "6f9444080d0e5c23e485a98e9a3ca3b4",
    slug: "axokaze",
    image: "/projects/axokaze-final.png",
    alt: "AxoKaze Image",
    status: "Live",
    title: "AxoKaze",
    description:
      "Built a web application integrating Pokédex data, F1 race tracking, real-time weather forecasts and user profile management in a unified interface.",
    website: "live",
    github: "code",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Axios",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Vitest",
    ],
    details: {
      description:
        "A web application featuring secure authentication with email/password (OTP verification) and Google OAuth 2.0 integration, featuring JWT-based auto-refresh tokens. It integrates multiple external APIs with optimized data fetching and caching strategies using Zustand for state management.",
      timeline: "3 Months (Approximation)",
      role: "Full Stack",
      team: "Solo (Approximation)",
      tag: "Unified Dashboard (Approximation)",
      overview:
        "A unified dashboard application integrating diverse data sources like Pokédex data, F1 race tracking, and real-time weather forecasts.",
      feature: [
        {
          title: "Unified Data Integration:",
          description:
            "Built a web application integrating Pokédex data, F1 race tracking, real-time weather forecasts and user profile management in a unified interface.",
        },
        {
          title: "Secure Authentication:",
          description:
            "Implemented secure authentication with email/password (OTP verification) and Google OAuth 2.0 integration, featuring JWT-based auto-refresh tokens.",
        },
        {
          title: "Optimized API Integration:",
          description:
            "Integrated multiple external APIs (PokéAPI, Ergast F1 API and WeatherAPI) with optimized data fetching and caching strategies using Zustand for state management.",
        },
      ],
      whyIBuiltTitle:
        "I created AxoKaze to demonstrate my ability to build a complex, data-intensive web application that seamlessly integrates multiple disparate data sources into a cohesive, performant, and secure user experience.",
      whyIBuilt: [
        {
          description:
            "To master modern web development with React, TypeScript, and Vite, focusing on performance and scalability.",
        },
        {
          description:
            "To implement a robust and secure authentication flow, including social login and JWT token management.",
        },
        {
          description:
            "To gain experience in state management with Zustand, particularly for handling cached data from multiple API calls.",
        },
        {
          description:
            "To practice advanced UI/UX design using Tailwind CSS, ensuring a responsive and visually appealing dashboard.",
        },
        {
          description:
            "To learn how to efficiently integrate and harmonize data from diverse external APIs (PokéAPI, F1 API, WeatherAPI).",
        },
        {
          description:
            "To develop strong testing practices using Vitest to ensure the reliability of all integrated features and components.",
        },
      ],
      futurePlans: [
        {
          description:
            "Allow users to customize their dashboard layout and select which data modules (Pokédex, F1, Weather) they want to display.",
        },
        {
          description:
            "Implement a notification system for F1 race updates and personalized weather alerts.",
        },
        {
          description:
            "Expand the Pokédex section with advanced search filters and detailed battle statistics.",
        },
        {
          description:
            "Introduce a paid subscription tier offering premium features like historical data for F1 and extended weather forecasts.",
        },
      ],
    },
  },
];

export type aboutMeTechItem = {
  tech: string[];
};

export const aboutMeTech = [
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Vite",
  "Node.js",
  "PostgreSQL",
];
