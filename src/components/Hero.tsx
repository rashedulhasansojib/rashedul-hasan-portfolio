import image from "../assets/hero.png";
import { motion, useReducedMotion } from "framer-motion";
import { HiDownload, HiChevronDown } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const animationProps = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <>
      {/* Content wrapper */}
      <div className="flex flex-col items-center justify-center w-full px-4 md:px-16 lg:px-32 h-full">
        <div
          className={`flex flex-col items-center justify-center gap-6 md:gap-8 ${
            isDark ? "text-white" : "text-gray-900"
          } max-w-5xl mx-auto`}
        >
          <motion.div
            {...animationProps}
            initial={!prefersReducedMotion ? { opacity: 0, y: -50 } : undefined}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 opacity-70 blur-md"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img
              src={image}
              alt="Rashedul Hasan - Web Developer"
              className="w-[200px] relative z-10 cursor-pointer rounded-full shadow-xl shadow-indigo-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600/50 md:w-[240px]"
            />
          </motion.div>

          <motion.div
            {...animationProps}
            initial={!prefersReducedMotion ? { opacity: 0, y: 50 } : undefined}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-3 md:gap-4 text-center max-w-[600px]"
          >
            <h1 className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Rashedul Hasan
            </h1>
            <h2 className="bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl font-medium">
              Full Stack Engineer
            </h2>
            <p
              className={`text-sm md:text-base text-pretty ${
                isDark ? "text-gray-300" : "text-gray-700"
              } leading-relaxed max-w-[500px] mb-1`}
            >
              I build pixel-perfect, accessible web applications with modern
              technologies that deliver exceptional user experiences.
            </p>
            <div className="flex gap-4 flex-wrap justify-center mt-3">
              <motion.a
                href="#contact"
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-2.5 rounded-full text-white text-sm md:text-base font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Work Together</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>
              <motion.a
                href="/rashedul.pdf"
                download
                className={`relative overflow-hidden ${
                  isDark ? "bg-black/30" : "bg-gray-200/70"
                } backdrop-blur-sm border ${
                  isDark ? "border-gray-700" : "border-gray-300"
                } hover:border-blue-500/50 px-5 py-2.5 rounded-full ${
                  isDark ? "text-white" : "text-gray-900"
                } text-sm md:text-base font-medium flex items-center gap-2 group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Download CV</span>
                <HiDownload
                  className="text-lg group-hover:text-blue-500 transition-colors"
                  aria-hidden="true"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator moved up with fixed position */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#about" className="z-30" aria-label="Scroll to About section">
          <motion.div
            className={`${
              isDark ? "bg-black/40" : "bg-gray-200/70"
            } backdrop-blur-md px-3.5 py-1.5 rounded-full border ${
              isDark ? "border-gray-700/50" : "border-gray-300"
            } flex items-center gap-2 hover:border-blue-500/50 transition-colors shadow-lg`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            whileHover={{ y: 3 }}
          >
            <span
              className={`${
                isDark ? "text-white" : "text-gray-900"
              } text-sm font-medium`}
            >
              Scroll
            </span>
            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <HiChevronDown className="text-blue-400 text-xl" />
            </motion.div>
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default Hero;
