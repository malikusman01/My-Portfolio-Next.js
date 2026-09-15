import Reveal from "@/components/layout/Reveal";

const softwareSide = ["Full-Stack", "APIs", "Business Logic"];
const systemsSide = ["Infrastructure", "Networking", "Troubleshooting"];

export default function Differentiator() {
  return (
    <section className="container-page py-20 md:py-28 hairline">
      <div className="pt-20 md:pt-28">
        <Reveal>
          <h2 className="text-display-lg max-w-[20ch]">
            Most developers understand software. Most IT professionals understand infrastructure.
          </h2>
          <p className="mt-5 max-w-[56ch] text-ink-muted leading-relaxed">
            I've spent time on both sides — building applications and keeping
            the infrastructure they run on operational.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
          <Reveal delay={80}>
            <div className="border border-border rounded p-7 transition-colors duration-200 hover:border-border-strong">
              <p className="text-xs text-ink-faint tracking-wide">Software</p>
              <ul className="mt-4 space-y-2">
                {softwareSide.map((item) => (
                  <li key={item} className="text-ink">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex lg:flex-col items-center justify-center gap-2 py-4 lg:py-0">
              <span className="h-px w-10 lg:h-10 lg:w-px bg-accent/60" />
              <span className="text-xs text-accent whitespace-nowrap px-2">Systems</span>
              <span className="h-px w-10 lg:h-10 lg:w-px bg-accent/60" />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="border border-border rounded p-7 transition-colors duration-200 hover:border-border-strong">
              <p className="text-xs text-ink-faint tracking-wide">IT Operations</p>
              <ul className="mt-4 space-y-2">
                {systemsSide.map((item) => (
                  <li key={item} className="text-ink">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}