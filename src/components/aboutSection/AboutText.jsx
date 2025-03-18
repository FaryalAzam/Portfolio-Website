import React from 'react'

const AboutText = () => {
  return (
    <div 
    
    className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h1 className='text-6xl text-cyan mb-10  '>About Me </h1>
      <p className='text-white  font-bold text-[20px]'> 
I’m "Faryal", a frontend developer who loves crafting sleek, interactive, and user-friendly web experiences. I’m always exploring new ways to make the web more dynamic, responsive, and engaging.  
For me, frontend development is more than just code—it’s about creativity, problem-solving, and building seamless experiences that users love. I’m always learning, improving, and pushing my skills to the next level.  
 
</p>
<a href="#projects">
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
        My Project</button>
        </a>
    </div>
  )
}

export default AboutText
