import Link from 'next/link';

interface CardProps {
  withTags: boolean;
  type: string;
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export default function ContentCard({
  withTags,
  type,
  slug,
  title,
  excerpt,
  tags,
}: CardProps) {
  return withTags ? (
    <Link href={`/${type}/${slug}`}>
      <a>
        <h4 className='text-lg md:text-lg font-medium mb-3 sm:mb-3 w-full text-gray-900 dark:text-gray-100 tracking-tight'>
          {title}
        </h4>
        <p className='mb-2 text-gray-700 dark:text-gray-200'>{excerpt}</p>
        <div className='flex flex-wrap gap-x-3 gap-y-3'>
          {tags.map((tag) => (
            <div
              key={tag}
              className='text-xs border-2 py-1 px-2 border-[#f37931] rounded-xl'
            >
              <Link href={`/tags/${tag}`}>
                <a>{tag}</a>
              </Link>
            </div>
          ))}
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`/${type}/${slug}`}>
      <a>
        <h4 className='text-lg md:text-lg font-medium mb-3 sm:mb-3 w-full text-gray-900 dark:text-gray-100 tracking-tight'>
          {title}
        </h4>
        <p className='mb-2 text-gray-700 dark:text-gray-200'>{excerpt}</p>
      </a>
    </Link>
  );
}