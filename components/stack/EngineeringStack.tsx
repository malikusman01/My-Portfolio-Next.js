import { stack } from "@/data/skills";

export default function EngineeringStack() {
  return (
    <section className="container-page py-20 md:py-28 hairline">
      <div className="pt-20 md:pt-28">
        <h2 className="text-display-lg">Engineering Stack</h2>
        <p className="mt-4 max-w-[56ch] text-ink-muted">
          The tools I reach for, and why each one earns a place.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {stack.map((group) => (
            <div key={group.category} className="border-t border-border pt-5">
              <p className="font-display text-ink">{group.category}</p>
              <p className="mt-1.5 text-sm text-ink-muted">{group.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="text-xs text-ink-muted border border-border rounded px-2.5 py-1"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}