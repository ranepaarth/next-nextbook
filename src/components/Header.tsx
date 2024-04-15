import React from 'react';
import CentreHeader from './CentreHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

async function Header() {
  return (
    <header className='flex items-center justify-between bg-white px-2 py-2 shadow-sm lg:px-4'>
      <div className='flex w-4/12 md:flex-grow-[0.3] lg:flex-grow-[0.2] items-center gap-x-2 md:max-w-[280px] lg:w-2/12'>
        <LeftHeader />
      </div>

      <div className='flex flex-grow-[0.5] justify-center md:flex-grow'>
        <CentreHeader />
      </div>

      <div className='flex items-center gap-x-1'>
        <RightHeader />
      </div>
    </header>
  );
}

export default Header;
