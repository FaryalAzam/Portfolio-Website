import React from 'react';
import { motion } from 'framer-motion';
import { LuTerminal, LuCode } from 'react-icons/lu';
import { FiLayout } from 'react-icons/fi';
import ScrollHighlight from '../ui/ScrollHighlight';

const features = [
  {
    icon: <LuCode className="text-cyan text-2xl" />,
    title: "Modern Technologies",
    desc: "React.js, Next.js, and TypeScript for scalable applications."
  },
  {
    icon: <FiLayout className="text-orange text-2xl" />,
    title: "Responsive UI",
    desc: "Pixel-perfect interfaces that look great on any device."
  },
  {
    icon: <LuTerminal className="text-cyan text-2xl" />,
    title: "Clean Code",
    desc: "Maintainable, component-driven and optimized structure."
  }
];

const AboutMain = () => {
  return (
    <div id="about" className="relative py-32 overflow-hidden bg-black/50">
      {/* Elegant Modern Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[120px] animate-float-reverse" style={{ animationDelay: '2s' }}></div>
        
        {/* Vercel-Style Fading Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
          >
            <h2 className="text-sm font-bold text-cyan uppercase tracking-[0.2em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-cyan font-elsie font-black pr-2">Digital</span> Experiences.
            </h3>
            
            <div className="text-lightGrey text-lg mb-8 leading-relaxed">
              <ScrollHighlight 
                text="I am a passionate Frontend & Web Developer specializing in building exceptional digital experiences. I focus on developing robust, scalable, and visually appealing web applications that solve real-world problems. With expertise in modern frameworks like React.js and Next.js, combined with a strong eye for design, I bridge the gap between aesthetics and functionality. Whether it's a dynamic business website or a complex e-commerce platform, I bring ideas to life through clean code and modern architecture."
                font={{
                  fontFamily: "inherit",
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  fontWeight: 400
                }}
                highlightColor="#ffffff"
                dimColor="rgba(255, 255, 255, 0.3)"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="relative group flex gap-4 p-5 rounded-3xl bg-white/[0.02]  border border-white/5 hover:border-cyan/30 hover:bg-white/[0.04] transition duration-150 overflow-hidden hover:shadow-[0_0_20px_rgba(21,209,233,0.15)] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                  <div className="mt-1 relative z-10 group-hover:scale-110 transition-transform duration-150 drop-shadow-[0_0_8px_rgba(21,209,233,0.3)]">
                    {feature.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-bold mb-1 group-hover:text-cyan transition-colors duration-150">{feature.title}</h4>
                    <p className="text-sm text-lightGrey leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
            className="relative lg:h-[600px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden group flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/10 to-orange/10 opacity-50 group-hover:opacity-100 transition-opacity duration-150"></div>
            
            {/* Abstract 3D/Tech Representation */}
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 border border-cyan/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-orange/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                <img 
                  src="/about me.png" 
                  alt="Faryal Azam" 
                  className="w-64 sm:w-80 md:w-96 lg:w-[400px] h-auto object-contain drop-shadow-[0_0_30px_rgba(21,209,233,0.4)] group-hover:scale-105 transition-transform duration-150 relative z-10"
                />
              </div>

              {/* Floating tags */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 sm:left-10 px-4 py-2 bg-black/80  border border-white/10 rounded-full text-sm text-cyan font-medium"
              >
                React.js
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", }}
                className="absolute bottom-10 right-0 sm:right-10 px-4 py-2 bg-black/80  border border-white/10 rounded-full text-sm text-orange font-medium"
              >
                Next.js
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutMain;
