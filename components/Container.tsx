import NextLink from 'next/link';
import Image from 'next/image';

const Container = () => {
  return (
    <div>
      <nav className='px-4 flex justify-between items-center max-w-4xl w-full mb-4 mx-auto bg-white dark:bg-black bg-opacity-60'>
        <div className='flex justify-between items-center'>
          <NextLink href=''>
            <a className='p-1 sm:p-4 text-gray-900 dark:text-gray-100'>
              <Image
                src='/images/logo.jpg'
                alt='Picture of the author'
                width={'100%'}
                height={'100%'}
              />
            </a>
          </NextLink>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10'
            //   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
              className='h-4 w-4 text-gray-800 dark:text-gray-200'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </button>
        </div>
        <div>
          <NextLink href=''>
            <a className='p-1 sm:p-4 text-xs md:text-lg '>Dashboard</a>
          </NextLink>
          <NextLink href=''>
            <a className='p-1 sm:p-4 text-xs md:text-lg '>Blog</a>
          </NextLink>
          <NextLink href=''>
            <a className='p-1 sm:p-4 text-xs md:text-lg '>About</a>
          </NextLink>
          <NextLink href='/'>
            <a className='p-1 sm:p-4 text-xs md:text-lg '>Home</a>
          </NextLink>
        </div>
      </nav>
    </div>
  );
};

export default Container;
