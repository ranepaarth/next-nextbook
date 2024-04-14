import { UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

type PlaceholderAvatarProps = {
  className: string;
};

function PlaceholderAvatar({ className }: PlaceholderAvatarProps) {
  return (
    <p className='w-fit rounded-full bg-neutral-300 p-2'>
      <UserIcon className={className} />
    </p>
  );
}

export default PlaceholderAvatar;
