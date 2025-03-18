import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';


const skills= [

{
    skill: "HTML",
    icon: FaHtml5,
},

{
    skill: "CSS",
    icon: FaCss3Alt,
},

{
    skill: "JavaScript",
    icon: IoLogoJavascript,
},

{
    skill: "TypeScript",
    icon: SiTypescript,
},

{
    skill: "Bootstrap",
    icon: FaBootstrap,
},

{
    skill: "React.JS",
    icon: FaReact,
},

{
    skill: "Next.JS",
    icon: RiNextjsFill,
},

{
    skill: "TailwindCSS",
    icon: RiTailwindCssFill ,
},

{
    skill: "TailwindCSS",
    icon: FaFigma,
},

];

const SkillsSM = () => {
  return (
    <motion.div 
                     variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{once: false, amount:0.7}}
    className='grid md:grid-cols-4  sm:grid-cols-2  gap-12 my-12'>
      {skills.map((item, index)=>{
        return (
         <div key={index} className='flex flex-col items-center'>
         <item.icon  className='text-7xl text-orange'/>
         <p className='text-center mt-4 text-white'>{item.skill}</p>
        </div>
        );
      })}
    </motion.div>
  );
};

export default SkillsSM
