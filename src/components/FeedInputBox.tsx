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
      const docRef = await addDoc(collection(db, 'posts'), {
        message: message,
        name: session?.user?.name,
        email: session?.user?.email,
        avatarURL: session?.user?.image,
        timestamp: serverTimestamp(),
      });
      console.log(docRef.id);
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
      setMessage('');
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
    <div className='relative mx-auto mt-10 flex w-full max-w-[600px]'>
      <div className='w-full flex-col justify-center rounded-lg bg-white p-2 shadow-md'>
        <div className='flex w-full items-start space-x-4 py-2 font-medium text-neutral-800 '>
          {session?.user ? (
            <Image
              src={session?.user?.image!}
              width={1080}
              height={1080}
              alt='avatar'
              quality={90}
              className='w-10 rounded-full'
            />
          ) : (
            <PlaceholderAvatar className='h-6 w-6 text-neutral-50' />
          )}
          <form className='flex flex-1' onSubmit={sendPost}>
            <TextareaAutosize
              placeholder={`What's on your mind ${session?.user ? session?.user?.name : ''}?`}
              minRows={2}
              maxRows={10}
              value={message}
              disabled={!session?.user}
              onChange={e => setMessage(e.target.value)}
              className='w-full resize-none rounded-lg bg-neutral-100 px-5 py-2 outline-none'
            />
            <button type='submit' hidden>
              Submit
            </button>
          </form>
        </div>
        <button
          className='mt-2 flex w-full justify-center rounded bg-blue-900/75 py-1.5 text-sm font-medium text-white hover:bg-blue-900/90 disabled:bg-neutral-400 md:text-base'
          disabled={(!image && !message) || loading}
          onClick={sendPost}
        >
          {loading ? (
            <Loader2 className='h-5 w-5 animate-spin text-white' />
          ) : (
            'Post'
          )}
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
