import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Props } from '@/types';

import { getApiLimitCount } from '@/lib/api-limit';
import { getSubscription } from '@/lib/subscription';

const DashboardLayout: React.FC<Props> = async ({ children }: Props) => {
  const apiLimit = await getApiLimitCount();
  const isPro = await getSubscription();

  return (
    <div className='relative h-full'>
      <div className='z-[80] hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
        <Sidebar isPro={isPro} apiLimit={apiLimit} />
      </div>
      <main className='pb-10 md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
