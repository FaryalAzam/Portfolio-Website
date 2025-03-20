import React, { useState } from 'react';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import NavBtn from './NavBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavLogo />
        
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <NavLink />
        </div>
        
        {/* Hire Me Button - Visible only on Desktop */}
        <div className="hidden lg:block">
          <NavBtn />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-black py-6 border-t border-orange">
          <NavLink />
          <div className="flex justify-center mt-4">
            <NavBtn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMain;
