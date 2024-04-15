'use client';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { FormEvent, useRef, useState } from 'react';
import { db, storage } from '../../firebase';
import FeedInputFooter from './FeedInputFooter';
import PlaceholderAvatar from './PlaceholderAvatar';

function FeedInputBox() {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);

  const sendPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!inputRef.current?.value) return;
      const docRef = await addDoc(collection(db, 'posts'), {
        message: inputRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        avatarURL: session?.user?.image,
        timestamp: serverTimestamp(),
      });
      const imageRef = ref(storage, `posts/${docRef.id}`);
      if (image) {
        await uploadString(imageRef, image as string, 'data_url')
          .then(async () => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, 'posts', docRef.id), {
              postImageURL: downloadURL,
            });
          })
          .catch(error => {
            console.log(error);
            setLoading(false);
          });
      }
      setImage(null);
      inputRef.current.value = '';
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeImage = () => {
    console.log('first');
    setImage(null);
  };

  return (
    <div className='relative mx-auto mt-10 flex w-full max-w-[800px]'>
      {loading && (
        <div className='absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-neutral-600/10'>
          <Loader2 className='h-8 w-8 animate-spin text-blue-500' />
        </div>
      )}
      <div className='w-full flex-col justify-center divide-y-2 rounded-lg bg-white p-2 shadow-md'>
        <div className='items-centre flex w-full space-x-4 py-2 font-medium text-neutral-800'>
          {session?.user ? (
            <Image
              src={session?.user?.image!}
              width={40}
              height={40}
              alt='avatar'
              className='rounded-full'
            />
          ) : (
            <PlaceholderAvatar className='h-6 w-6 text-neutral-50' />
          )}
          <form className='flex flex-1' onSubmit={sendPost}>
            <input
              type='text'
              placeholder={`What's on your mind ${session?.user ? session?.user?.name : ''}?`}
              ref={inputRef}
              className='w-full rounded-full bg-neutral-100 px-5 outline-none'
            />
            <button type='submit' hidden>
              Submit
            </button>
          </form>
        </div>
        <FeedInputFooter
          removeImage={removeImage}
          setImage={setImage}
          image={image}
        />
      </div>
    </div>
  );
}

export default FeedInputBox;
