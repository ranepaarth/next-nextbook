import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/nextAuthOptions';
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { getServerSession } from 'next-auth';
import React from 'react';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

async function RightHeader() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <>
      <div className='flex items-center gap-x-2 md:mr-1'>
        <LoginBtn user={session?.user} />
        {session?.user && <LogoutBtn />}
      </div>
      <div className='hidden items-center gap-x-2 lg:inline-flex'>
        <ChatBubbleOvalLeftEllipsisIcon className='right-header-icon' />
        <BellIcon className='right-header-icon' />
        <ChevronDownIcon className='right-header-icon' />
      </div>
    </>
  );
}

export default RightHeader;
