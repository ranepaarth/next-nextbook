'use client';

import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';

type Props = {
  removeImage: () => void;
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null | undefined>>;
  image: string | ArrayBuffer | null | undefined;
};

function FeedInputFooter({ removeImage, setImage, image }: Props) {
  const filePickerRef = useRef<HTMLInputElement>(null);

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files) {
      reader.readAsDataURL(e.target.files?.[0]);
    }

    reader.onload = readerEvent => {
      setImage(readerEvent.target?.result);
    };
  };

  const handlePseudoClick = () => {
    filePickerRef.current?.click();
  };

  return (
    <div className='flex flex-col gap-y-4 pt-2'>
      {image && (
        <div
          className='hover: relative flex transform cursor-pointer flex-col items-center gap-y-4 rounded-lg bg-neutral-100 p-2'
          onClick={removeImage}
        >
          <span className='absolute bottom-2 right-2 flex justify-end rounded-md bg-red-400 px-2 py-1 text-xs font-medium capitalize text-white transition-colors duration-200 ease-in-out hover:bg-red-500'>
            remove image
          </span>
          <Image
            src={image as string}
            alt='image'
            width={20}
            height={20}
            className='w-2/5 object-contain filter transition duration-150 hover:brightness-110'
          />
        </div>
      )}
      <div className='flex w-full items-center justify-around text-xs font-medium capitalize text-neutral-700 sm:text-sm xl:text-base'>
        <div className='feed-input-box-footer-icon-container'>
          <VideoCameraIcon className='h-6 text-red-500' />
          <p>live video</p>
        </div>
        <div
          onClick={handlePseudoClick}
          className='feed-input-box-footer-icon-container'
        >
          <CameraIcon className='h-6 text-green-500' />
          <p>Photo/Video</p>
          <input
            type='file'
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
            accept='image/*'
          />
        </div>
        <div className='feed-input-box-footer-icon-container'>
          <FaceSmileIcon className='h-6 text-yellow-500' />
          <p>feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

export default FeedInputFooter;
