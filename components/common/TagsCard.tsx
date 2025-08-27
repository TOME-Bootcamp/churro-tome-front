type InfoCardProps = { name: string };

export default function TagsCard({ name }: InfoCardProps) {
  return (
    <div className="rad pt-s pr-m pl-m pb-s gap-s flex h-[40px] w-auto justify-center rounded-xl border-[2px]">
      <div>{name}</div>
    </div>
  );
}
