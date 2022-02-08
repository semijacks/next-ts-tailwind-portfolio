import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';

// const POSTS_PATH = path.join(process.cwd(), 'posts');

const getMdxPath = (type: string): string => {
  const POSTS_PATH = path.join(process.cwd(), `mdx/${type}`);
  return POSTS_PATH;
};

export const getSlugs = (type: string): string[] => {
  const POSTS_PATH = getMdxPath(type);
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
};

export const getAllMdxFiles = (type: string) => {
  const posts = getSlugs(type)
    .map((slug) => getMdxFromSlug(slug, type))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export const getMdxFromSlug = (slug: string, type: string): Post => {
  const POSTS_PATH = getMdxPath(type);
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? 'slug',
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};
