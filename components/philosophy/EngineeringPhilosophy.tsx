import Reveal from "@/components/layout/Reveal";

const principles = [
  {
    n: "01",
    title: "Understand",
    detail: "Start with the problem, not the tech. What does the person or business actually need?",
  },
  {
    n: "02",
    title: "Model",
    detail: "Translate requirements into systems, data, and workflows before writing code.",
  },
  {
    n: "03",
    title: "Architect",
    detail: "Design components, APIs, services, and the boundaries between them.",
  },
  {
    n: "04",
    title: "Build",
    detail: "Write maintainable, reusable code — built to be read again, not just run once.",
  },
  {
    n: "05",
    title: "Secure",
    detail: "Authentication, authorization, validation, and secure API practices, from the start.",
  },
  {
    n: "06",
    title: "Deliver",
    detail: "Test, deploy, monitor, and improve — the job isn't done at merge.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section className="container-page py-20 md:py-28 hairline">
      <div className="pt-20 md:pt-28">
        <Reveal>
          <h2 className="text-display-lg">How I engineer</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-10">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div className="flex gap-4">
                <span className="font-display text-sm text-accent pt-1">{p.n}</span>
                <div>
                  <p className="font-display text-ink">{p.title}</p>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed max-w-[30ch]">
                    {p.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}