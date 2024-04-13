import Image from 'next/image';
import React from 'react';

type SideBarRowProps = {
  src?: string | null | undefined;
  Icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  title: string | null | undefined;
};

function SideBarRow({ src, Icon, title }: SideBarRowProps) {
  return (
    <div className='flex cursor-pointer items-center gap-x-2 rounded-lg p-2 transition-colors duration-200 ease-in-out hover:bg-neutral-100'>
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
      <span className='truncate text-sm font-medium text-neutral-800 max-md:hidden sm:block'>
        {title}
      </span>
    </div>
  );
}

export default SideBarRow;
