import { Input } from '@/components/ui/input';

type SearchProps = { search: string; size: 'small' | 'large'; width: number };

export default async function Search({ search, size, width }: SearchProps) {
  const height = size == 'large' ? 72 : 56;
  return (
    <div className={`flex h-[${height}x] w-[${width}px]`}>
      <Input
        type="text"
        placeholder={`Search by ${search}`}
        className="--ds-neutral-100 --ds-neutral-400 rounded-[12px] border-[3px] pl-8 placeholder:text-lg placeholder:font-medium"
      />
    </div>
  );
}
