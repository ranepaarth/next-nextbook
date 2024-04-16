import React from 'react';
import { PostsProps } from '../../types';
import FeedInputBox from './FeedInputBox';
import PostsList from './PostsList';
import Stories from './Stories';

function Feed({ posts }: PostsProps) {
  return (
    <section className='flex w-full max-w-[980px] flex-col justify-center sm:w-full'>
      <Stories />
      <FeedInputBox />
      <PostsList posts={posts}/>
    </section>
  );
}

export default Feed;
