import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getAllPosts, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <Head>
        <title>Idowu Semilore</title>
      </Head>
      <div className='flex flex-col-reverse sm:flex-row items-start'>
        <div className='flex flex-col pr-8'>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
            Semilore Idowu
          </h1>
          <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
            Full Stack Developer
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-16'>
            Building scalable full stack web and mobile applications using
            scalable and robust tools
          </p>
        </div>
        <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
          <Image
            alt='Semilore Idowu'
            height={176}
            width={176}
            src='/images/avatar.jpg'
            className='rounded-full filter grayscale'
          />
        </div>
      </div>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
        Recent Blog Posts
      </h3>
      <Articles posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
};
