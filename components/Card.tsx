import { convertDate } from '@utils/functions';
import Link from 'next/link';

interface CardProps {
  withTags: boolean;
  type: string;
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

export default function ContentCard({
  withTags,
  type,
  slug,
  title,
  excerpt,
  tags,
  date,
}: CardProps) {
  return (
    <Link href={`/${type}/${slug}`}>
      <a>
        <h4 className='text-lg md:text-2xl font-semibold mb-3 sm:mb-3 w-full text-gray-900 dark:text-gray-100 tracking-tight'>
          {title}
        </h4>
        <p className='mb-4 text-gray-700 dark:text-gray-200'>{excerpt}</p>
        <p className='mb-2 text-gray-700 dark:text-gray-200 text-sm'>
          {convertDate(date)}
        </p>
        <div className='flex flex-wrap gap-x-3 gap-y-3'>
          {withTags
            ? tags.map((tag) => (
                <div
                  key={tag}
                  className='text-xs border-2 py-1 px-2 border-[#f37931] rounded-xl'
                >
                  <Link href={`/tags/${tag}`}>
                    <a>{tag}</a>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </a>
    </Link>
  );
}
