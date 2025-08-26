import { getBookById } from '@/lib/api/FetchJson';
import BookDetailCard from '@/components/books/BookDetailCard';

type DetailsProps = { params: { id: string } };

export default async function Details({ params }: DetailsProps) {
  const param = await params;
  const book = await getBookById(Number(param.id));
  return (
    <div>
      <BookDetailCard book={book} />
    </div>
  );
}
