import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    id: 0,
    name: 'Air Compressor Services',
    description: 'A modern web application for an air compressor services company featuring a dark theme, interactive diagnostic telemetry dashboard, and product showcasing.',
    image: '/air campressor.png',
    link: 'https://air-compressor-web.vercel.app/',
    github: 'https://github.com/FaryalAzam/Air-Compressor-Web',
    category: 'React',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 11,
    name: 'Courier Services Website',
    description: 'A responsive and modern logistics platform for a courier company, offering sleek UI for shipping, tracking, and delivery services.',
    image: '/courier.JPG',
    link: 'https://courier-website-pink.vercel.app/',
    github: 'https://github.com/FaryalAzam/Courier-Website',
    category: 'React',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 1,
    name: 'Nike Ecommerce Website',
    description: 'A modern, responsive e-commerce landing page with engaging UI and seamless user experience, inspired by Nike.',
    image: '/nike.JPG',
    link: 'https://nike-website1.vercel.app/',
    github: '#',
    category: 'React',
    tech: ['Next.js', 'Tailwind CSS', 'Framer']
  },
  {
    id: 2,
    name: 'Code Editor',
    description: 'A functional web-based code editor allowing users to write HTML, CSS, and JavaScript with live preview.',
    image: '/code editor.JPG',
    link: 'https://faryalazam.github.io/Code-Editor/',
    github: 'https://github.com/FaryalAzam/Code-Editor',
    category: 'JavaScript',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    name: 'Resume Builder',
    description: 'An interactive resume builder application that helps users generate and download professional resumes easily.',
    image: '/resume builder.JPG',
    link: 'https://editable-resume-blue.vercel.app/',
    github: '#',
    category: 'Frontend',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    name: 'Bootstrap Website',
    description: 'A responsive corporate website built entirely using Bootstrap to demonstrate grid systems and component usage.',
    image: '/bootstrap.JPG',
    link: 'https://faryalazam.github.io/Bootstrap-Website/',
    github: 'https://github.com/FaryalAzam/Bootstrap-Website',
    category: 'Web Design',
    tech: ['Bootstrap', 'HTML', 'CSS']
  },
  {
    id: 5,
    name: 'Glowing Bulb Effect',
    description: 'A creative micro-interaction project demonstrating advanced CSS and JavaScript event handling for a realistic light effect.',
    image: '/bulb.png',
    link: 'https://faryalazam.github.io/Glowing-Bulb-Effect/',
    github: 'https://github.com/FaryalAzam/Glowing-Bulb-Effect',
    category: 'JavaScript',
    tech: ['CSS3', 'JavaScript']
  }
];

const categories = ['All', 'React', 'JavaScript', 'Web Design', 'Frontend'];

const ProjectMain = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
  };

  return (
    <div id="projects" className="py-32 relative bg-black/40 overflow-hidden">
      
      {/* Premium Liquid Blob Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        <div className="absolute top-0 -left-48 w-[600px] h-[600px] bg-cyan/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] mix-blend-screen blur-[120px] animate-blob opacity-60"></div>
        <div className="absolute top-[30%] -right-48 w-[500px] h-[500px] bg-orange/10 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] mix-blend-screen blur-[120px] animate-blob-reverse animation-delay-2000 opacity-60"></div>
        <div className="absolute -bottom-48 left-[20%] w-[700px] h-[700px] bg-cyan/5 rounded-[50%_50%_60%_40%_/_50%_60%_40%_50%] mix-blend-screen blur-[150px] animate-blob animation-delay-4000 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm font-bold text-orange uppercase tracking-[0.2em] mb-4">
            Portfolio
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-10 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-cyan font-elsie font-black pr-2">Projects</span>
          </motion.h3>

          {/* Animated Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 outline-none"
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilterBg" 
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${activeCategory === cat ? 'text-black font-semibold' : 'text-lightGrey hover:text-white'}`}>
                  {cat}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* 2-Column Minimalist Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                className={`group relative rounded-3xl p-[1px] bg-white/[0.05] hover:bg-gradient-to-br hover:from-cyan hover:via-orange hover:to-cyan transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(21,209,233,0.3)] backdrop-blur-md overflow-hidden ${
                  filteredProjects.length % 2 !== 0 && index === filteredProjects.length - 1
                    ? 'col-span-1 md:col-span-2 w-[85%] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)] mx-auto'
                    : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                <div className="flex flex-col bg-black/80 backdrop-blur-xl rounded-[23px] overflow-hidden h-full relative z-10">
                  {/* Image Container */}
                  <div className="relative w-full aspect-video bg-black/60 overflow-hidden p-2">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 rounded-2xl" 
                    />
                    
                    {/* Hover Overlay with Icons */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-lg"
                        title="View Live Project"
                      >
                        <FiExternalLink size={24} />
                      </a>
                      
                      {project.github !== '#' && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="w-14 h-14 bg-black/80 border border-white/20 text-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-lg"
                          title="View Source Code"
                        >
                          <FiGithub size={24} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">{project.name}</h4>
                    <p className="text-sm text-lightGrey mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">
                        {project.category}
                      </span>
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium border border-white/10 text-lightGrey rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="w-full py-20 text-center text-white/50">
            No projects found in this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectMain;

