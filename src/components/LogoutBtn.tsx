'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import React from 'react';

function LogoutBtn() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <ArrowRightStartOnRectangleIcon
          className='right-header-icon'
          strokeWidth={2}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to Log out?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. You can Login In again later and
            continue from where you left.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLogout}
            className='bg-blue-500 hover:bg-blue-600'
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LogoutBtn;
