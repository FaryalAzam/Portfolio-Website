import React from 'react';

const link = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "project" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
      {/* Divider */}
      <div className='w-full h-[1px] bg-lightGrey mt-24'></div>

      {/* Footer */}
      <div className='flex flex-col md:flex-row justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-lightGrey'>Faryal Azam</p>
        <ul className='flex flex-col md:flex-row gap-4 text-lightGrey text-xl'>
          {link.map((item, index) => (
            <li key={index}>
              <a href={"#"+item.section} className='hover:text-white transition-all duration-500 cursor-pointer'>
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 md-12 text-sm text-lightBrown'>@ 2025 FaryalAzam | Right Reserved</p>
    </div>
  );
};

export default FooterMain;
