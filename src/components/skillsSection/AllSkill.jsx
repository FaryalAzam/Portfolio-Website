import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import SingleSkill from './SingleSkill';
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
    skill: "Figma",
    icon: FaFigma,
},

];

const AllSkill = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index)=>{
       return (
         <motion.div
                     variants={fadeIn("up", `0.${index}`)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{once: false, amount:0}}
         >
        <SingleSkill 
         key={index}
         text={item.skill}
         imgSvg={<item.icon/>}/>
         </motion.div>
       );
 })}
      </div> 
    </div>
  )
}

export default AllSkill
