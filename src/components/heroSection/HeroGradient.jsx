import React from 'react';

const HeroGradient = () => {
  return (
    <div>
  
      <div className='shadow-cyanMediumShadow absolute top-0 md:right-[400px] sm:right-[200px] -z-10 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
      <div className='shadow-cyanMediumShadow absolute md:top-[300px] sm:top-[200px] left-0 -z-10 opacity-50'></div>
      <div className='shadow-orangeMediumShadow absolute md:top-[500px] sm:top-[300px] left-0 -z-10 opacity-50'></div>
    </div>
  );
};

export default HeroGradient;