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
import { convertDate } from '@utils/functions';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  const { title, date } = post.meta;
  return (
    <>
      <Head>
        <title>{`Blog - ${title}`}</title>
      </Head>
      <div className='px-5 md:px-0'>
        <h1 className='mb-10 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          {title}
        </h1>
        <div className='mb-10 flex items-center gap-x-1'>
          <div className='flex items-center gap-x-2'>
            <Image
              alt='Semilore Idowu'
              height={25}
              width={25}
              src='/images/avatar.jpg'
              className='rounded-full filter grayscale'
            />
            <p className='text-sm'>Semilore Idowu /</p>
          </div>
          <p className='text-sm'>{convertDate(date)}</p>
        </div>
        <article className='prose dark:prose-dark mb-20'>
          <MDXRemote {...post.source} components={{ YouTube, Image }} />
        </article>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getMdxFromSlug(slug, 'blog');
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('blog').map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
