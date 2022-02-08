import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllMdxFiles, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

export default function Portfolio({ projects }: { projects: PostMeta[] }) {
  return (
    <div className='px-5 md:px-0'>
      <Head>
        <title>Portfolio</title>
      </Head>
      <>
        <Articles mdxFiles={projects} type='portfolio' />
      </>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const projects = getAllMdxFiles('portfolio').map((post) => post.meta);

  return { props: { projects } };
};
