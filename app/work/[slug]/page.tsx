import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-page pt-14 md:pt-20 pb-24 max-w-[75ch]">
      <Link href="/work" className="text-sm text-ink-muted hover:text-ink">
        ← Selected Systems
      </Link>
      <h1 className="text-display-lg mt-6">{project.title}</h1>
      <p className="mt-4 text-ink-muted">{project.description}</p>

      {project.problem && (
        <section className="mt-12">
          <h2 className="text-display-md">The Problem</h2>
          <p className="mt-3 text-ink-muted leading-relaxed">{project.problem}</p>
        </section>
      )}

      {project.architecture && (
        <section className="mt-12">
          <h2 className="text-display-md">System Architecture</h2>
          <p className="mt-3 text-ink-muted leading-relaxed">{project.architecture}</p>
        </section>
      )}

      {project.lessons && (
        <section className="mt-12">
          <h2 className="text-display-md">What I Learned</h2>
          <p className="mt-3 text-ink-muted leading-relaxed">{project.lessons}</p>
        </section>
      )}
    </div>
  );
}
