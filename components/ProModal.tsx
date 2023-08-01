// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Check } from 'lucide-react';

// import { useProModal } from '@/hooks/useProModal';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { tools } from '@/constants';
// import { cn } from '@/lib/utils';

// const ProModal = () => {
//   const proModal = useProModal();

//   const [loading, setLoading] = useState(false);

//   const onSubscribe = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('/api/stripe');

//       window.location.href = response.data.url;
//     } catch (error) {
//       toast.error('Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle className='flex flex-col items-center justify-center pb-2 gap-y-4'>
//               <div className='flex items-center py-1 font-bold gap-x-2'>
//                 Upgrade to D-prompt
//                 <Badge className='py-1 text-sm uppercase'>pro</Badge>
//               </div>
//             </DialogTitle>
//             <DialogDescription className='pt-2 space-y-2 font-medium text-center text-zinc-900'>
//               {tools.map((tool) => (
//                 <Card
//                   key={tool.href}
//                   className='flex items-center justify-between p-3 border-black/5'
//                 >
//                   <div className='flex items-center gap-x-4'>
//                     <div
//                       className={cn(
//                         'w-fit rounded-md p-2',
//                         tool.color,
//                         tool.bgColor
//                       )}
//                     >
//                       <tool.icon className={cn('h-6 w-6', tool.color)} />
//                     </div>
//                     <div className='text-sm font-semibold'>{tool.label}</div>
//                   </div>
//                   <Check className='w-5 h-5 text-primary' />
//                 </Card>
//               ))}
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default ProModal;

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
          <DialogTitle className='flex flex-col items-center justify-center gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 text-xl font-bold'>
              Upgrade to D-prompt
              <Badge variant='default' className='py-1 text-sm uppercase'>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='space-y-2 pt-2 text-center font-medium'>
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
                <Check className='h-5 w-5 text-primary' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size='lg'
            variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='ml-2 h-4 w-4 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
