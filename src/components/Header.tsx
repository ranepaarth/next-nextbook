import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/nextAuthOptions';
import { getServerSession } from 'next-auth';
import React from 'react';
import CentreHeader from './CentreHeader';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

async function Header() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <header className='flex items-center justify-between bg-white px-2 py-2 shadow-sm lg:px-4'>
      <div className='flex w-1/12 flex-grow-[0.4] items-center gap-x-2'>
        <LeftHeader />
      </div>

      <div className='flex flex-grow-[0.4] justify-center md:flex-grow'>
        <CentreHeader />
      </div>

      <div className='flex items-center gap-x-1'>
        <RightHeader />
      </div>
    </header>
  );
}

export default Header;
