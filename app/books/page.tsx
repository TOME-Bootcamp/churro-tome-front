import Search from '@/components/common/Search';
import Grid from '@/components/books/Grid';

export default async function Home() {
  return (
    <div>
      <div className="flex translate-y-4 justify-center">
        <Search search="title, author or ISBN" size="large" width={1000} />
      </div>
      <div className="flex justify-center">
        <Grid />
      </div>
    </div>
  );
}
