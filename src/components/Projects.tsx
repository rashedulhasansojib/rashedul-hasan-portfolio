import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

import { motion } from "framer-motion";

interface Project {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}
const projectsData: Project[] = [
  {
    src: img1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration using Stripe.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    demoLink: "https://ecommerce-platform-demo.netlify.app",
    codeLink: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    src: img2,
    title: "Task Management Dashboard",
    description:
      "A real-time task management application with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    demoLink: "https://task-management-demo.vercel.app",
    codeLink: "https://github.com/yourusername/task-manager",
  },
  {
    src: img3,
    title: "AI Image Generator",
    description:
      "An AI-powered image generation app that creates unique artwork using DALL-E API integration.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "AWS S3"],
    demoLink: "https://ai-image-gen-demo.vercel.app",
    codeLink: "https://github.com/yourusername/ai-image-generator",
  },
  {
    src: img4,
    title: "Social Media Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard for social media metrics with real-time data visualization.",
    technologies: ["React", "D3.js", "Redux Toolkit", "Material UI"],
    demoLink: "https://social-analytics-demo.netlify.app",
    codeLink: "https://github.com/yourusername/social-analytics",
  },
  {
    src: img5,
    title: "Weather Forecast App",
    description:
      "A weather forecast application with location-based services and interactive maps.",
    technologies: ["React", "OpenWeather API", "Leaflet", "TailwindCSS"],
    demoLink: "https://weather-forecast-demo.vercel.app",
    codeLink: "https://github.com/yourusername/weather-app",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24 relative p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-gray-800/50"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5 rounded-xl" />

      <motion.div className="relative z-10">
        <motion.img
          src={project.src}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl md:w-[300px] border border-gray-800/50"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="flex flex-col gap-5 text-center md:text-left relative z-10">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-400">{project.description}</p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="rounded-lg bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-gray-700/50 px-4 py-2 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(30, 41, 59, 0.5)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-lg text-white font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Code
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-16 md:gap-24"
    >
      <div className="text-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          Projects
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-gray-400"
        >
          Here are some of my projects{" "}
        </motion.p>
      </div>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
