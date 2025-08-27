import { Card } from '@/components/ui/card';

type InfoCardProps = { name: string; content: string };

export default function InfoCard({ name, content }: InfoCardProps) {
  return (
    <div className="--ds--neutral-700 --ds--neutral-800 --ds--neutral-200 --ds--neutral-200 flex h-auto w-full gap-4 rounded-lg p-4">
      <Card>
        <h1>{name}</h1>
        <p>{content}</p>
      </Card>
    </div>
  );
}
