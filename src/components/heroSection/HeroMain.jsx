import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import { LuArrowUpRight } from 'react-icons/lu';
import { TypeAnimation } from 'react-type-animation';

import LiveCodingBackground from './LiveCodingBackground';

const CircularBadge = () => {
  return (
    <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 animate-[spin_12s_linear_infinite] z-20">
      <svg viewBox="0 0 100 100" className="w-full h-full text-lightGrey" style={{ letterSpacing: "1.5px" }}>
        <defs>
          <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text fontSize="11" fill="currentColor" fontWeight="600" className="uppercase">
          <textPath href="#circlePath">
            • Frontend Developer • React Specialist
          </textPath>
        </text>
      </svg>
      {/* Center dot/icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange rounded-full shadow-[0_0_15px_#fb9718]" />
    </div>
  );
};

const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(21, 209, 233, 0.15) 0%, rgba(30, 25, 23, 1) 70%)'
        }}
      />
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan/15 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange/15 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl border-[0.5px] border-cyan/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl border-[0.5px] border-orange/5 rounded-full" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

const HeroMain = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Live Coding Development Background */}
      <LiveCodingBackground />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5  mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            <span className="text-sm font-medium text-lightGrey tracking-wide">Available for Work</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight flex flex-col gap-1 md:gap-2">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, }}
            >
              Hi, I'm
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.15, }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-orange to-cyan animate-gradient-x pb-2 drop-shadow-[0_0_15px_rgba(21,209,233,0.3)]"
            >
              <span className="font-elsie font-black">F</span>aryal <span className="font-elsie font-black ml-2 sm:ml-3">A</span>zam
            </motion.span>
            
            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, }}
              className="mt-1 h-[1.2em] flex items-center"
            >
              <TypeAnimation
                sequence={[
                  800, // wait for previous animations to finish
                  'Frontend Developer.',
                  2000,
                  'Web Developer.',
                  2000,
                  'Creative Coder.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
              />
            </motion.div>
          </h1>

          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, }}
            className="max-w-xl text-lg md:text-xl text-lightGrey mb-10 leading-relaxed"
          >
            I build modern, responsive and high-quality web experiences that turn ideas into functional digital products.
          </motion.p>

          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full sm:w-auto"
          >
            <Link to="projects" smooth={true} offset={-100} className="w-full sm:w-auto">
              <button className="relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 transition- duration-75 ease-out ease-out group overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(21,209,233,0.3)] hover:scale-105">
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition--colors duration-75 ease-out ease-out">
                  View My Work
                  <LuArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-75 ease-out" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-orange scale-x-0 group-hover:scale-x-100 origin-left transition--transform duration-75 ease-out ease-out z-0"></div>
              </button>
            </Link>
            <Link to="contact" smooth={true} offset={-100} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/[0.03]  border border-white/20 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(21,209,233,0.2)] hover:text-cyan transition- duration-75 ease-out ease-out">
                Let's Work Together
              </button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/FaryalAzam" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan hover:text-cyan transition- duration-75 ease-out ease-out text-lightGrey hover:-translate-y-1">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/faryal-azam-a83852305/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan hover:text-cyan transition- duration-75 ease-out ease-out text-lightGrey hover:-translate-y-1">
              <FiLinkedin size={20} />
            </a>
            <a href="https://www.upwork.com/freelancers/~01cf64dd2b269b0bad?mp_source=share" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-orange hover:text-orange transition- duration-75 ease-out ease-out text-lightGrey hover:-translate-y-1">
              <SiUpwork size={20} />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Decorative glowing rings */}
          <div className="absolute inset-0 w-full h-full max-w-[500px] max-h-[500px] mx-auto z-0">
            <div className="absolute inset-0 rounded-full border-[1px] border-cyan/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-[1px] border-orange/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 rounded-full border-[1px] border-white/10 border-dashed animate-[spin_20s_linear_infinite]"></div>
          </div>
          
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-cyan/50 shadow-[0_0_50px_rgba(21,209,233,0.3)] bg-gradient-to-b from-cyan/20 to-orange/20 p-2 z-10">
            <img 
              src="/faryal.png" 
              alt="Faryal Azam" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <CircularBadge />

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 sm:right-10 bg-black/60  border border-white/10 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold text-xl">
              1+
            </div>
            <div className="text-sm">
              <p className="text-white font-bold">Years</p>
              <p className="text-lightGrey">Experience</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 sm:left-10 bg-black/60  border border-white/10 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center text-orange font-bold text-xl">
              10+
            </div>
            <div className="text-sm">
              <p className="text-white font-bold">Projects</p>
              <p className="text-lightGrey">Completed</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroMain;
