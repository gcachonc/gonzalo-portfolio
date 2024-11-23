import React from 'react';
import LanguageSwitcher from '../ui/languageSwitcher';

const Header = () => {
  return (
    <header className = "box-border w-screen px-3 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className='font-play text-xl lg:text-5xl tracking-[2px] lg:tracking-[6px] font-bold'>Gonzalo Cachón</h1>
        <LanguageSwitcher />
    </header>
  );
};

export default Header;