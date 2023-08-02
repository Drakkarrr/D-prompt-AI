import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/MobileSidebar';
import { getApiLimitCount } from '@/lib/api-limit';

const Navbar = async () => {
  const apiLimit = await getApiLimitCount();

  return (
    <div className='flex items-center p-4'>
      <MobileSidebar apiLimit={apiLimit} />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
