import React from 'react';

const AboutImage = () => {
  return (
    <div className='h-[300px] md:h-[500px] w-[200px] md:w-[300px] mb-10 relative'>
      <div className='h-[300px] md:h-[500px] w-[200px] md:w-[300px] rounded-[50px] md:rounded-[100px] absolute overflow-hidden'>
        <img src="about-me.jpg" alt="faru" className='h-full w-auto object-cover' />
      </div>
      <div className='h-[300px] md:h-[500px] w-[150px] md:w-[250px] bg-orange absolute bottom-[-20px] md:bottom-[-30px] left-[-20px] md:left-[-30px] rounded-bl-[60px] md:rounded-bl-[120px] rounded-tr-[60px] md:rounded-tr-[120px] rounded-br-[10px] md:rounded-br-[20px] rounded-tl-[10px] md:rounded-tl-[20px] -z-10'></div>
    </div>
  );
};

export default AboutImage;