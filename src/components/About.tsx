import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: "Frontend Development", color: "from-blue-400 to-blue-600" },
    { name: "Backend Development", color: "from-green-400 to-green-600" },
    { name: "Responsive Design", color: "from-orange-400 to-pink-500" },
    { name: "UI/UX Design", color: "from-pink-400 to-purple-600" },
    { name: "Database Management", color: "from-cyan-400 to-blue-500" },
    { name: "API Development", color: "from-yellow-400 to-orange-600" },
    { name: "Version Control", color: "from-indigo-400 to-indigo-600" },
    { name: "Testing & Debugging", color: "from-red-400 to-red-600" },
  ];

  return (
    <div
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 py-20 px-4 md:px-16 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl tracking-tight mb-4"
        >
          About Me
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-lg text-gray-300"
        >
          Get to know me better
        </motion.p>
      </div>

      <div className="flex w-full max-w-6xl flex-col lg:flex-row gap-16 items-center justify-between">
        {/* About Content with enhanced styling */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-6 lg:w-1/2 bg-black/20 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl shadow-xl"
        >
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              Who I Am
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a passionate Full Stack Web Developer with expertise in modern
              web technologies. With a strong foundation in both frontend and
              backend development, I specialize in creating responsive and
              user-friendly web applications that deliver exceptional user
              experiences.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              My journey in web development started with a curiosity for
              creating interactive websites, and has evolved into a professional
              career where I continuously learn and adapt to new technologies. I
              believe in writing clean, maintainable code and following best
              practices to build scalable applications.
            </p>
          </div>

          <motion.a
            href="#projects"
            className="group flex items-center gap-2 w-fit relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 gap-4 lg:w-1/2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-0.5 rounded-xl overflow-hidden group"
            >
              {/* Gradient border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-30`}
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Skill content */}
              <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-4 flex items-center justify-center border border-gray-800/50 h-full">
                <p className="text-gray-200 text-center font-medium">{skill.name}</p>

                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
