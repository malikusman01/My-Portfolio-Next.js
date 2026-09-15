import Link from "next/link";
import Hero from "@/components/hero/Hero";
import CredibilityStrip from "@/components/hero/CredibilityStrip";
import Differentiator from "@/components/differentiator/Differentiator";
import EngineeringPhilosophy from "@/components/philosophy/EngineeringPhilosophy";
import EngineeringStack from "@/components/stack/EngineeringStack";
import Reveal from "@/components/layout/Reveal";

const teasers = [
  {
    href: "/work",
    title: "Selected Systems",
    description: "Case studies of what I've designed and built — coming as real projects are documented.",
  },
  {
    href: "/lab",
    title: "Engineering Lab",
    description: "What I'm currently exploring — experiments, questions, and lessons in progress.",
  },
  {
    href: "/writing",
    title: "Writing",
    description: "Notes on how I think about software, systems, and infrastructure.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />

      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {teasers.map((teaser, i) => (
            <Reveal key={teaser.href} delay={i * 90}>
              <Link
                href={teaser.href}
                className="group block h-full border border-border rounded p-7 transition-colors duration-200 hover:border-border-strong"
              >
                <p className="font-display text-lg text-ink group-hover:text-accent transition-colors duration-200">
                  {teaser.title}
                </p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {teaser.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Differentiator />
      <EngineeringPhilosophy />
      <EngineeringStack />
    </>
  );
}