import { motion } from "framer-motion";
import { FormEvent, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
  BsSend,
} from "react-icons/bs";
import { SOCIAL_LINKS } from "../constants/socials";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Using form reference to send the email with template variables
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      if (result.text === "OK") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-2 text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Let's bring your ideas to life. Reach out and let's start a conversation!
        </motion.p>
      </div>

      <div className="flex w-full max-w-6xl flex-col md:flex-row gap-10 md:gap-16 items-stretch justify-between px-4 md:px-6">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`w-full md:w-1/2 ${isDark
              ? 'bg-black/20 border-gray-800/50'
              : 'bg-white/40 border-gray-300'
            } backdrop-blur-sm border p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl`}
        >
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6">
            Send a Message
          </h2>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            <div className="space-y-3 md:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="relative overflow-hidden rounded-lg"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className={`w-full rounded-lg ${isDark
                      ? 'bg-black/40 border-gray-800/70 text-white placeholder-gray-400'
                      : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500'
                    } backdrop-blur-sm border p-3 md:p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base`}
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-pink-500 origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="relative overflow-hidden rounded-lg"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={`w-full rounded-lg ${isDark
                      ? 'bg-black/40 border-gray-800/70 text-white placeholder-gray-400'
                      : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500'
                    } backdrop-blur-sm border p-3 md:p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="relative overflow-hidden rounded-lg"
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className={`w-full rounded-lg ${isDark
                      ? 'bg-black/40 border-gray-800/70 text-white placeholder-gray-400'
                      : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500'
                    } backdrop-blur-sm border p-3 md:p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm md:text-base`}
                />
              </motion.div>

              {/* Hidden fields for email template */}
              <input type="hidden" name="title" value="Contact Form Submission" />
              <input
                type="hidden"
                name="to_email"
                value="rashedulhasansojib@gmail.com"
              />
              <input type="hidden" name="to_name" value="Rashedul Hasan" />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "loading"}
              className="relative w-full bg-gradient-to-r from-blue-500 to-pink-500 py-3 md:py-4 px-6 md:px-8 rounded-lg text-white text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "loading" ? "Sending..." : "Send Message"}
                <BsSend className="text-base md:text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            {/* Success/Error Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 md:p-4 rounded-lg bg-green-500/20 text-green-400 text-sm md:text-base border border-green-500/40"
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 md:p-4 rounded-lg bg-red-500/20 text-red-400 text-sm md:text-base border border-red-500/40"
              >
                {errorMessage || "Something went wrong. Please try again."}
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`w-full md:w-1/2 ${isDark
              ? 'bg-black/20 border-gray-800/50'
              : 'bg-white/40 border-gray-300'
            } backdrop-blur-sm border p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between gap-8`}
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6">
              Let's Connect
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base leading-relaxed mb-6`}>
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to discussing new projects or creative ideas.
            </p>

            <ul className="space-y-3 md:space-y-5">
              <li className="flex items-center gap-3">
                <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-base md:text-lg font-medium`}>
                  Email:
                </span>
                <a
                  href="mailto:rashedulhasansojib@gmail.com"
                  className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300 text-sm md:text-base`}
                >
                  rashedulhasansojib@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-base md:text-lg font-medium`}>
                  Location:
                </span>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base`}>
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`${isDark ? 'text-gray-200' : 'text-gray-800'} text-base md:text-lg font-medium mb-4`}>
              Follow me on social media:
            </h3>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <BsFacebook className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <BsTwitterX className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <BsLinkedin className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <BsGithub className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="YouTube"
              >
                <BsYoutube className="text-lg md:text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
