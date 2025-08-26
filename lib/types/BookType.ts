export default interface BookType {
  id: number;
  title: string;
  isbn: string;
  url: string;
  pages: string;
  releaseDate: string;
  synopsis: string;
  language: string;
  publisher: { id: number; name: string };
  authors: { id: number; name: string; surname: string }[];
  tags: { id: number; name: string }[];
}
