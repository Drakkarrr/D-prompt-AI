'use client';

import { useAuth } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Montserrat({
  display: 'swap',
  weight: '600',
  subsets: ['latin'],
});

const LandingNavbar = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <nav className='flex items-center justify-between bg-transparent p-4'>
      <Link href='/' className='flex items-center'>
        <div className='relative mr-4 h-8 w-8'>
          <Image src='/complogo.png' fill alt='Logo' />
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)}>
          D-prompt AI
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant='outline' className='rounded-full'>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
