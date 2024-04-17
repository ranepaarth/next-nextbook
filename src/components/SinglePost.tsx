import { XMarkIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { deleteDoc, doc, DocumentData } from 'firebase/firestore';
import { MessageSquareMoreIcon, Share, ThumbsUpIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { db } from '../../firebase';
import ProfileAvatar from './ProfileAvatar';

function SinglePost({ post, postId }: DocumentData) {
  const { data: session } = useSession();
  const millisecond =
    post?.timestamp?.seconds * 1000 +
    Math.floor(post?.timestamp?.nanoseconds / 1e6);

  const date = new Date(millisecond).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className='flex h-fit w-full flex-col rounded-lg bg-white pb-2 pt-4 shadow-md'>
      <div className='flex items-start justify-between px-4'>
        <div className='flex items-start gap-x-2'>
          <ProfileAvatar src={post.avatarURL} />
          <div className='flex flex-col'>
            <span className='text-sm font-bold text-neutral-800 md:text-base'>
              {post.name}
            </span>
            <span className='text-xs font-medium text-neutral-500'>{date}</span>
          </div>
        </div>

        <div className='flex items-center gap-x-2 text-neutral-800'>
          <EllipsisHorizontalIcon className='w-7' />
          {session?.user?.image === post.avatarURL && (
            <button
              onClick={() => {
                console.log('deleting ', postId),
                  deleteDoc(doc(db, 'posts', postId));
              }}
            >
              <XMarkIcon
                className='w-7 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out hover:bg-neutral-200'
                strokeWidth={2}
              />
            </button>
          )}
        </div>
      </div>

      <div className='mt-2 h-fit min-h-fit w-full overflow-y-visible px-4 text-sm font-light md:text-base'>
        <TextareaAutosize
          value={post?.message}
          maxRows={20}
          className='scrollbar-hide h-fit min-h-fit w-full resize-none overflow-y-visible bg-transparent outline-none'
          disabled
        />
      </div>

      {post.postImageURL && (
        <div className={`mt-2 flex w-full justify-center`}>
          <Image
            src={post.postImageURL}
            alt='post-image'
            width={720}
            height={720}
            quality={90}
            className='aspect-auto object-contain'
            blurDataURL={post.postImageURL}
            placeholder='blur'
            loading='lazy'
          />
        </div>
      )}

      <hr className='mx-4 mt-8' />
      <div className='flex items-center justify-center px-4 pt-2'>
        <div className='single-post-footer-icon-container'>
          <ThumbsUpIcon className='w-5 md:w-8' />
          <span>Like</span>
        </div>
        <div className='single-post-footer-icon-container'>
          <MessageSquareMoreIcon className='w-5 md:w-8' />
          <span>Comment</span>
        </div>
        <div className='single-post-footer-icon-container'>
          <Share className='w-5 md:w-8' />
          <span>Share</span>
        </div>
      </div>
    </article>
  );
}

export default SinglePost;
