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
    { icon: BiLogoMongodb, name: "MongoDB", color: "text-green-500", bgColor: "bg-green-500/10" },
    { icon: SiExpress, name: "Express.js", color: "text-white", bgColor: "bg-white/10" },
    { icon: BiLogoReact, name: "React", color: "text-blue-400", bgColor: "bg-blue-400/10" },
    { icon: BiLogoNodejs, name: "Node.js", color: "text-green-500", bgColor: "bg-green-500/10" },

    // Styling
    { icon: BiLogoTailwindCss, name: "Tailwind CSS", color: "text-cyan-400", bgColor: "bg-cyan-400/10" },

    // Core Languages
    { icon: BiLogoTypescript, name: "TypeScript", color: "text-blue-500", bgColor: "bg-blue-500/10" },

    // Additional Frameworks & Tools
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-200", bgColor: "bg-gray-200/10" },
    { icon: BiLogoGit, name: "Git", color: "text-orange-600", bgColor: "bg-orange-500/10" },
  ];

  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 md:gap-24 py-20 px-4 md:px-8 lg:px-16 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute -top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl tracking-tight mb-4"
        >
          Technologies
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-lg text-gray-300 max-w-[600px] mx-auto"
        >
          These are the technologies I specialize in for creating modern, responsive web applications
        </motion.p>
      </div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Styled container */}
        <div className="bg-black/20 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -12 }}
                className="flex flex-col items-center justify-center group"
              >
                <motion.div
                  className={`relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl p-5 ${tech.bgColor} border border-gray-800/50 shadow-lg`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(113, 69, 227, 0.4)"
                  }}
                >
                  <tech.icon className={`text-3xl md:text-4xl ${tech.color}`} />
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-sm"
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.p
                  className={`mt-3 text-center font-medium ${tech.color}`}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                  {tech.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
