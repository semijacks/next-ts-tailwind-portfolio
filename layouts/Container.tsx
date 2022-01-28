import React from 'react';
import Header from '@/components/Header';
import { navItemsData } from '../utils/data';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Header navItems={navItemsData} />
      <div className='max-w-2xl mx-auto'>{children}</div>
    </div>
  );
};

export default Container;
