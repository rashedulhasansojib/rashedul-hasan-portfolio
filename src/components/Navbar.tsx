import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
  BsList,
  BsX,
  BsSun,
  BsMoon
} from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "../constants/socials";
import { useTransition } from "../context/TransitionContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { currentSection, setIsTransitioning } = useTransition();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [currentSection]);

  // Toggle body class when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Close menu when changing sections on mobile
    if (isMenuOpen) {
      const links = document.querySelectorAll('a[href^="#"]');
      const handleLinkClick = () => setIsMenuOpen(false);

      links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
      });

      return () => {
        links.forEach(link => {
          link.removeEventListener('click', handleLinkClick);
        });
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Handle both mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    setIsTransitioning(true);
    setIsMenuOpen(false);

    // Small delay to allow for smoother transitions
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

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
      className={`fixed top-0 z-50 w-full border-b ${isDark ? 'border-gray-800/70 bg-black/80' : 'border-gray-300 bg-white/90'} backdrop-blur-md py-4 md:py-5 px-4 md:px-8 lg:px-16`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#hero"
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('hero')}
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
                    ? isDark ? "text-white" : "text-gray-900"
                    : isDark ? "text-gray-400 hover:text-white" : "text-gray-700 hover:text-gray-900"
                    }`}
                  onClick={() => handleNavClick(item.href.substring(1))}
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

        {/* Desktop Social Icons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30'} transition-colors mr-2`}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <BsSun className="text-sm md:text-base" /> : <BsMoon className="text-sm md:text-base" />}
          </motion.button>

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

        {/* Mobile Menu Buttons (Theme + Menu) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`text-xl ${isDark ? 'text-blue-400' : 'text-blue-600'} p-2`}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <BsSun /> : <BsMoon />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            ref={buttonRef}
            className={`text-2xl ${isDark ? 'text-gray-300' : 'text-gray-800'} p-2`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <BsX /> : <BsList />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className={`fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] ${isDark ? 'bg-black/95' : 'bg-white/95'
              } backdrop-blur-md border-b ${isDark ? 'border-gray-800/70' : 'border-gray-300'} md:hidden z-50 overflow-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="py-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <ul className="flex flex-col items-center gap-6">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                    className="w-full text-center"
                  >
                    <a
                      href={item.href}
                      className={`block w-full py-3 text-lg font-medium ${activeSection === item.href.substring(1)
                        ? isDark ? "text-white" : "text-gray-900"
                        : isDark ? "text-gray-400" : "text-gray-700"
                        }`}
                      onClick={() => handleNavClick(item.href.substring(1))}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Icons - Styled like Contact section */}
              <motion.div
                className="mt-10 flex justify-center gap-4"
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
                    className={`p-3 rounded-lg ${item.bgColor} ${item.textColor} ${item.hoverBg} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.2 }}
                  >
                    <item.icon className="text-lg" />
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
