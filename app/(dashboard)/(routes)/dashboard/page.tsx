'use client';

import { useRouter as Router } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from 'lucide-react';

const tools = [
  {
    label: 'Chat Generator',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-violet-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    label: 'Image Generator',
    icon: ImageIcon,
    href: '/image',
    color: 'text-orange-700',
    bgColor: 'bg-orange-500/10',
  },
  {
    label: 'Video Generator',
    icon: VideoIcon,
    href: '/video',
    color: 'text-pink-300',
    bgColor: 'bg-pink-500/10',
  },
  {
    label: 'Music Generator',
    icon: MusicIcon,
    href: '/music',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Code Generator',
    icon: CodeIcon,
    href: '/code',
    color: 'text-blue-700',
    bgColor: 'bg-blue-500/10',
  },
];

const DashboardPage = () => {
  // const router = useRouter();
  const router = Router();

  return (
    <>
      <div className='mb-8 space-y-4'>
        <h2 className='text-center text-2xl font-bold md:text-4xl'>
          Explore the power of AI
        </h2>
        <p className='text-center text-sm text-muted-foreground md:text-lg'>
          Chat with the most advance chat AI model
        </p>
      </div>
      <div className='space-y-4 px-4 md:px-20 lg:px-32'>
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className='flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('w-fit rounded p-2', tool.bgColor)}>
                <tool.icon className={cn('h-8 w-8', tool.color)} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='h-5 w-5 text-black/50' />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
