import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { DocumentData } from 'firebase/firestore';
import { MessageSquareMoreIcon, Share, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import ProfileAvatar from './ProfileAvatar';

function SinglePost({ post }: DocumentData) {
  const millisecond =
    post?.timestamp?.seconds * 1000 +
    Math.floor(post?.timestamp?.nanoseconds / 1e6);

  const date = new Date(millisecond).toLocaleDateString();

  return (
    post.postImageURL && (
      <article className='flex w-full flex-col rounded-lg bg-white pb-2 pt-4 shadow-md'>
        <div className='flex items-start gap-x-2 px-4'>
          <ProfileAvatar src={post.avatarURL} />
          <div className='flex flex-col'>
            <span className='text-sm font-bold text-neutral-800 md:text-base'>
              {post.name}
            </span>
            <span className='text-xs font-medium text-neutral-500'>{date}</span>
          </div>
        </div>

        <div className='mt-2 px-4 text-sm font-light md:text-base'>
          <ReactTextareaAutosize value={post.message} className='resize-none' />
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
    )
  );
}

export default SinglePost;
