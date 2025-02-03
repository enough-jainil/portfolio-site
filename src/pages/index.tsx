import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaDownload,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

interface Skill {
  name: string;
  description: string;
  icon: JSX.Element;
}

interface Project {
  name: string;
  url?: string;
  summary: string;
  image?: string;
}

interface SocialLink {
  icon: React.ElementType;
  url: string;
  label: string;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="py-8 px-4 md:py-16 md:px-8 text-center relative overflow-hidden bg-primary text-white">
      <div className="container mx-auto">
        <img
          loading="lazy"
          src="img/IMG_2825_Original-2.webp"
          alt="Jainil Prajapati"
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="mt-8">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 text-lg bg-white text-primary rounded-lg hover:bg-gray-100  hover:no-underline transition-all duration-300 "
            href="/Jainil-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
    </header>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="mb-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-primary">Profile</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-card-background p-4 rounded-lg shadow-sm shadow-primary flex items-center transition-all duration-300 ">
          <FaEnvelope className="mr-2 text-primary" />
          <a href="mailto:hello@eknerd.com" className="hover:no-underline">
            hello@eknerd.com
          </a>
        </div>

        <div className="bg-card-background p-4 rounded-lg shadow-sm shadow-primary flex items-center transition-all duration-300 ">
          <FaMapMarkerAlt className="mr-2 text-primary" />
          <span>Anand, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
}

function SummarySection() {
  return (
    <section id="career-objective" className="mb-8">
      <h2 className="text-2xl text-center font-bold mb-4 text-primary">
        Career Objective
      </h2>
      <p className="text-base">
        Aspiring Web Developer with a strong foundation in frontend and backend
        technologies, including React, Next.js, Node.js, and TailwindCSS.
        Experienced in building scalable, user-friendly web applications such as
        MemoryView AI Resources Hub and Traceback Movie Review Platform.
        Passionate about leveraging modern frameworks and tools to create
        efficient, high-performance solutions. Seeking opportunities to
        contribute to innovative projects, enhance my skills, and grow as a
        developer in a collaborative environment.
      </p>
    </section>
  );
}

function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Frontend Frameworks",
      description: "HTML, CSS, React.js, Angular",
      icon: <FaHtml5 />,
    },
    {
      name: "Programming & Scripting",
      description: "JavaScript, Python, C",
      icon: <FaCode />,
    },
    {
      name: "CSS Framework",
      description: "TailwindCSS, Bootstrap",
      icon: <SiTailwindcss />,
    },
    {
      name: "Backend Frameworks",
      description: "Node.js, Remix.js, Next.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Databases",
      description: "MySQL, MongoDB",
      icon: <FaDatabase />,
    },
    {
      name: "UI/UX Design & Tools",
      description: "Adobe Photoshop, Illustrator, XD, Premiere Pro, Canva",
      icon: <FaFigma />,
    },
    {
      name: "DevOps & Virtualization",
      description: "Docker, Proxmox (VE), Nginx Server Configuration",
      icon: <FaDocker />,
    },
    {
      name: "Soft Skills",
      description: "Problem-Solving, Team Collaboration, Communication",
      icon: <FaGlobe />,
    },
  ];

  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card-background p-6 rounded-lg shadow-sm shadow-primary flex flex-col items-center text-center h-full  transition-all duration-300"
          >
            <div className="text-4xl text-primary mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <p className="text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects: Project[] = [
    {
      name: "MemoryView AI Resources Hub",
      url: "https://memoryview.in/",
      summary:
        "Developed a scalable web platform showcasing over 150 curated AI/ML resources across various categories, leveraging modern technologies like React, TypeScript, TailwindCSS, Fuse.js, and Remix.js. Implemented advanced search and filtering with Fuse.js for efficient resource discovery and designed a responsive, user-friendly interface to enhance the overall user experience.",
      image: "img/memoryview.png",
    },
    {
      name: "Traceback - Movie Review Blogging",
      url: "https://traceback.in/",
      summary:
        "Developed a high-performance web application using Astro.js, TypeScript, Redis, TMDB API, and UnoCSS. Integrated TMDB API with Redis caching to enable real-time access to movie metadata, enhancing data retrieval speed and reliability. Implemented server-side rendering (SSR) and static site generation for improved performance and SEO. Designed an intuitive search system and automated OG image generation to boost user engagement and shareability.",
      image: "/img/traceback.png",
    },
    {
      name: "Blog Maker",
      url: "https://blog-maker.vercel.app/",
      summary:
        "Built a feature-rich blogging platform leveraging Next.js, Prisma, and TypeScript for robust and scalable backend operations. Enhanced user experience with TailwindCSS for responsive design and Radix UI for accessible components. Integrated Stripe API for seamless payment processing and UploadThing for efficient media handling, delivering a comprehensive and user-friendly platform.",
      image: "/img/blogmaker.png",
    },
    {
      name: "Bhoogool🌍 A Search Engine",
      url: "https://bhoogool.netlify.app/",
      summary:
        "Developed a search engine using React with routes, context, and hooks, integrating Tailwind CSS for responsive design. Implemented API calls through Rapid API to fetch and display search results dynamically.",
      image: "/img/bhoogool.webp",
    },
    {
      name: "QR Code Generator",
      summary:
        "Engineered a QR Code generation tool using HTML, CSS, and the qrcode.js library, creating a user-friendly interface for generating custom QR codes on demand.",
      url: "https://qr-code-jainil.netlify.app/",
      image: "/img/qr-code-jainil.webp",
    },
    {
      name: "Company Landing Page",
      summary:
        "Designed and developed a responsive company landing page using TailwindCSS and React, leveraging user state management for dynamic content updates.",
      url: "https://jrp30.netlify.app/",
      image: "/img/jrp30.webp",
    },
    {
      name: "Old Portfolio Site",
      summary:
        "Built a personal portfolio site with React, utilizing contexts and hooks for state management, and implemented interactive animations with Framer Motion to enhance user experience.",
      url: "https://inspiring-mousse-514bca.netlify.app/",
      image: "/img/Portfolio2.webp",
    },
    {
      name: "Astha Personal Site",
      summary:
        "This project utilizes React for an interactive UI and Tailwind CSS for responsive design. It is deployed on Netlify, ensuring efficient performance and easy updates.",
      url: "https://spontaneous-khapse-893bc5.netlify.app/",
      image: "/img/personal-site.webp",
    },
  ];

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card-background p-4 rounded-lg shadow-sm shadow-primary flex flex-col h-full  transition-all duration-300"
          >
            {project.image && (
              <img
                loading="lazy"
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-t-lg mb-4 border-2 border-primary object-contain "
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="flex-grow">{project.summary}</p>
            {project.url && (
              <a
                href={project.url}
                className="mt-4 block text-center text-white bg-primary rounded-lg py-2 hover:bg-primary-dark hover:text-white  hover:no-underline hover:scale-105 duration-300 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialSection() {
  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      url: "https://github.com/enough-jainil",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/enough-jainil/",
      label: "LinkedIn",
    },
    { icon: FaTwitter, url: "https://x.com/enough_jainil", label: "Twitter" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/enough.jainil/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/enough.jainil",
      label: "Facebook",
    },
  ];

  return (
    <section id="connect" className="mb-8 py-8 bg-background">
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        Connect with Me
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full hover:bg-primary-dark hover:scale-110 transition-all duration-300 "
            aria-label={link.label}
          >
            <link.icon className="text-xl md:text-2xl" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // Add JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jainil Prajapati",
    url: "https://eknerd.com",
    image: "img/IMG_2825_Original-2.webp",
    sameAs: [
      "https://github.com/enough-jainil",
      "https://www.linkedin.com/in/enough-jainil/",
      "https://x.com/enough_jainil",
      "https://www.instagram.com/enough.jainil/",
    ],
    jobTitle: "Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
  };

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Jainil Prajapati - IT Student and Web Developer specializing in modern web technologies, full-stack development, and cloud solutions."
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <HomepageHeader />
      <main className="max-w-7xl mx-auto p-4">
        <ProfileSection />
        <SummarySection />
        <SkillsSection />
        <ProjectsSection />
        <SocialSection />
      </main>
    </Layout>
  );
}
