'use client';

import Image from 'next/image';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import GridByTittle from '@/components/books/GridByTittle';
import Grid from '@/components/books/Grid';

type SearchProps = { search: string; size: 'small' | 'large'; width: number };

export default function Search({ search, size, width }: SearchProps) {
  const [word, setWord] = useState('');
  const [debouncedWord, setDebouncedWord] = useState('');
  const height = size == 'large' ? 72 : 56;

  useEffect(() => {
    console.log('word actual:', word, typeof word);
    const timer = setTimeout(() => {
      setDebouncedWord(word);
    }, 300);
    return () => clearTimeout(timer);
  }, [word]);
  return (
    <div>
      <div className="flex" style={{ height: `${height}px`, width: `${width}px` }}>
        <Image src="/Search.png" alt="search" width={38} height={38} className="absolute" />
        <Input
          value={word}
          type="text"
          placeholder={`Search by ${search}`}
          onChange={(e) => setWord(e.target.value)}
          className="--ds-neutral-100 --ds-neutral-400 relative rounded-[12px] border-[3px] pl-12 placeholder:text-lg placeholder:font-medium"
        />
      </div>
      <div className="flex justify-center">
        {debouncedWord ? <GridByTittle word={debouncedWord} /> : <Grid />}
      </div>
    </div>
  );
}
