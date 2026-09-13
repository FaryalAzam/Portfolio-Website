import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SNIPPETS = [
`import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <section className="relative hero-container">
      <BackgroundEngine active={isReady} />
      <Content />
    </section>
  );
};`,
`export async function fetchProjects() {
  try {
    const response = await fetch("/api/projects");
    const data = await response.json();
    
    return data.filter(project => project.isFeatured)
      .sort((a, b) => b.date - a.date);
  } catch (error) {
    console.error("Data fetch failed", error);
    return [];
  }
}`,
`const ProjectCard = ({ project, index }) => {
  return (
    <motion.article 
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ }}
      className="group relative rounded-2xl bg-white/5"
    >
      <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100" />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <TechStack items={project.technologies} />
    </motion.article>
  );
};`,
`const useMouseParallax = (strength = 10) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength]);

  return { x: mouseX, y: mouseY };
};`
];

const highlightCode = (code) => {
  let highlighted = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Use single quotes for all injected HTML attributes to avoid conflict with double-quoted strings
  
  // Keywords (Cyan)
  highlighted = highlighted.replace(/\b(import|from|export|default|const|let|async|await|return|if|try|catch|function)\b/g, "<span class='text-cyan/80 font-medium'>$1</span>");
  
  // Built-in hooks / objects
  highlighted = highlighted.replace(/\b(useState|useEffect|window|console|fetch|Math)\b/g, "<span class='text-cyan/80 font-medium'>$1</span>");

  // React Components
  highlighted = highlighted.replace(/&lt;([A-Z][a-zA-Z0-9]*)/g, "&lt;<span class='text-cyan/90 font-medium'>$1</span>");
  highlighted = highlighted.replace(/&lt;\/([A-Z][a-zA-Z0-9]*)/g, "&lt;/<span class='text-cyan/90 font-medium'>$1</span>");

  // Strings (Orange) - only match double quotes and backticks to avoid our single-quoted HTML
  highlighted = highlighted.replace(/(".*?"|`.*?`)/g, "<span class='text-orange/80'>$1</span>");
  
  // Comments
  highlighted = highlighted.replace(/(\/\/.*)/g, "<span class='text-white/40 italic'>$1</span>");
  
  return highlighted;
};

const CodeBlock = ({ snippet, className, depth, mouseX, mouseY, cssAnimationClass, reducedMotion }) => {
  // depth affects parallax multiplier and scale/blur
  const parallaxMultiplier = depth === 0 ? 0.3 : depth === 1 ? 0.7 : 1.2;
  const x = useTransform(mouseX, v => v * parallaxMultiplier);
  const y = useTransform(mouseY, v => v * parallaxMultiplier);
  
  const blur = depth === 0 ? 'blur-[4px]' : depth === 1 ? 'blur-[2px]' : 'blur-[1px]';
  const targetOpacity = depth === 0 ? 0.10 : depth === 1 ? 0.20 : 0.35;
  const scale = depth === 0 ? 'scale-110' : depth === 1 ? 'scale-100' : 'scale-90';

  return (
    <motion.div 
      style={reducedMotion ? {} : { x, y }}
      className={`absolute ${className} ${blur} ${scale} ${!reducedMotion ? cssAnimationClass : ''} transform-gpu`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: targetOpacity }}
        transition={{ opacity: { duration: 0.2, ease: "easeOut" } }}
      >
        <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-white/80 whitespace-pre">
          <code dangerouslySetInnerHTML={{ __html: highlightCode(snippet) }} />
        </pre>
      </motion.div>
    </motion.div>
  );
};

export default function LiveCodingBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 1200, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 1200, damping: 40 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 30); // Max parallax pixel shift
      mouseY.set(y * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        // Radial mask: semi-transparent over the text content on the left/center, fully visible on the right
        maskImage: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 25%, black 65%)',
        WebkitMaskImage: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.4) 25%, black 65%)'
      }}
    >
      {/* BACKGROUND LAYER (Depth 0) */}
      <CodeBlock 
        snippet={SNIPPETS[0]} 
        depth={0} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="top-[-5%] left-[20%] md:left-[35%]" 
        cssAnimationClass="animate-float-slow"
      />
      <CodeBlock 
        snippet={SNIPPETS[1]} 
        depth={0} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="bottom-[-5%] right-[2%] md:right-[10%]" 
        cssAnimationClass="animate-float-slow-reverse"
      />

      {/* MIDDLE LAYER (Depth 1) */}
      <CodeBlock 
        snippet={SNIPPETS[2]} 
        depth={1} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="top-[15%] right-[5%] hidden md:block" 
        cssAnimationClass="animate-float-slow"
      />
      <CodeBlock 
        snippet={SNIPPETS[3]} 
        depth={1} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="top-[10%] left-[25%] md:left-[40%] hidden md:block" 
        cssAnimationClass="animate-float-slow-reverse"
      />

      {/* FOREGROUND LAYER (Depth 2) */}
      <CodeBlock 
        snippet={SNIPPETS[0]} 
        depth={2} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="top-[20%] left-[25%] md:left-[35%] hidden xl:block" 
        cssAnimationClass="animate-float-slow"
      />
      <CodeBlock 
        snippet={SNIPPETS[1]} 
        depth={2} 
        mouseX={springX} mouseY={springY} reducedMotion={reducedMotion}
        className="top-[55%] right-[2%] hidden xl:block" 
        cssAnimationClass="animate-float-slow-reverse"
      />
    </div>
  );
}
