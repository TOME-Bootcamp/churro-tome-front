import type BookType from '@/src/types/BookType';

export async function getAllBooks(): Promise<BookType[]> {
  const books = await fetch('http://localhost:8080/Books/getBooks');
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

export async function getBookByTittle(tittle: string) {
  const books = await fetch('http://localhost:8080/Books/getByTittle?tittle=' + tittle);
  if (!books.ok) {
    throw new Error('Error fetching books');
  }
  return books.json();
}

export async function getBookByAuthor(author: string) {
  const books = await fetch('http://localhost:8080/Books/getByAuthor?author=' + author);
  if (!books.ok) {
    throw new Error('Error fetching books');
  }
  return books.json();
}

export async function getBookByISBN(isbn: string) {
  const books = await fetch('http://localhost:8080/Books/getByISBN?isbn=' + isbn);
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
