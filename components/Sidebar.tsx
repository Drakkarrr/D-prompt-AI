'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LayoutDashboard } from 'lucide-react';

import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

const routes = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
];

const Sidebar = () => {
  return (
    <div className='flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='mb-14 flex items-center pl-3'>
          <div className='relative mr-4 h-10 w-10'>
            <Image fill alt='Logo' src='/complogo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            D-prompt
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link href={route.href} key={route.href}>
              <div className='flex flex-1 items-center'>
                <route.icon className={cn('mr-3 h-5 w-5', route.color)} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
