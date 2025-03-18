import React from 'react'
import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const projects = [
  {

    name:'Nike Ecommerce Website' ,
    align:'right',
    image: '../../public/nike.JPG',
    Link: 'https://nike-website1.vercel.app/',


},

{

  name:'Code Editor' ,
  align:'left',
  image: '../../public/code editor.JPG',
  Link: 'https://faryalazam.github.io/Code-Editor/',

},

{

name:'Resume Builder' ,
align:'right',
image: '../../public/resume builder.JPG',
Link: 'https://editable-resume-blue.vercel.app/',

},

{

  name:'Bootstrap Website' ,
  align:'left',
  image: '../../public/bootstrap.JPG',
  Link: 'https://faryalazam.github.io/Bootstrap-Website/',


},

{

name:'Glowing Bulb Effect' ,
align:'right',
image: '../../public/bulb.png',
Link: 'https://faryalazam.github.io/Glowing-Bulb-Effect/',

},



]


const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4:'>
      <motion.div
                          variants={fadeIn("up", 0.2)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{once: false, amount:0}}
      >
      <ProjectText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
       {projects.map((item, index)=>{

      return <SingleProject key={index}
                             name={item.name}
                             align={item.align}
                             image={item.image}  
                             link={item.Link} />

    })}
      </div>
    </div>
  )
}

export default ProjectMain
