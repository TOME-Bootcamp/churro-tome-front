import type BookType from '@/lib/types/BookType';
import type ImportantDataBookType from '@/lib/types/ImportantDataBookType';

export async function getAllBooks(): Promise<BookType[]> {
  const books = await fetch('http://localhost:8080/Books/getBooks');
  if (!books.ok) {
    throw new Error('Error fetching books');
  }
  return books.json();
}
export async function getBooksByWord(word: string): Promise<ImportantDataBookType[]> {
  const books = await fetch('http://localhost:8080/Books/getByWord?word=' + word);
  if (!books.ok) {
    throw new Error('Error fetching books');
  }
  return books.json();
}

export async function getBookById(id: number): Promise<BookType> {
  const books = await fetch('http://localhost:8080/Books/getById?id=' + id);
  if (!books.ok) {
    throw new Error('Error fetching books');
  }
  return books.json();
}

async function FetchJson(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching ${url}: ${res.status}`);
  }
  return res.json();
}
