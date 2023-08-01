'use client';

import { useProModal } from '@/hooks/useProModal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const ProModal = () => {
  const proModal = useProModal();
  return (
    <>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='flex flex-col items-center justify-center gap-y-4 pb-2'>
              <div className='flex items-center gap-x-2 py-1 font-bold'>
                Upgrade to D-prompt
                <Badge className='py-1 text-sm uppercase'>pro</Badge>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProModal;
