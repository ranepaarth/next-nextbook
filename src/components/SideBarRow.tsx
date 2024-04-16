import Image from 'next/image';
import React, { FC } from 'react';

type SideBarRowProps = {
  src?: string | null | undefined;
  Icon?: FC<React.SVGProps<SVGSVGElement>>;
  title: string | null | undefined;
};

function SideBarRow({ src, Icon, title }: SideBarRowProps) {
  return (
    <div className='flex cursor-pointer items-center gap-x-2 rounded-lg p-2 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-neutral-100'>
      {src && (
        <Image
          src={src}
          alt='avatar'
          width={24}
          height={24}
          quality={90}
          className='rounded-full'
        />
      )}
      {Icon && <Icon className='h-6 w-6 text-blue-500' />}
      <span className='truncate   text-neutral-800 max-md:hidden sm:block'>
        {title}
      </span>
    </div>
  );
}

export default SideBarRow;
