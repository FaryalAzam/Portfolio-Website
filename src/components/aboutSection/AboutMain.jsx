import React from 'react';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const AboutMain = () => {
  return (
    <div id="about" className='flex flex-col md:flex-row gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center px-4'>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='w-full md:w-1/2'
      >
        <AboutText />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='w-full md:w-1/2 flex justify-center'
      >
        <AboutImage />
      </motion.div>
    </div>
  );
};

export default AboutMain;