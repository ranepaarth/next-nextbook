'use client';

import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type UserProps = {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
};

function LoginBtn({ user }: UserProps) {
  return (
    <Link
      href={user ? '' : '/auth/sign-in'}
      className='flex items-center gap-x-2 divide-x-2 rounded-lg p-1 text-neutral-700 transition-colors duration-200 ease-in-out md:border md:hover:bg-neutral-50'
    >
      <p className='rounded-full bg-neutral-200'>
        {user?.name === undefined || null ? (
          <UserIcon className='h-8 p-2 text-neutral-700' />
        ) : (
          <Image
            src={user?.image!}
            alt='avatar'
            width='32'
            height='32'
            className='rounded-full bg-neutral-200 p-0.5'
            quality={100}
          />
        )}
      </p>
      <span className='hidden whitespace-nowrap px-2 text-sm font-semibold md:block'>
        {user ? user.name : 'Log In'}
      </span>
    </Link>
  );
}

export default LoginBtn;
