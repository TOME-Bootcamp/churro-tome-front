'use client';

import { getAllBooks } from '@/lib/api/FetchJson';
import BookCard from '@/components/books/BookCard';
import { useEffect, useState } from 'react';
import type ImportantDataBookType from '@/lib/types/ImportantDataBookType';

export default function Grid() {
  const [books, setBooks] = useState<ImportantDataBookType[]>([]);
  useEffect(() => {
    async function fetchBooks() {
      const booksTittle = await getAllBooks();
      setBooks(booksTittle);
    }
    fetchBooks();
  }, []);
  return (
    <div className="grid grid-cols-5 gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} size="medium" />
      ))}
    </div>
  );
}
