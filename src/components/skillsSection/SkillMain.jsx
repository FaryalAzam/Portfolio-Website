import React from 'react'
import SkillText from './SkillText';
import AllSkill from './AllSkill';
import SkillsSM from './SkillsSM';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';



const SkillMain = () => {
  return (
    <div id='skills'>
      <div className='mx-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        <motion.div
                   variants={fadeIn("down", 0.2)}
                   initial="hidden"
                   whileInView="show"
                   viewport={{once: false, amount:0}}
        >
      <SkillText />
      </motion.div>
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
      <AllSkill />
      </div>
      <div className='sm:block lg:hidden'>
        <SkillsSM />
      </div>
      </div>
    </div>
  )
}

export default SkillMain
