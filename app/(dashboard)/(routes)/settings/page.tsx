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
        description='Unlock enhanced capabilities by upgrading to our Pro plan'
        icon={Settings}
        color='text-gray-500'
        bgColor='bg-gray-700/10'
      />
      <div className='m-auto grid place-items-center space-y-4 px-4 lg:px-8'>
        <div>
          Gain access to advanced features, no limits, priority support, and
          exclusive content. Elevate your creative process to new heights with
          premium tools and resources, tailored to those who demand the utmost
          from their creative journey.
        </div>
        <div className='text-sm text-muted-foreground'>
          {isPro ? 'Current Plan: Pro Plan' : 'Current Plan: Free Plan'}
        </div>
        <SubscribeButton isPro={isPro} />
      </div>
    </>
  );
};

export default SettingsPage;
