import React from 'react';
import StoryCard from './StoryCard';
import { Story } from '../../types';

const stories: Story[] = [
  {
    name: 'John Doe',
    src: 'https://fastly.picsum.photos/id/78/1584/2376.jpg?hmac=80UVSwpa9Nfcq7sQ5kxb9Z5sD2oLsbd5zkFO5ybMC4E',
    profile: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=John%20Doe',
  },
  {
    name: 'Jack Ryan',
    src: 'https://fastly.picsum.photos/id/221/1440/879.jpg?hmac=-y8GQ4KS-tmCflYwphSLZmsTu-m0rL8U6CldcgLjJoA',
    profile: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Jack%20Ryan',
  },
  {
    name: 'Harry Potter',
    src: 'https://fastly.picsum.photos/id/251/5000/3333.jpg?hmac=oHmu5G5YHF3f0Ffjf4PsfSX8UPujk6fDEB4vN9dzlbY',
    profile: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Harry%20Potter',
  },
  {
    name: 'Tony Stark',
    src: 'https://fastly.picsum.photos/id/247/3264/2168.jpg?hmac=mNHRvpzD7DJ1ZsJLM623LUPYrecz33Q6H5JscVt66IU',
    profile: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Tony%20Stark',
  },
  {
    name: 'Peter Parker',
    src: 'https://fastly.picsum.photos/id/243/2300/1533.jpg?hmac=BnvN5jcWjSaFHq5vJoJjJltaTOWalVdYo2iR6-s03bI',
    profile: 'https://api.dicebear.com/8.x/open-peeps/svg?seed=Peter%20Parker',
  },
];

function Stories() {
  return (
    <div className='flex w-full justify-evenly space-x-2 sm:space-x-4'>
      {stories.map(story => (
        <StoryCard
          name={story.name}
          profile={story.profile}
          src={story.src}
          key={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
