import { getBookById } from '@/src/services/FetchJson';
import BookDetailCard from '@/src/app/books/component/BookDetailCard';

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
