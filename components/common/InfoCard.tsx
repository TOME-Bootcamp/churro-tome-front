type InfoCardProps = { name: string; content: string };

export default function InfoCard({ name, content }: InfoCardProps) {
  return (
    <div className="bg-secondary flex h-[48px] w-[178px] flex-col items-center justify-center rounded-lg pt-1 pr-4 pb-1 pl-4">
      <div className="text-700 text-sm font-medium">{name}</div>
      <div className="text-sm font-medium">{content}</div>
    </div>
  );
}
