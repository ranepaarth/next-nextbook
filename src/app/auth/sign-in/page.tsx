'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

function SignIn() {
  const handleGoogleLogIn = async () => {
    await signIn('google', {
      callbackUrl: `${window.location.origin}`,
    });
  };
  const handleFacebookLogIn = async () => {
    await signIn('facebook', {
      callbackUrl: `${window.location.origin}`,
    });
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-y-4'>
      <button
        className='flex items-center gap-x-2 rounded-md border bg-white  px-4 py-2 font-semibold text-neutral-800 transition-all duration-200 ease-in-out hover:shadow-lg'
        onClick={handleGoogleLogIn}
      >
        <Image
          src={'/images/icon-google.png'}
          alt={'icon'}
          width={20}
          height={20}
          quality={90}
        />
        Login With Google
      </button>
      <button
        className='flex items-center gap-x-2 rounded-md border bg-white  px-4 py-2 font-semibold text-neutral-800 transition-all duration-200 ease-in-out hover:shadow-lg'
        onClick={handleFacebookLogIn}
      >
        <Image
          src={'/images/icon-facebook.png'}
          alt={'icon'}
          width={20}
          height={20}
          quality={90}
        />
        Login With Facebook
      </button>
    </main>
  );
}

export default SignIn;
