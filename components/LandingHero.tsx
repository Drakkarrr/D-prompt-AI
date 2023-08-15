'use client';

import { useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='space-y-5 py-36 text-center font-bold text-white'>
      <div className='space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
        <h1>Drakkar-prompt AI is best for</h1>
        <div>
          <TypewriterComponent
            options={{
              loop: true,
              autoStart: true,
              delay: 50,
              strings: [
                'Chat',
                'Code Generation',
                'Photo Generation',
                'Video Generation',
                'Music Generation',
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
