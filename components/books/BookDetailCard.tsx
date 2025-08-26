import type BookType from '@/lib/types/BookType';
import { CardAction } from '@/components/ui/card';
import Image from 'next/image';

type BookDetailCardProps = {
  book: BookType;
};

export default function BookDetailCard({ book }: BookDetailCardProps) {
  return (
    <div>
      <CardAction>
        <h1>{book.title}</h1>
        <p>{book.synopsis}</p>
        <p>
          {book.authors
            .map((author: { name: string; surname: string }) => `${author.name} ${author.surname}`)
            .join(', ')}
        </p>
        <p>{book.releaseDate}</p>
        <p>{book.pages}</p>
        <p>{book.language}</p>
        <p>{book.publisher.name}</p>
        <p>{book.tags.map((tag) => tag.name).join(', ')}</p>
        <p>{book.isbn}</p>
        <Image src={book.url} alt={book.title} width={200} height={200} />
      </CardAction>
    </div>
  );
}
