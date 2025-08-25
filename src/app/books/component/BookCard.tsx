import { CardAction } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import type BookType from '@/src/types/BookType';

type BookProps = { book: BookType };

export default function BookCard({ book }: BookProps) {
  return (
    <div>
      <CardAction>
        <Link href={`/books/${book.id}`}>
          <Image src={book.url} alt={book.title} width={175} height={263} />
        </Link>
      </CardAction>
    </div>
  );
}
