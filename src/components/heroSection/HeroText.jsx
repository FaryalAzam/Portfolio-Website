import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center ">
      <motion.h2
       variants={fadeIn("down", 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once: false, amount:0}}
      className='lg:text-2xl sm:text-xl uppercase text-cyan'>Front-End Web Developer </motion.h2>

      <motion.h1
         variants={fadeIn("right", 0.4)}
         initial="hidden"
         whileInView="show"
         viewport={{once: false, amount:0}}
       className='md:text-[2.8rem] lg:text-6xl sm:text-6xl font-bold font-Roboto text-orange'>Faryal Azam</motion.h1>

      <motion.p
       variants={fadeIn("up", 0.6)}
       initial="hidden"
       whileInView="show"
       viewport={{once: false, amount:0}}
       className=' text-[18px] font-bold mt-4 text-white'>A Passionate Web Developer</motion.p>
   </div>
  );
};

export default HeroText
