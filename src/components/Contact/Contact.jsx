import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden mt-12 py-16 px-6 text-center flex flex-col items-center">
      {/* Heading with Futuristic Glow */}
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-[var(--color-cyan)] neon-glow drop-shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Let's Connect!
      </motion.h2>
      <p className="text-lg md:text-xl mt-4 text-[var(--color-lightCyan)] italic opacity-80">
        “Opportunities don’t happen, you create them.”
      </p>

      {/* Glassmorphic Card */}
      <motion.div 
        className="relative mt-10 w-full max-w-md md:max-w-lg mx-auto bg-[rgba(255,255,255,0.1)] backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-[0px_0px_30px_var(--color-cyan)] border border-[rgba(255,255,255,0.2)] transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        {/* Funky Elements */}
        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-[var(--color-cyan)] w-4 h-4 md:w-6 md:h-6 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-[var(--color-orange)] w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse"></div>
        
        {/* Contact Items */}
        <div className="flex items-center space-x-4 mb-6">
          <FaEnvelope className="text-[var(--color-orange)] text-2xl md:text-3xl animate-spin-slow" />
          <p className="text-[var(--color-lightOrange)] font-semibold text-sm md:text-base">faryalazam212@gmail.com</p>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <FaLinkedin className="text-[var(--color-cyan)] text-2xl md:text-3xl transform hover:scale-125 transition duration-300" />
          <a href="https://www.linkedin.com/in/faryal-azam-a83852305/"
               target="_blank" rel="noopener noreferrer" 
          className="text-[var(--color-lightCyan)] font-semibold text-sm md:text-base hover:underline">LinkedIn Profile</a>
        </div>
        <div className="flex items-center space-x-4">
          <FaGithub className="text-[var(--color-cyan)] text-2xl md:text-3xl transform hover:scale-125 transition duration-300" />
          <a href="https://github.com/FaryalAzam"
               target="_blank" rel="noopener noreferrer" 
          className="text-[var(--color-lightCyan)] font-semibold text-sm md:text-base hover:underline">GitHub Profile</a>
        </div>
      </motion.div>

      {/* Extra Futuristic Glow */}
      <style jsx>{`
        .neon-glow {
          text-shadow: 0px 0px 15px var(--color-cyan);
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wiggle { animation: wiggle 0.5s infinite alternate ease-in-out; }
        .animate-spin-slow { animation: spin 5s linear infinite; }
      `}</style>
    </section>
  );
}