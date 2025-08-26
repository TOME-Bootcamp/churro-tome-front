'use client';

import BookCard from '@/components/books/BookCard';
import { getBooksByAuthor, getBooksByIsbn, getBooksByTittle } from '@/lib/api/FetchJson';
import { useEffect, useState } from 'react';
import type ImportantDataBookType from '@/lib/types/ImportantDataBookType';

export default function GridByTittle({ word }: { word: string }) {
  const [books, setBooks] = useState<ImportantDataBookType[]>([]);

  useEffect(() => {
    if (!word) return;

    async function fetchBooks() {
      const booksTittle = await getBooksByTittle(word);
      const booksAuthor = await getBooksByAuthor(word);
      const booksIsbn = await getBooksByIsbn(word);

      const allBooks = [...booksTittle, ...booksAuthor, ...booksIsbn];
      const uniqueBooks = Array.from(new Map(allBooks.map((book) => [book.id, book])).values());
      setBooks(uniqueBooks);
    }

    fetchBooks();
  }, [word]);

  if (books.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="grid grid-cols-5 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} size="medium" />
      ))}
    </div>
  );
}
