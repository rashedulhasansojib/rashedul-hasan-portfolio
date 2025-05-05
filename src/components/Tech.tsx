import {
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoGit,
} from "react-icons/bi";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const technologies = [
    // MERN Stack
    { icon: BiLogoMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-white" },
    { icon: BiLogoReact, name: "React", color: "text-blue-400" },
    { icon: BiLogoNodejs, name: "Node.js", color: "text-green-500" },

    // Styling
    { icon: BiLogoTailwindCss, name: "Tailwind CSS", color: "text-cyan-400" },

    // Core Languages
    { icon: BiLogoTypescript, name: "TypeScript", color: "text-blue-500" },

    // Additional Frameworks & Tools
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200" },
    { icon: BiLogoGit, name: "Git", color: "text-orange-600" },
  ];

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <div className="text-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          Technologies
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-gray-400"
        >
          Here are the technologies I work with
        </motion.p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group relative"
          >
            <tech.icon
              aria-label={tech.name}
              className={`cursor-pointer text-[88px] ${tech.color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
              <span className="whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-sm text-white">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
