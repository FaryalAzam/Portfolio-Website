import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Certifications", to: "certifications" },
];

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition- duration-75 ease-out ease-out ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between px-4 sm:px-6 py-4 rounded-full border transition- duration-75 ease-out ease-out ${
          scrolled 
            ? "bg-black/60 backdrop-blur-md  border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" 
            : "bg-transparent border-transparent"
        }`}>
          
          <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              Faryal<span className="text-cyan">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="text-cyan font-medium"
                className="text-sm text-lightGrey hover:text-white transition-colors cursor-pointer relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan transition- duration-75 ease-out ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="contact" smooth={true} offset={-100} className="cursor-pointer">
              <button className="relative px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden group">
                <span className="relative z-10 group-hover:text-white transition--colors duration-75 ease-out ease-out">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-orange scale-x-0 group-hover:scale-x-100 origin-left transition--transform duration-75 ease-out ease-out z-0"></div>
              </button>
            </Link>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, y: 0-20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0-20 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full px-4 sm:px-6 pt-2 pb-6 lg:hidden"
          >
            <div className="bg-black/90  border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-lightGrey hover:text-white hover:pl-2 transition- duration-75 ease-out ease-out cursor-pointer border-b border-white/5 pb-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <button className="w-full py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gradient-to-r hover:from-cyan hover:to-orange hover:text-white transition- duration-75 ease-out ease-out">
                  Let's Talk
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavMain;
