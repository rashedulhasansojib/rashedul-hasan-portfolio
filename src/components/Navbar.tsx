import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
  BsList,
  BsX,
} from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "../constants/socials";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const sections = ["hero", "about", "tech", "projects", "contact"];
    const scrollPosition = window.scrollY + 300;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;

      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialItems = [
    { name: "YouTube", href: SOCIAL_LINKS.YOUTUBE, icon: BsYoutube, bgColor: "bg-red-500/10", textColor: "text-red-400", hoverBg: "hover:bg-red-500/20" },
    { name: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN, icon: BsLinkedin, bgColor: "bg-blue-500/10", textColor: "text-blue-400", hoverBg: "hover:bg-blue-500/20" },
    { name: "GitHub", href: SOCIAL_LINKS.GITHUB, icon: BsGithub, bgColor: "bg-orange-500/10", textColor: "text-orange-400", hoverBg: "hover:bg-orange-500/20" },
    { name: "Twitter", href: SOCIAL_LINKS.TWITTER, icon: BsTwitterX, bgColor: "bg-sky-500/10", textColor: "text-sky-400", hoverBg: "hover:bg-sky-500/20" },
    { name: "Facebook", href: SOCIAL_LINKS.FACEBOOK, icon: BsFacebook, bgColor: "bg-blue-500/10", textColor: "text-blue-400", hoverBg: "hover:bg-blue-500/20" },
  ];

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-gray-800/70 bg-black/80 backdrop-blur-md py-4 md:py-5 px-4 md:px-8 lg:px-16"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#hero"
          className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Rashedul
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative px-2 py-1 text-base font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons - Styled like Contact section */}
        <div className="hidden md:flex gap-3">
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
              <item.icon className="text-sm md:text-base" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          ref={buttonRef}
          className="text-2xl text-gray-300 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <BsX /> : <BsList />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800/70 md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="py-5 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <ul className="flex flex-col items-center gap-5">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className={`text-lg font-medium ${activeSection === item.href.substring(1)
                        ? "text-white"
                        : "text-gray-400"
                        }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Icons - Styled like Contact section */}
              <motion.div
                className="mt-6 flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                {socialItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`p-2 rounded-lg ${item.bgColor} ${item.textColor} ${item.hoverBg} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.2 }}
                  >
                    <item.icon className="text-base" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
