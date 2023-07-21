import React from 'react';
import { Props } from '@/types';

const DashboardLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='relative h-full'>
      <div className='z-50 hidden h-full bg-gray-900 text-white md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
        <div className='sidebar'>
          <h1>Sidebar</h1>
        </div>
        <main className='text-green-600 md:pl-72'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
