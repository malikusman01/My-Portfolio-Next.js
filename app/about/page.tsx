import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/layout/Reveal";
import { experience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About — Usman Ali Awan",
  description: "Software Engineer in Islamabad, Pakistan, working across software and IT infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="container-page pb-24">
      <PageHeader title="About" />

      <Reveal>
        <div className="max-w-[68ch] space-y-6 text-ink-muted leading-relaxed">
          <p>
            I started with software engineering — building web applications,
            designing APIs, working through the frontend-to-database stack.
            Alongside that, I've spent time managing real IT infrastructure:
            the networks, business applications, and operational systems that
            software actually has to run on.
          </p>
          <p>
            That combination changes how I think about building things. Code
            that works in isolation is only half the job — it has to survive
            real infrastructure, real constraints, and the operational
            realities of a business. I try to design with that in mind from
            the start.
          </p>
          <p>
            I'm currently based in Islamabad, Pakistan, continuing to build
            full-stack systems while picking up new tools and deepening the
            ones I already use.
          </p>
        </div>
      </Reveal>

      <section className="mt-16">
        <h2 className="text-display-md">Education</h2>
        <Reveal>
          <div className="mt-4 border-t border-border pt-4">
            <p className="text-ink">{education.degree}</p>
            <p className="text-sm text-ink-muted mt-1">
              {education.institution} — {education.period}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <h2 className="text-display-md">Experience</h2>
        <div className="mt-4 divide-y divide-border border-t border-border">
          {experience.map((entry, i) => (
            <Reveal key={`${entry.role}-${entry.org}`} delay={i * 60}>
              <div className="py-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <p className="text-ink font-medium">{entry.role}</p>
                  <p className="text-sm text-ink-faint">{entry.period}</p>
                </div>
                <p className="text-sm text-ink-muted mt-1">
                  {entry.org} — {entry.location}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="text-sm text-ink-muted leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}