import {
  FlagIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import HeaderIcon from './HeaderIcon';

function CentreHeader() {
  return (
    <div className='flex w-full  max-w-xl items-center justify-between space-x-2 md:flex-grow md:justify-center lg:space-x-12'>
      <HeaderIcon Icon={HomeIcon} isActive={true} />
      <HeaderIcon Icon={FlagIcon} />
      <HeaderIcon Icon={PlayIcon} />
      <HeaderIcon Icon={ShoppingBagIcon} />
      <HeaderIcon Icon={UserGroupIcon} />
    </div>
  );
}

export default CentreHeader;
