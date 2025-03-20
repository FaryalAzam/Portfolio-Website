import React from 'react';
import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const projects = [
  {
    name: 'Nike Ecommerce Website',
    align: 'right',
    image: 'nike.JPG',
    link: 'https://nike-website1.vercel.app/',
  },
  {
    name: 'Code Editor',
    align: 'left',
    image: 'code editor.JPG',
    link: 'https://faryalazam.github.io/Code-Editor/',
  },
  {
    name: 'Resume Builder',
    align: 'right',
    image: 'resume builder.JPG',
    link: 'https://editable-resume-blue.vercel.app/',
  },
  {
    name: 'Bootstrap Website',
    align: 'left',
    image: 'bootstrap.JPG',
    link: 'https://faryalazam.github.io/Bootstrap-Website/',
  },
  {
    name: 'Glowing Bulb Effect',
    align: 'right',
    image: 'bulb.png',
    link: 'https://faryalazam.github.io/Glowing-Bulb-Effect/',
  },
];

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;