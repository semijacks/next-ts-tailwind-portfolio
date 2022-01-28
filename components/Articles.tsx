import Link from 'next/link';
import type { PostMeta } from 'utils/api';

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li className='mb-10' key={post.slug}>
          <div>
            <h4 className='text-lg md:text-lg font-medium mb-3 sm:mb-3 w-full text-gray-900 dark:text-gray-100 tracking-tight'>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h4>
          </div>
          <p className='mb-2 text-gray-700 dark:text-gray-200'>
            {post.excerpt}
          </p>
          <p className='flex gap-x-5'>
            {post.tags.map((tag) => (
              <div
                key={tag}
                className='text-xs bg-gradient-to-r from-yellow-500 to-pink-500 rounded px-2 py-1'
              >
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </div>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}