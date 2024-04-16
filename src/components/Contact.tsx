import Image from 'next/image';
import React from 'react';

function Contact({ contact }: { contact: Contact }) {
  return (
    <div className='flex cursor-pointer items-center space-x-3 rounded-lg px-4 py-2 hover:bg-neutral-300 w-full'>
      <div className='relative'>
        <Image
          src={contact.src}
          alt='avatar'
          width={720}
          height={720}
          className='w-10 rounded-full bg-neutral-100'
        />
        {contact.isOnline && (
          <div className='absolute bottom-0 right-1 h-2 w-2 rounded-full bg-green-500'></div>
        )}
      </div>
      <span className='text-sm font-semibold text-neutral-700'>
        {contact.name}
      </span>
    </div>
  );
}

export default Contact;
