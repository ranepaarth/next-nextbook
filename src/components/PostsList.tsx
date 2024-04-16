'use client';

import { collection, DocumentData, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { PostsProps } from '../../types';
import SinglePost from './SinglePost';

function PostsList({ posts }: PostsProps) {
  const [realTimePosts, loading, error] = useCollection(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  );

  return (
    <section className='mx-auto mt-10 flex w-full max-w-[600px] flex-col justify-center gap-y-4'>
      {realTimePosts
        ? realTimePosts?.docs.map(post => (
            <SinglePost post={post.data()} key={post.id} postId={post.id} />
          ))
        : posts.map((post: DocumentData) => (
            <SinglePost post={post.data} postId={post.id} key={post.id} />
          ))}
    </section>
  );
}

export default PostsList;
