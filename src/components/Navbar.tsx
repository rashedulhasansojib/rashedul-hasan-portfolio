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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-700 bg-black/70 px-4 md:px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Rashedul
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#hero"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
        className="text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <BsX /> : <BsList />}
      </button>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`absolute top-full left-0 w-full bg-black/90 transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="py-5">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a
                href="#hero"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          
          {/* Mobile Social Icons */}
          <ul className="mt-4 flex justify-center gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <BsYoutube />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
