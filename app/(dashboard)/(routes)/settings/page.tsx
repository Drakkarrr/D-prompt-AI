import Heading from '@/components/Heading';
import SubscribeButton from '@/components/SubscribeButton';
import { getSubscription } from '@/lib/subscription';
import { Settings } from 'lucide-react';

const SettingsPage = async () => {
  const isPro = await getSubscription();

  return (
    <>
      <Heading
        title='Settings'
        description='This is the settings page'
        icon={Settings}
        color='text-gray-500'
        bgColor='bg-gray-700/10'
      />
      <div className='space-y-4 px-4 lg:px-8'>
        <div className='text-sm text-muted-foreground'>
          {isPro ? 'You are a pro user' : 'You are not a pro user'}
        </div>
        <SubscribeButton isPro={isPro} />
      </div>
    </>
  );
};

export default SettingsPage;
