import { Suspense } from 'react';
import GridByTittle from '@/components/books/GridByTittle';

export default function GridByTittleClient({ word }: { word: string }) {
  console.log(word);
  return (
    <div>
      <Suspense fallback={<p>Loading......</p>}>
        <GridByTittle word={word} />
      </Suspense>
    </div>
  );
}
