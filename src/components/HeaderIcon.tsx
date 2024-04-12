import React from 'react';

type IconProp = {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  isActive?: boolean;
};
function HeaderIcon({ Icon, isActive }: IconProp) {
  return (
    <div
      className={`${isActive ? 'text-blue-500' : 'text-neutral-600'} cursor-pointer rounded-lg py-2  transition-colors duration-200 ease-in-out active:bg-neutral-300 md:px-5 md:hover:bg-neutral-100 md:hover:text-blue-500`}
    >
      <Icon className='h-5 ' strokeWidth={1.8} />
    </div>
  );
}

export default HeaderIcon;
