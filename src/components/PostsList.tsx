'use client';

import { collection, orderBy, query } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import SinglePost from './SinglePost';

function PostsList() {
  const [realTimePosts, loading, error] = useCollection(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  );

  return (
    <section className='mx-auto mt-10 flex w-full max-w-[600px] flex-col justify-center gap-y-4'>
      {loading ? (
        <div className='flex w-full justify-center text-center'>
          <Loader2 className='animate-spin text-blue-500' strokeWidth={2} />
        </div>
      ) : (
        realTimePosts?.docs.map(post => (
          <SinglePost post={post.data()} key={post.id} />
        ))
      )}
    </section>
  );
}

export default PostsList;
