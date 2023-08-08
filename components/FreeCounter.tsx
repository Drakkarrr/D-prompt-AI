import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

import { MAX_FREE_COUNTS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useProModal } from '@/hooks/useProModal';

interface FreeCounterProps {
  isPro: boolean;
  apiLimit: number;
}

const FreeCounter: React.FC<FreeCounterProps> = ({
  isPro = false,
  apiLimit = 0,
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (isPro) return null;

  return (
    <div className='px-3'>
      <Card className='border-0 bg-white/10'>
        <CardContent className='py-6'>
          <div className='mb-4 space-y-2 text-center text-sm text-white'>
            <p>
              {apiLimit} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className='h-3'
              value={(apiLimit / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='ml-2 h-4 w-4 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
