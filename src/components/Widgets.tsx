import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { Contact } from '../../types';
import SingleContact from './SingleContact';

const contacts: Contact[] = [
  {
    src: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Peter%20Parker',
    isOnline: false,
    name: 'Peter Parker',
  },
  {
    src: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Harry%20Potter',
    isOnline: true,
    name: 'Harry Potter',
  },
  {
    src: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Jack%20Ryan',
    isOnline: true,
    name: 'Jack Ryan',
  },
  {
    src: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Tony%20Stark',
    isOnline: false,
    name: 'Tony Stark',
  },
  {
    src: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=John%20Doe',
    isOnline: true,
    name: 'John Doe',
  },
];
function Widgets() {
  return (
    <div className='hidden min-w-[250px] max-w-[600px] flex-col items-start xl:inline-flex'>
      <div className='flex w-full justify-between text-neutral-500'>
        <span className='font-medium capitalize'>contacts</span>
        <div className='flex items-center gap-x-1'>
          <span>
            <VideoCameraIcon className='w-5' />
          </span>
          <span>
            <MagnifyingGlassIcon className='w-5' />
          </span>
          <span>
            <EllipsisHorizontalIcon className='w-6' />
          </span>
        </div>
      </div>

      {/* <div> */}
      {contacts.map(contact => (
        <SingleContact contact={contact} key={contact.name} />
      ))}
      {/* </div> */}
    </div>
  );
}

export default Widgets;
