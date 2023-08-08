'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from 'lucide-react';

import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import FreeCounter from '@/components/FreeCounter';

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Chat Generator',
    icon: MessageSquare,
    href: '/chat',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generator',
    icon: ImageIcon,
    href: '/image',
    color: 'text-orange-700',
  },
  {
    label: 'Video Generator',
    icon: VideoIcon,
    href: '/video',
    color: 'text-pink-300',
  },
  {
    label: 'Music Generator',
    icon: MusicIcon,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generator',
    icon: CodeIcon,
    href: '/code',
    color: 'text-blue-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

interface SidebarProps {
  apiLimit: number;
  isPro: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ apiLimit = 0, isPro = false }) => {
  const pathname = usePathname();

  return (
    <div className='flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='mb-14 flex items-center pl-3'>
          <div className='relative mr-4 h-10 w-10'>
            <Image fill sizes='80px' alt='Logo' src='/complogo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            D-prompt
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                pathname === route.href && 'bg-white/10 text-white'
              )}
            >
              <div className='flex flex-1 items-center'>
                <route.icon className={cn('mr-3 h-5 w-5', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimit={apiLimit} />
    </div>
  );
};

export default Sidebar;
