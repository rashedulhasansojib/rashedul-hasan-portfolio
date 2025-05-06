import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { name: "React & Next.js", color: "from-blue-400 to-blue-600", level: "Expert" },
    { name: "Node.js & Express", color: "from-green-400 to-green-600", level: "Advanced" },
    { name: "MongoDB & PostgreSQL", color: "from-cyan-400 to-blue-500", level: "Advanced" },
    { name: "RESTful API Design", color: "from-yellow-400 to-orange-600", level: "Expert" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-600", level: "Advanced" },
    { name: "TailwindCSS", color: "from-cyan-500 to-blue-600", level: "Expert" },
    { name: "Git & CI/CD", color: "from-indigo-400 to-indigo-600", level: "Advanced" },
    { name: "UI/UX Design", color: "from-pink-400 to-purple-600", level: "Intermediate" },
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
          A glimpse into who I am and what I do
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
              My Approach
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a developer passionate about crafting digital experiences that blend thoughtful design with robust engineering. My work lies at the intersection of aesthetics and functionality, creating interfaces that are both beautiful and meticulously built for performance.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Specializing in the MERN stack, I build scalable applications with clean architecture and responsive design. I prioritize accessibility and user experience in everything I create, ensuring that my projects are inclusive and intuitive for all users.
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
              <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center border border-gray-800/50 h-full">
                <p className="text-gray-200 text-center font-medium">{skill.name}</p>
                <span className={`text-xs font-medium mt-1 px-2 py-0.5 rounded-full ${skill.color === 'from-blue-400 to-blue-600' ? 'bg-blue-500/20 text-blue-300' :
                  skill.color === 'from-green-400 to-green-600' ? 'bg-green-500/20 text-green-300' :
                    skill.color === 'from-yellow-400 to-orange-600' ? 'bg-orange-500/20 text-orange-300' :
                      skill.color === 'from-pink-400 to-purple-600' ? 'bg-pink-500/20 text-pink-300' :
                        skill.color === 'from-cyan-400 to-blue-500' ? 'bg-cyan-500/20 text-cyan-300' :
                          skill.color === 'from-indigo-400 to-indigo-600' ? 'bg-indigo-500/20 text-indigo-300' :
                            skill.color === 'from-blue-500 to-indigo-600' ? 'bg-blue-500/20 text-blue-300' :
                              skill.color === 'from-cyan-500 to-blue-600' ? 'bg-cyan-500/20 text-cyan-300' :
                                'bg-gray-500/20 text-gray-300'}`}
                >
                  {skill.level}
                </span>

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
