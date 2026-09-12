import React from 'react';
import { motion } from 'framer-motion';

const ExperienceMain = () => {
  return (
    <div id="experience" className="py-32 relative overflow-hidden bg-black/50">
      {/* Premium Radar & Beam Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sweeping Light Beam */}
        <div className="absolute top-0 left-1/2 w-full h-[300px] bg-gradient-to-b from-transparent via-cyan/20 to-transparent -translate-x-1/2 animate-beam-sweep opacity-50 mix-blend-screen"></div>
        {/* Radar Rings */}
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full border-[1px] border-cyan/10 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-[35%] right-[15%] w-[350px] h-[350px] rounded-full border-[1px] border-orange/10 animate-[spin_15s_linear_infinite_reverse]"></div>
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] -translate-y-1/2 animate-blob opacity-40 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] animate-blob-reverse opacity-40 mix-blend-screen"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-sm font-bold text-cyan uppercase tracking-[0.2em] mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange font-elsie font-black pr-2">Timeline</span>
          </motion.h3>
        </div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10"></div>
          
          {/* Timeline Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="relative mb-16 md:w-1/2 md:pr-12 md:text-right"
          >
            <div className="absolute top-6 -left-[41px] md:left-auto md:-right-[5px] w-3 h-3 bg-cyan rounded-full shadow-[0_0_15px_rgba(21,209,233,0.8)]"></div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0px 10px 40px -10px rgba(21,209,233, 0.3)",
                borderColor: "rgba(21,209,233, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10">
                <span className="text-sm font-semibold text-cyan tracking-wider uppercase mb-2 block">Present</span>
                <h4 className="text-2xl font-bold text-white mb-2">Freelance Web Developer</h4>
                <p className="text-lightGrey text-sm leading-relaxed">
                  Designing and developing modern, responsive websites for various clients. Focusing on creating high-performance web applications using React.js, Next.js, and Tailwind CSS. Bridging the gap between UI/UX design and technical implementation.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="relative mb-16 md:w-1/2 md:ml-auto md:pl-12"
          >
            <div className="absolute top-6 -left-[41px] md:-left-[5px] w-3 h-3 bg-orange rounded-full shadow-[0_0_15px_rgba(251,151,24,0.8)]"></div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0px 10px 40px -10px rgba(251,151,24, 0.3)",
                borderColor: "rgba(251,151,24, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10">
                <span className="text-sm font-semibold text-orange tracking-wider uppercase mb-2 block">2024 - 2025</span>
                <h4 className="text-2xl font-bold text-white mb-2">Saylani Mass IT Training</h4>
                <p className="text-lightGrey text-sm leading-relaxed">
                  Completed intensive Web Development training. Mastered frontend fundamentals (HTML, CSS, JavaScript) and advanced modern frameworks. Developed multiple practical projects focusing on real-world problem solving and responsive design.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="relative md:w-1/2 md:pr-12 md:text-right"
          >
            <div className="absolute top-6 -left-[41px] md:left-auto md:-right-[5px] w-3 h-3 bg-white/30 rounded-full"></div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0px 10px 40px -10px rgba(255,255,255, 0.2)",
                borderColor: "rgba(255,255,255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10">
                <span className="text-sm font-semibold text-lightGrey tracking-wider uppercase mb-2 block">2023 - 2024</span>
                <h4 className="text-2xl font-bold text-white mb-2">Self-Taught Developer</h4>
                <p className="text-lightGrey text-sm leading-relaxed">
                  Began the journey into programming and web development. Explored basic algorithms, data structures in Python/C++, and transitioned into web technologies. Built early foundational projects and established a strong technical mindset.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceMain;
