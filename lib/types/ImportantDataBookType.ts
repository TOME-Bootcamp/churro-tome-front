export default interface ImportantDataBookType {
  id: number;
  title: string;
  url: string;
  authors: { id: number; name: string; surname: string }[];
  isbn: string;
}
