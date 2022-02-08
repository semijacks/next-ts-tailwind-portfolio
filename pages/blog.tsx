import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllMdxFiles, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <div className='px-5 md:px-0'>
      <Head>
        <title>Blog</title>
      </Head>
      <>
        <Articles mdxFiles={posts} type='posts' />
      </>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllMdxFiles('posts').map((post) => post.meta);

  return { props: { posts } };
};
