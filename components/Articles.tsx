import Link from 'next/link';
import type { PostMeta } from 'utils/api';

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li className='mb-10' key={post.slug}>
          <div>
            <h1 className='text-2xl font-semibold mb-3'>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h1>
          </div>
          <p className='mb-2'>{post.excerpt}</p>
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
