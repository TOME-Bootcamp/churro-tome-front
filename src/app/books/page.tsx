import { Input } from '@/components/ui/input';
import { getAllBooks } from '@/src/services/FetchJson';
import BookCard from '@/src/app/books/component/BookCard';

export default async function Home() {
  const books = await getAllBooks();
  return (
    <div className="gap-spacing-m border-color-border bg-color-background px-spacing-m flex min-h-[72px] w-[1000px] items-center rounded-lg border-[3px]">
      <Input type="text" placeholder="Search by title, author or ISBN" className="flex-1" />
      <div className="grid-covers gap-spacing-m mt-6 grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
