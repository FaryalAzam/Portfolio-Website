import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';

const ContactMain = () => {
  return (
    <div id="contact" className="py-32 relative overflow-hidden bg-black/60">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-gradient-to-br from-cyan/5 to-orange/5 rounded-full blur-[100px] animate-float-slow opacity-50"></div>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-cyan/5 to-transparent opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col items-center"
        >
          <h2 className="text-sm font-bold text-cyan uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange font-elsie font-black pr-2">Awesome</span> Together.
          </h3>
          <p className="text-lightGrey text-lg leading-relaxed mb-12 max-w-2xl">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
            <a href="mailto:faryalazam212@gmail.com" className="relative flex items-center gap-4 group bg-white/[0.02] backdrop-blur-md border border-white/5 px-6 py-6 rounded-3xl hover:border-cyan/50 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(21,209,233,0.15)] hover:-translate-y-1 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan group-hover:text-black transition-all duration-300 text-cyan shrink-0 shadow-[0_0_15px_rgba(21,209,233,0.2)]">
                  <FiMail size={24} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm text-lightGrey mb-1 group-hover:text-white transition-colors duration-300">Email</p>
                  <p className="text-white font-medium text-base sm:text-lg truncate group-hover:text-cyan transition-colors duration-300">faryalazam212@gmail.com</p>
                </div>
              </div>
            </a>
            
            <div className="relative flex items-center gap-4 group bg-white/[0.02] backdrop-blur-md border border-white/5 px-6 py-6 rounded-3xl hover:border-orange/50 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,151,24,0.15)] hover:-translate-y-1 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-black transition-all duration-300 text-orange shrink-0 shadow-[0_0_15px_rgba(251,151,24,0.2)]">
                  <FiMapPin size={24} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm text-lightGrey mb-1 group-hover:text-white transition-colors duration-300">Location</p>
                  <p className="text-white font-medium text-base sm:text-lg truncate group-hover:text-orange transition-colors duration-300">Available Worldwide</p>
                </div>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/faryal-azam-a83852305/" target="_blank" rel="noreferrer" className="relative flex items-center gap-4 group bg-white/[0.02] backdrop-blur-md border border-white/5 px-6 py-6 rounded-3xl hover:border-cyan/50 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(21,209,233,0.15)] hover:-translate-y-1 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan group-hover:text-black transition-all duration-300 text-cyan shrink-0 shadow-[0_0_15px_rgba(21,209,233,0.2)]">
                  <FiLinkedin size={24} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm text-lightGrey mb-1 group-hover:text-white transition-colors duration-300">LinkedIn</p>
                  <p className="text-white font-medium text-base sm:text-lg truncate group-hover:text-cyan transition-colors duration-300">Let's Connect</p>
                </div>
              </div>
            </a>

            <a href="https://www.upwork.com/freelancers/~01cf64dd2b269b0bad?mp_source=share" target="_blank" rel="noreferrer" className="relative flex items-center gap-4 group bg-white/[0.02] backdrop-blur-md border border-white/5 px-6 py-6 rounded-3xl hover:border-orange/50 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,151,24,0.15)] hover:-translate-y-1 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange group-hover:text-black transition-all duration-300 text-orange shrink-0 shadow-[0_0_15px_rgba(251,151,24,0.2)]">
                  <SiUpwork size={24} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm text-lightGrey mb-1 group-hover:text-white transition-colors duration-300">Upwork</p>
                  <p className="text-white font-medium text-base sm:text-lg truncate group-hover:text-orange transition-colors duration-300">Hire Me</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMain;
