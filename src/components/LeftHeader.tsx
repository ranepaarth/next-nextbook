import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function LeftHeader() {
  return (
    <>
      <Image
        src={'/images/icon-facebook.png'}
        alt='nextbook'
        width={30}
        height={30}
      />
      <div className='flex w-full items-center gap-x-2 rounded-xl bg-neutral-200 p-2 text-sm'>
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
    </>
  );
}

export default LeftHeader;
