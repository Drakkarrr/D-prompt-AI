import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/MobileSidebar';

import { getApiLimitCount } from '@/lib/api-limit';
import { getSubscription } from '@/lib/subscription';

const Navbar = async () => {
  const apiLimit = await getApiLimitCount();
  const isPro = await getSubscription();

  return (
    <div className='flex items-center p-4'>
      <MobileSidebar isPro={isPro} apiLimit={apiLimit} />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
