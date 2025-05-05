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
              href="#home"
              className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl font-semibold"
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
                href="#home"
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
              <motion.a
                href={SOCIAL_LINKS.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#ff0000" }}
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <BsYoutube />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#0077b5" }}
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <BsLinkedin />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#f1502f" }}
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <BsGithub />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1da1f2" }}
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <BsTwitterX />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1877f2" }}
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <BsFacebook />
              </motion.a>
            </div>
          </motion.div>
        </div>

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
