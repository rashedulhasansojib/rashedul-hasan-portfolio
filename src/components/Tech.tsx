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
import { useTheme } from "../context/ThemeContext";

const Tech = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const technologies = [
    // MERN Stack
    {
      icon: BiLogoMongodb, name: "MongoDB",
      darkColor: "text-green-500", darkBg: "bg-green-500/10",
      lightColor: "text-green-700", lightBg: "bg-green-500/20"
    },
    {
      icon: SiExpress, name: "Express.js",
      darkColor: "text-white", darkBg: "bg-white/10",
      lightColor: "text-gray-800", lightBg: "bg-gray-400/20"
    },
    {
      icon: BiLogoReact, name: "React",
      darkColor: "text-blue-400", darkBg: "bg-blue-400/10",
      lightColor: "text-blue-600", lightBg: "bg-blue-400/20"
    },
    {
      icon: BiLogoNodejs, name: "Node.js",
      darkColor: "text-green-500", darkBg: "bg-green-500/10",
      lightColor: "text-green-700", lightBg: "bg-green-500/20"
    },

    // Styling
    {
      icon: BiLogoTailwindCss, name: "Tailwind CSS",
      darkColor: "text-cyan-400", darkBg: "bg-cyan-400/10",
      lightColor: "text-cyan-600", lightBg: "bg-cyan-400/20"
    },

    // Core Languages
    {
      icon: BiLogoTypescript, name: "TypeScript",
      darkColor: "text-blue-500", darkBg: "bg-blue-500/10",
      lightColor: "text-blue-700", lightBg: "bg-blue-500/20"
    },

    // Additional Frameworks & Tools
    {
      icon: SiNextdotjs, name: "Next.js",
      darkColor: "text-gray-200", darkBg: "bg-gray-200/10",
      lightColor: "text-gray-800", lightBg: "bg-gray-400/20"
    },
    {
      icon: BiLogoGit, name: "Git",
      darkColor: "text-orange-600", darkBg: "bg-orange-500/10",
      lightColor: "text-orange-700", lightBg: "bg-orange-500/20"
    },
  ];

  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute -top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-4"
        >
          Technologies
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-2 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-[600px] mx-auto`}
        >
          These are the technologies I specialize in for creating modern, responsive web applications
        </motion.p>
      </div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Styled container */}
        <div className={`${
          isDark 
            ? 'bg-black/20 border-gray-800/50' 
            : 'bg-gradient-to-br from-white/80 to-white/40'
          } ${isDark ? 'backdrop-blur-sm' : 'backdrop-blur-2xl'} ${isDark ? 'border' : 'border-2 border-white/70'} p-5 sm:p-6 md:p-8 rounded-2xl ${isDark ? 'shadow-xl' : 'shadow-[0_20px_50px_-12px_rgba(120,130,255,0.3)]'}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-12">
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
                  className={`relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl p-4 sm:p-5 ${
                    isDark ? tech.darkBg : `${tech.lightBg} bg-gradient-to-br from-white/80 to-white/30`
                  } ${
                    isDark ? 'border border-gray-800/50' : 'border-2 border-white/70'
                  } ${isDark ? '' : 'backdrop-blur-2xl'} ${isDark ? 'shadow-lg' : 'shadow-[0_15px_30px_-8px_rgba(100,130,255,0.25)]'}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(113, 69, 227, 0.4)"
                  }}
                >
                  <tech.icon className={`text-2xl sm:text-3xl md:text-4xl ${isDark ? tech.darkColor : tech.lightColor}`} />
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-sm"
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.p
                  className={`mt-2 md:mt-3 text-center font-medium text-xs sm:text-sm md:text-base ${isDark ? tech.darkColor : tech.lightColor}`}
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
    </>
  );
};

export default Tech;
