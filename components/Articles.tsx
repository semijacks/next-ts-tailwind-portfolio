import type { PostMeta } from '@utils/api';
import ContentCard from './Card';
interface ArticlesProps {
  mdxFiles: PostMeta[];
  type: string;
  withTags: boolean;
}

export default function Articles({ mdxFiles, type, withTags }: ArticlesProps) {
  return withTags ? (
    <ul>
      {mdxFiles.map((mdxFile) => (
        <div
          className='mb-10 border-4 rounded-xl p-5 border-gray-200'
          key={mdxFile.slug}
        >
          <ContentCard
            excerpt={mdxFile.excerpt}
            slug={mdxFile.slug}
            tags={mdxFile.tags}
            title={mdxFile.title}
            withTags={withTags}
            type={type}
          />
        </div>
      ))}
    </ul>
  ) : (
    <ul>
      {mdxFiles.map((mdxFile) => (
        <div
          className='mb-10 border-4 rounded-xl p-5 border-gray-200'
          key={mdxFile.slug}
        >
          <ContentCard
            excerpt={mdxFile.excerpt}
            slug={mdxFile.slug}
            tags={mdxFile.tags}
            title={mdxFile.title}
            withTags={withTags}
            type={type}
          />
        </div>
      ))}
    </ul>
  );
}
