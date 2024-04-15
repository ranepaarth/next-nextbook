import Image from 'next/image';
import React from 'react';

function ProfileAvatar({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={720}
      height={720}
      alt='avatar'
      className='rounded-full w-10'
    />
  );
}

export default ProfileAvatar;
