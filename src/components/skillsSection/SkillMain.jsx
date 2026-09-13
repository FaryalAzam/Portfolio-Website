import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,
  FaGitAlt, FaGithub, FaFigma, FaPython
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiCplusplus
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
    ]
  },
  {
    title: "Additional",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    ]
  }
];

const CategoryGrid = ({ category }) => {
  const [hovered, setHovered] = useState(null);
  const cols = 2; // Skills are in a 2-column grid
  const count = category.skills.length;

  const neighbours = useMemo(() => {
    if (hovered === null) return [];
    const out = [];
    if (hovered % cols !== 0) out.push(hovered - 1); // left
    if (hovered % cols !== cols - 1) out.push(hovered + 1); // right
    out.push(hovered - cols); // top
    out.push(hovered + cols); // bottom
    return out.filter((n) => n >= 0 && n < count);
  }, [hovered, cols, count]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {category.skills.map((skill, index) => {
        const isBig = hovered === index;
        const isSmall = !isBig && neighbours.includes(index);

        return (
          <div
            key={index}
            onPointerEnter={() => setHovered(index)}
            onPointerLeave={() => setHovered(null)}
            className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl transition- duration-75 ease-out ease-out cursor-pointer ${
              isBig 
                ? 'bg-black/60 scale-110 -translate-y-2 -translate-x-2 z-20 border border-cyan/50 shadow-[0_0_15px_rgba(21,209,233,0.5)]'
                : isSmall 
                  ? 'bg-black/50 scale-105 -translate-y-1 -translate-x-1 z-10 border border-cyan/30 shadow-[0_0_8px_rgba(21,209,233,0.3)]'
                  : 'bg-black/40 scale-100 z-0 border border-white/5'
            }`}
          >
            <div className={`text-3xl transition--transform duration-75 ease-out ease-out ${isBig ? 'scale-110' : ''}`}>
              {skill.icon}
            </div>
            <span className={`text-xs font-medium transition--colors duration-75 ease-out ease-out ${isBig || isSmall ? 'text-white' : 'text-lightGrey'}`}>
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const SkillMain = () => {
  return (
    <div id="skills" className="py-32 relative overflow-hidden bg-black/40">
      {/* Premium Aurora & Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-black to-orange/10 animate-aurora-bg opacity-40 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] animate-slide-bg [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-cyan/20 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-[120px] animate-blob mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-orange/20 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-[120px] animate-blob-reverse animation-delay-4000 mix-blend-screen opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan uppercase tracking-[0.2em] mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-orange font-elsie font-black pr-2">Arsenal</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ }}
              className="p-8 rounded-3xl bg-white/[0.02]  border border-white/5 hover:border-cyan/30 hover:bg-white/[0.04] transition- duration-75 ease-out ease-out hover:shadow-[0_0_30px_rgba(21,209,233,0.1)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition--opacity duration-75 ease-out ease-out z-0 pointer-events-none"></div>
              <h4 className="text-xl font-semibold mb-6 text-white relative z-10">{category.title}</h4>
              <div className="relative z-10">
                <CategoryGrid category={category} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
