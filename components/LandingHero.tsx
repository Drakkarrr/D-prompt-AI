'use client';

import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='space-y-5 py-36 text-center font-bold text-white'>
      <div className='space-y-5 text-4xl font-extrabold md:text-6xl lg:text-7xl'>
        <h1>D-prompt AI Generative for</h1>
        <div className='bg-gradient-to-r from-green-400 to-slate-100 bg-clip-text text-transparent'>
          <TypewriterComponent
            options={{
              loop: true,
              autoStart: true,
              strings: [
                'Chat with AI',
                'Code Generation',
                'Photo Generation',
                'Video Generation',
                'Music Generation',
              ],
            }}
          />
        </div>
      </div>
      <div className='text-sm font-light text-zinc-400 md:text-xl'>
        Generate contents using AI 10x faster <br /> No credit card required!
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='premium'
            className='rounded-full p-4 md:p-6 md:text-lg'
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className='text-xm font-normal text-zinc-400 md:text-sm'>
        Developed by{' '}
        <Link
          href='https://github.com/Drakkarrr'
          className='tracking-wider text-slate-200 underline'
        >
          Drakkar
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
