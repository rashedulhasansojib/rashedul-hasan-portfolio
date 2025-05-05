import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Responsive Design",
    "UI/UX Design",
    "Database Management",
    "API Development",
    "Version Control",
    "Testing & Debugging",
  ];

  return (
    <div
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-16"
    >
      <div className="text-center">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-gray-400"
        >
          Get to know me better
        </motion.p>
      </div>

      <div className="flex w-full max-w-6xl flex-col lg:flex-row gap-16 items-center justify-between">
        {/* About Content */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-6 lg:w-1/2"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Who I Am
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate Full Stack Web Developer with expertise in modern
              web technologies. With a strong foundation in both frontend and
              backend development, I specialize in creating responsive and
              user-friendly web applications that deliver exceptional user
              experiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in web development started with a curiosity for
              creating interactive websites, and has evolved into a professional
              career where I continuously learn and adapt to new technologies. I
              believe in writing clean, maintainable code and following best
              practices to build scalable applications.
            </p>
          </div>

          <motion.a
            href="#projects"
            className="group flex items-center gap-2 w-fit text-white"
            whileHover={{ x: 10 }}
          >
            View My Work
            <HiArrowRight className="transition-transform group-hover:translate-x-2" />
          </motion.a>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 lg:w-1/2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(30, 41, 59, 0.5)",
              }}
              className="p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800/50"
            >
              <p className="text-gray-300 text-center">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
