'use client';

import axios from 'axios';
import { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProModal } from '@/hooks/useProModal';
import { tools } from '@/constants';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex flex-col items-center justify-center pb-2 gap-y-4'>
            <div className='flex items-center text-xl font-bold gap-x-2'>
              Upgrade to D-prompt
              <Badge variant='default' className='py-1 text-sm uppercase'>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='pt-2 space-y-2 font-medium text-center'>
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className='flex items-center justify-between p-3'
              >
                <div className='flex items-center gap-x-4'>
                  <div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
                    <tool.icon className={cn('h-6 w-6', tool.color)} />
                  </div>
                  <div className='text-sm font-semibold'>{tool.label}</div>
                </div>
                <Check className='w-5 h-5 text-primary' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size='lg'
            variant='default'
            className='w-full'
          >
            Upgrade to Pro
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
