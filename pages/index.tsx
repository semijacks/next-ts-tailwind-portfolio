import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getAllMdxFiles, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

interface HomeProps {
  posts: PostMeta[];
  projects: PostMeta[];
}

export default function Home({ posts, projects }: HomeProps) {
  return (
    <div className='px-5 md:px-0'>
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
            modern and robust tools
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
      <Articles mdxFiles={posts} type='blog' withTags={false} />
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
        Recent Projects
      </h3>
      <Articles mdxFiles={projects} type='portfolio' withTags={false} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllMdxFiles('blog')
    .slice(0, 3)
    .map((post) => post.meta);

  const projects = getAllMdxFiles('portfolio')
    .slice(0, 3)
    .map((project) => project.meta);

  return { props: { posts, projects } };
};
