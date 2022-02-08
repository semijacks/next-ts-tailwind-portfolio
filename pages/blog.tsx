import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPosts, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <div className='px-5 md:px-0'>
      <Head>
        <title>Blog</title>
      </Head>
      <>
        <Articles posts={posts} />
      </>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
};
