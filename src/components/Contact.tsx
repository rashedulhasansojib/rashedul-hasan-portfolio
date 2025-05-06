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

const Contact = () => {
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
          className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-3 md:mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-base md:text-lg text-gray-300"
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
          className="w-full md:w-1/2 bg-black/20 backdrop-blur-sm border border-gray-800/50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6">
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
                  className="w-full rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800/70 p-3 md:p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base"
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
                  className="w-full rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800/70 p-3 md:p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm md:text-base"
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
                  className="w-full rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800/70 p-3 md:p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm md:text-base"
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

            {/* Form status messages with animations */}
            <div className="h-6 mt-2 md:mt-4">
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errorMessage}
                </motion.p>
              )}
            </div>
          </motion.form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 bg-black/20 backdrop-blur-sm border border-gray-800/50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Feel free to reach out for collaborations or just a friendly chat.
              I'm always open to discussing new projects or opportunities to be
              part of your visions. Looking forward to hearing from you!
            </p>
          </div>

          {/* Email and location info */}
          <div className="space-y-4 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-blue-500/10 border border-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:rashedulhasansojib@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all">
                rashedulhasansojib@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-pink-500/10 border border-pink-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-gray-300 text-sm md:text-base">
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base md:text-lg font-medium text-white mb-3 md:mb-4">Find me on</h3>
            <div className="flex flex-wrap gap-4 md:gap-5">
              <motion.a
                href={SOCIAL_LINKS.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2.5 md:p-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
              >
                <BsYoutube className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2.5 md:p-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                <BsLinkedin className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2.5 md:p-3 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
              >
                <BsGithub className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2.5 md:p-3 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
              >
                <BsTwitterX className="text-lg md:text-xl" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-2.5 md:p-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                <BsFacebook className="text-lg md:text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
