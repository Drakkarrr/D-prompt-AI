import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <h1>This is a Landing Page (unprotected)</h1>
      <Link href='/sign-in'>
        <div className='container'>
          <Button>Login</Button>
        </div>
      </Link>
      <Link href='/sign-up'>
        <div className='container'>
          <Button>Register</Button>
        </div>
      </Link>
    </>
  );
};

export default LandingPage;
