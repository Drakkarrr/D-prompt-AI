'use client';

import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='space-y-5 font-bold text-center text-white py-36'>
      <div className='space-y-5 text-4xl font-extrabold md:text-6xl lg:text-7xl'>
        <h1>D-prompt AI Generative for</h1>
        <div className='text-md bg-gradient-to-r from-[#9076fc] to-[#61cfeb] bg-clip-text text-transparent'>
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
      <div className='px-8 text-sm font-light text-zinc-400 sm:text-center md:text-xl lg:px-28'>
        A Generative AI app that embarks on creative discovery and immerse
        yourself in dynamic conversations, captivating visuals, harmonious
        melodies, assistive code generation and more.
        <br /> <br /> No credit card required!
      </div>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='premium'
            className='p-4 rounded-full md:p-6 md:text-lg'
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className='font-normal text-xm text-zinc-400 md:text-sm'>
        Developed by &nbsp;
        <Link
          href='https://github.com/Drakkarrr'
          className='tracking-wider underline text-slate-200'
        >
          Drakkar
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
