import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from '../framarMotion/variants';

const SingleProject = ({ name, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl text-orange">{name}</h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-center md:justify-start"
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="project image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;