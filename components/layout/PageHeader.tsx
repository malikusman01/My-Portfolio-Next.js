export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-14 md:pt-20 pb-10 md:pb-14">
      <h1 className="text-display-lg">{title}</h1>
      {subtitle && (
        <p className="mt-4 max-w-[56ch] text-base text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
