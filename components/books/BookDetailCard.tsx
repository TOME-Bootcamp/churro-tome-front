import type BookType from '@/lib/types/BookType';
import Image from 'next/image';
import InfoCard from '@/components/common/InfoCard';
import TagsCard from '@/components/common/TagsCard';

type BookDetailCardProps = {
  book: BookType;
};

export default function BookDetailCard({ book }: BookDetailCardProps) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row">
      <Image
        src={book.url}
        alt={book.title}
        width={200}
        height={200}
        className="h-auto items-start justify-start gap-10 rounded-lg shadow-lg"
      />
      <div className="--ds--neutral-700 --ds--neutral-800 --ds--neutral-200 flex h-full w-full flex-col items-start justify-start">
        <div className="flex h-full w-auto flex-col gap-y-4">
          <div className="flex h-auto w-full flex-col items-start justify-start">
            <div className="--ds-neutral--800 h-auto w-full items-start justify-start text-2xl">
              {book.title}
            </div>
            <div className="--ds--neutral-700 h-auto w-full items-start justify-start text-xl">
              {book.authors
                .map(
                  (author: { name: string; surname: string }) => `${author.name} ${author.surname}`,
                )
                .join(', ')}
            </div>
          </div>
          <div className="--ds--neutral-800 mt-4 flex h-auto w-full flex-row items-start justify-start">
            {book.synopsis}
          </div>
        </div>
        <div className="--ds--neutral-700 --ds--neutral-800 --ds--neutral-200 mt-6 flex h-auto w-full flex-col items-start justify-start gap-y-4">
          <div className="--ds--neutral-700 --ds--neutral-800 --ds--neutral-200 h-auto w-full items-start justify-start gap-x-4 gap-y-4">
            <div className="pl --ds--neutral-800 --ds--neutral-700 --ds--neutral-200 --bg--neutral-200 flex h-auto w-full flex-row items-center justify-center rounded-lg px-4 py-1">
              <InfoCard name="Release" content={book.releaseDate} />
              <InfoCard name="Publisher" content={book.publisher.name} />
              <InfoCard name="Language" content={book.language} />
              <InfoCard name="Pages" content={book.pages} />
            </div>
          </div>
          <div className="flex h-auto w-full flex-col items-start justify-start gap-y-2.5">
            <div className="flex h-auto w-full flex-row items-start justify-start gap-y-2">
              <div className="--ds--neutral-700 flex h-auto w-auto flex-wrap items-center justify-center gap-x-2 rounded-[32px] px-4 py-2">
                {book.tags.map((tag) => (
                  <TagsCard key={tag.id} name={tag.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
