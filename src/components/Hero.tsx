import image from "../assets/hero.png";
import { motion, useReducedMotion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="flex items-center justify-center min-h-screen w-full px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-between gap-10 text-white">
        <motion.div
          {...animationProps}
          initial={!shouldReduceMotion ? { opacity: 0, y: -50 } : undefined}
          animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Rashedul Hasan - Web Developer"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:scale-105 hover:-translate-y-5 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          {...animationProps}
          initial={!shouldReduceMotion ? { opacity: 0, y: 50 } : undefined}
          animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-5 text-center max-w-[600px]"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Rashedul Hasan
          </h1>
          <h2 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer
          </h2>
          <p className="md:text-base text-pretty text-sm text-gray-400 mb-6">
            I am a passionate web developer with a knack for creating dynamic
            and responsive web applications. I love to learn new technologies
            and improve my skills. Let's connect and build something amazing
            together!
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              aria-label="Contact me"
            >
              Let's Work Together
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-pink-500 to-blue-500 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2"
              aria-label="Download CV"
            >
              Download CV <HiDownload className="text-xl" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
