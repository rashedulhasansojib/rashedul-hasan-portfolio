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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className={`relative p-0.5 rounded-xl overflow-hidden group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: false, margin: "-100px" }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-30"
        animate={{
          background: [
            "linear-gradient(to right, rgb(59, 130, 246), rgb(219, 39, 119))",
            "linear-gradient(to bottom, rgb(59, 130, 246), rgb(219, 39, 119))",
            "linear-gradient(to left, rgb(59, 130, 246), rgb(219, 39, 119))",
            "linear-gradient(to top, rgb(59, 130, 246), rgb(219, 39, 119))",
            "linear-gradient(to right, rgb(59, 130, 246), rgb(219, 39, 119))",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Card content */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 bg-black/60 backdrop-blur-md rounded-xl overflow-hidden">
        {/* Project image */}
        <motion.div
          className="w-full md:w-2/5 flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src={project.src}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* Project info */}
        <div className="flex flex-col gap-5 md:gap-6 w-full md:w-3/5 text-center md:text-left">
          <div className="space-y-3">
            <motion.h3
              className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-gray-700/50 px-4 py-1.5 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  color: "#fff",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 justify-center md:justify-start mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Live Demo</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-black/30 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-24 py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl tracking-tight mb-4"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-lg text-gray-300"
        >
          Explore my portfolio of web applications and projects that showcase my skills and experience
        </motion.p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
