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
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { db, storage } from '../../firebase';
import FeedInputFooter from './FeedInputFooter';
import PlaceholderAvatar from './PlaceholderAvatar';

function FeedInputBox() {
  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const { data: session } = useSession();

  const sendPost = async () => {
    setLoading(true);
    try {
      if (!message && !image) return;
      if (!message) return;
      const docRef = await addDoc(collection(db, 'posts'), {
        message: message,
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
      setMessage('')
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
      <div className='w-full flex-col justify-center rounded-lg bg-white p-2 shadow-md'>
        <div className='flex w-full items-start space-x-4 py-2 font-medium text-neutral-800 '>
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
            <TextareaAutosize
              placeholder={`What's on your mind ${session?.user ? session?.user?.name : ''}?`}
              maxRows={10}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className='w-full resize-none rounded-lg bg-neutral-100 px-5 py-2 outline-none'
            />
            <button type='submit' hidden>
              Submit
            </button>
          </form>
        </div>
        <button
          className='mt-2 w-full rounded bg-blue-900/75 py-1.5 text-sm font-medium text-white hover:bg-blue-900/90 disabled:bg-neutral-200 md:text-base'
          disabled={!image || !message}
          onClick={sendPost}
        >
          Post
        </button>

        <hr className='mt-4' />
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
