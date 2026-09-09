export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-dashed border-border rounded p-10 md:p-14 text-left">
      <p className="font-display text-xl text-ink">{title}</p>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
    </div>
  );
}
