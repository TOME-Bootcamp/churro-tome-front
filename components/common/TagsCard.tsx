import { Card } from '@/components/ui/card';

type InfoCardProps = { name: string };

export default function TagsCard({ name }: InfoCardProps) {
  return (
    <div className="--ds--neutral-700 --ds--neutral-700 flex h-auto w-auto justify-center rounded-xs">
      <Card>
        <p>{name}</p>
      </Card>
    </div>
  );
}
