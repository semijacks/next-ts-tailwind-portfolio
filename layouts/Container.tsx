import React from 'react';
import Header from '@/components/Header';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <Header />
      <div className='max-w-2xl mx-auto'>{children}</div>
    </>
  );
};

export default Container;
