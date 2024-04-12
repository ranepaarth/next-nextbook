import {
  FlagIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <header className='flex items-center justify-between bg-white px-2 py-2 shadow-sm lg:px-4'>
      <div className='flex w-1/12 flex-grow-[0.4] items-center gap-x-2'>
        <Image
          src={'/images/icon-facebook.png'}
          alt='nextbook'
          width={30}
          height={30}
        />
        <div className='flex w-full max-w-[250px] items-center gap-x-2 rounded-xl bg-neutral-200 p-2 text-sm'>
          <MagnifyingGlassIcon
            className='h-4 text-neutral-500'
            strokeWidth={2.5}
          />
          <input
            type='text'
            placeholder='Search Facebook'
            className='w-full flex-grow bg-transparent text-neutral-800 outline-none'
          />
        </div>
      </div>

      <div className='flex flex-grow-[0.4] justify-center md:flex-grow'>
        <div className='flex w-full  max-w-xl items-center justify-between space-x-2 md:flex-grow md:justify-center lg:space-x-12'>
          <HeaderIcon Icon={HomeIcon} isActive={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <p className='flex aspect-square w-8 items-center justify-center rounded-full bg-neutral-200 text-xl'>
          {/* Profile Pic */}P
        </p>
        <p className='hidden whitespace-nowrap px-2 font-semibold md:block'>
          Paarth Rane
        </p>
        <div className='flex items-center gap-x-2'>
          <ChatBubbleOvalLeftEllipsisIcon className='right-header-icon' />
          <BellIcon className='right-header-icon' />
          <ChevronDownIcon className='right-header-icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
