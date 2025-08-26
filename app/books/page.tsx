import Search from '@/components/common/Search';

export default function Home() {
  return (
    <div>
      <div className="flex translate-y-4 justify-center">
        <Search search="title, author or ISBN" size="large" width={1000} />
      </div>
    </div>
  );
}
