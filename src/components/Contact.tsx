import { motion } from "framer-motion";
import { FormEvent, useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
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
        setTimeout(() => setStatus("idle"), 3000);
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
      }, 3000);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact"
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
          Get in Touch
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-lg text-gray-400"
        >
          Let's bring your ideas to life
        </motion.p>
      </div>

      <div className="flex w-full max-w-4xl flex-col md:flex-row gap-16 items-center justify-between">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
                className="w-full rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800/50 p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                className="w-full rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800/50 p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full rounded-lg bg-black/20 backdrop-blur-sm border border-gray-800/50 p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 py-4 px-8 rounded-lg text-white font-medium transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly chat.
            I'm always open to discussing new projects or opportunities to be
            part of your visions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6">
            <motion.a
              href={SOCIAL_LINKS.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ff0000" }}
              className="text-2xl text-white/70"
            >
              <BsYoutube />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077b5" }}
              className="text-2xl text-white/70"
            >
              <BsLinkedin />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f1502f" }}
              className="text-2xl text-white/70"
            >
              <BsGithub />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#1da1f2" }}
              className="text-2xl text-white/70"
            >
              <BsTwitterX />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#1877f2" }}
              className="text-2xl text-white/70"
            >
              <BsFacebook />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
