import React from 'react';
import Header from '@/components/Header';
import { navItemsData } from '@utils/data';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='w-full h-2 md:h-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500' />
      <div className='px-3 md:px-0'>
        <MobileMenu navItems={navItemsData} />
        <Header navItems={navItemsData} />
      </div>
      <div className='max-w-2xl mx-auto'>{children}</div>
      <Footer footerItems={navItemsData} />
    </div>
  );
};

export default Container;
