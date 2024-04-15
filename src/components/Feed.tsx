import React from 'react';
import FeedInputBox from './FeedInputBox';
import PostsList from './PostsList';
import Stories from './Stories';

function Feed() {
  return (
    <section className='flex w-full max-w-[980px] flex-col justify-center sm:w-full'>
      <Stories />
      <FeedInputBox />
      <PostsList />
    </section>
  );
}

export default Feed;
