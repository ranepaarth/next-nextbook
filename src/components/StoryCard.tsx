import Image from 'next/image';
import React from 'react';

function StoryCard({ name, profile, src }: Story) {
  return (
    <article className='group: relative w-2/6 transform transition-all duration-500 ease-in hover:scale-105 hover:animate-pulse h-[150px] md:h-[200px] lg:h-[250px]'>
      <Image
        src={profile}
        alt='avatar'
        width={30}
        height={30}
        className='absolute left-2 top-2 z-10 w-8 rounded-full border bg-neutral-100 shadow-md brightness-90 grayscale-[0.5] filter sm:w-10'
      />
      <Image
        src={src}
        alt='avatar'
        width={100}
        height={300}
        quality={90}
        className=' top-10 z-50 h-full w-full rounded-lg bg-white brightness-50 filter  sm:block'
      />
      <span className='absolute bottom-2 left-2 hidden truncate text-sm text-neutral-200 lg:block'>
        {name}
      </span>
    </article>
  );
}

export default StoryCard;
