import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllMdxFiles, PostMeta } from '@utils/api';
import Articles from '@/components/Articles';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <div className=''>
      <Head>
        <title>Blog</title>
      </Head>
      <>
        <Articles mdxFiles={posts} type='blog' withTags={true} />
      </>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllMdxFiles('blog').map((post) => post.meta);

  return { props: { posts } };
};
