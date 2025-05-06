import { motion } from "framer-motion";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { SOCIAL_LINKS } from "../constants/socials";

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialItems = [
    { name: "YouTube", href: SOCIAL_LINKS.YOUTUBE, icon: BsYoutube, bgColor: "bg-red-500/10", textColor: "text-red-400", hoverBg: "hover:bg-red-500/20" },
    { name: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN, icon: BsLinkedin, bgColor: "bg-blue-500/10", textColor: "text-blue-400", hoverBg: "hover:bg-blue-500/20" },
    { name: "GitHub", href: SOCIAL_LINKS.GITHUB, icon: BsGithub, bgColor: "bg-orange-500/10", textColor: "text-orange-400", hoverBg: "hover:bg-orange-500/20" },
    { name: "Twitter", href: SOCIAL_LINKS.TWITTER, icon: BsTwitterX, bgColor: "bg-sky-500/10", textColor: "text-sky-400", hoverBg: "hover:bg-sky-500/20" },
    { name: "Facebook", href: SOCIAL_LINKS.FACEBOOK, icon: BsFacebook, bgColor: "bg-blue-500/10", textColor: "text-blue-400", hoverBg: "hover:bg-blue-500/20" },
  ];

  return (
    <footer className="w-full border-t border-gray-700 bg-black/70 backdrop-blur-md mt-32">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <a
              href="#hero"
              className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-2xl font-semibold"
            >
              Rashedul
            </a>
            <p className="text-gray-400 text-center md:text-left">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h3 className="text-white text-lg font-medium">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href="#hero"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#tech"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Tech
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <h3 className="text-white text-lg font-medium">Connect</h3>
            <div className="flex gap-4">
              {socialItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`p-2 rounded-lg ${item.bgColor} ${item.textColor} ${item.hoverBg} transition-colors`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="text-base" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credits Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Loosely designed in Figma and coded in Visual Studio Code by yours truly.
            Built with React, TypeScript, and Tailwind CSS, deployed with Vercel.
            All text is set in the Poppins typeface.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rashedul Hasan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
