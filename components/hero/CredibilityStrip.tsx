const items = [
  {
    title: "Software + IT",
    detail: "Engineering background paired with hands-on infrastructure ownership",
  },
  {
    title: "Full-Stack",
    detail: "Frontend → Backend → APIs → Database",
  },
  {
    title: "Systems",
    detail: "Business applications and the infrastructure they run on",
  },
];

export default function CredibilityStrip() {
  return (
    <section className="hairline">
      <div className="container-page grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {items.map((item) => (
          <div key={item.title} className="py-8 md:py-10 md:px-8 first:md:pl-0">
            <p className="font-display text-lg text-ink">{item.title}</p>
            <p className="mt-2 text-sm text-ink-muted max-w-[32ch]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
