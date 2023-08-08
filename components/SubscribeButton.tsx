'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

interface SubscribeButtonProps {
  isPro: boolean;
}

const SubsripeButton: React.FC<SubscribeButtonProps> = ({ isPro = false }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error: any) {
      console.log(`Billing error occured ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant={isPro ? 'default' : 'premium'}
      onClick={handleSubscribe}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade to Pro'}
      {!isPro && <Zap className='ml-2 h-4 w-4 fill-white' />}
    </Button>
  );
};

export default SubsripeButton;
