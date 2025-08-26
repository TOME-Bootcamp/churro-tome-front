import { getAllBooks } from '@/lib/api/FetchJson';
import BookCard from '@/components/books/BookCard';

export default async function Grid() {
  const books = await getAllBooks();
  return (
    <div className="grid grid-cols-5 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} size="medium" />
      ))}
    </div>
  );
}
