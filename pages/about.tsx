import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import { getMdxFromSlug, getSlugs, PostMeta } from '@utils/api';
import YouTube from '@/components/YouTube';
import 'highlight.js/styles/atom-one-dark.css';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function AboutPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{`${post.meta.title}`}</title>
      </Head>
      <div className='px-5 md:px-0'>
        <h1 className='mb-10 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          {post.meta.title}
        </h1>
        <article className='prose dark:prose-dark mb-20'>
          <MDXRemote {...post.source} components={{ YouTube, Image }} />
        </article>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const slug = 'about';
  const { content, meta } = getMdxFromSlug(slug, 'about');
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        meta,
      },
    },
  };
};
