import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='text-xl md:text-2xl uppercase text-cyan'
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='text-4xl md:text-5xl lg:text-6xl font-bold font-Roboto text-orange'
      >
        Faryal Azam
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='text-lg md:text-xl font-bold mt-4 text-white'
      >
        A Passionate Web Developer
      </motion.p>
    </div>
  );
};

export default HeroText;