import { CardAction } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import type BookType from '@/lib/types/BookType';
import type ImportantDataBookType from '@/lib/types/ImportantDataBookType';

type BookProps = { book: BookType | ImportantDataBookType; size: 'small' | 'medium' | 'large' };

export default function BookCard({ book, size }: BookProps) {
  const width = size == 'large' ? 225 : size == 'small' ? 125 : 175;
  const height = size == 'large' ? 338 : size == 'small' ? 188 : 263;
  return (
    <div>
      <CardAction>
        <Link href={`/books/${book.id}`}>
          <Image
            src={book.url}
            alt={book.title}
            width={width}
            height={height}
            className="rounded-md"
          />
        </Link>
      </CardAction>
    </div>
  );
}
