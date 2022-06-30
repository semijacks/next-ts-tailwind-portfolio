import type { PostMeta } from '@utils/api';
import ContentCard from './Card';

type ArticleType = 'blog' | 'portfolio';
interface ArticlesProps {
  mdxFiles: PostMeta[];
  type: ArticleType;
  withTags: boolean;
}

function NoContentCard({ type }: { type: string }) {
  return (
    <div className='border-4 p-4 rounded-xl text-center mt-52 md:mt-72'>
      <h1>{`No ${type} content yet`}</h1>
    </div>
  );
}

export default function Articles({ mdxFiles, type, withTags }: ArticlesProps) {
  return (
    <ul>
      {mdxFiles.length ? (
        mdxFiles.map((mdxFile) => (
          <div
            className='mb-10 border-4 rounded-xl p-5 border-gray-200 bg-gradient-to-r'
            key={mdxFile.slug}
          >
            <ContentCard
              excerpt={mdxFile.excerpt}
              slug={mdxFile.slug}
              tags={mdxFile.tags}
              title={mdxFile.title}
              date={mdxFile.date}
              withTags={withTags}
              type={type}
            />
          </div>
        ))
      ) : (
        <NoContentCard type={type} />
      )}
    </ul>
  );
}
