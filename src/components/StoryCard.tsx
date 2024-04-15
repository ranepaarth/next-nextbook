import Image from 'next/image';
import React from 'react';

function StoryCard({ name, profile, src }: Story) {
  return (
    <article className='group relative h-[150px] w-2/6 transform cursor-pointer overflow-hidden rounded-lg transition-all duration-200 ease-in md:h-[200px] lg:h-[250px]'>
      <Image
        src={profile}
        alt='avatar'
        width={30}
        height={30}
        className='absolute left-2 top-2 z-10 w-8 rounded-full border-2 border-blue-500 bg-neutral-200 shadow-md filter transition-all duration-200 ease-in-out group-hover:brightness-[0.6] sm:w-10'
      />
      <Image
        src={src}
        alt='avatar'
        width={100}
        height={300}
        quality={90}
        className=' top-10 z-50 h-full w-full bg-white brightness-[0.8] filter transition-all duration-200 ease-in-out group-hover:scale-[1.02] group-hover:brightness-[0.6] sm:block'
      />
      <span className='absolute bottom-2 left-2 hidden truncate text-sm text-neutral-200 lg:block'>
        {name}
      </span>
    </article>
  );
}

export default StoryCard;
