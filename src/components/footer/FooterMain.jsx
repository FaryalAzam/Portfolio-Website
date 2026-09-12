import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';

const FooterMain = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 bg-black/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="home" smooth={true} className="cursor-pointer inline-block mb-6">
              <span className="text-3xl font-bold text-white tracking-tight">
                Faryal<span className="text-cyan">.</span>
              </span>
            </Link>
            <p className="text-lightGrey text-sm leading-relaxed max-w-sm mb-8">
              A passionate Frontend Developer specializing in building modern, responsive, and high-quality web applications.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/FaryalAzam" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 flex items-center justify-center text-lightGrey hover:text-cyan hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_15px_rgba(21,209,233,0.3)] hover:-translate-y-1 transition-all duration-300">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/faryal-azam-a83852305/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 flex items-center justify-center text-lightGrey hover:text-cyan hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_15px_rgba(21,209,233,0.3)] hover:-translate-y-1 transition-all duration-300">
                <FiLinkedin size={20} />
              </a>
              <a href="https://www.upwork.com/freelancers/~01cf64dd2b269b0bad?mp_source=share" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 flex items-center justify-center text-lightGrey hover:text-orange hover:border-orange hover:bg-orange/10 hover:shadow-[0_0_15px_rgba(251,151,24,0.3)] hover:-translate-y-1 transition-all duration-300">
                <SiUpwork size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-100}
                    className="text-lightGrey text-sm hover:text-cyan cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-lightGrey text-sm">faryalazam212@gmail.com</li>
              <li className="text-lightGrey text-sm">Available for Freelance</li>
              <li className="text-lightGrey text-sm">Worldwide</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lightGrey text-xs">
            &copy; {new Date().getFullYear()} Faryal Azam. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-lightGrey text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-lightGrey text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
