import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/layout/EmptyState";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Systems — Usman Ali Awan",
  description: "Case studies of systems Usman Ali Awan has designed and built.",
};

export default function WorkPage() {
  return (
    <div className="container-page">
      <PageHeader
        title="Selected Systems"
        subtitle="Things I've designed, built, and explored."
      />

      {projects.length === 0 ? (
        <EmptyState
          title="Case studies in progress"
          description="Real project write-ups — problem, architecture, engineering decisions, and lessons learned — are being added here. Check back soon."
        />
      ) : (
        <div className="grid md:grid-cols-2 gap-6 pb-20">
          {projects.map((project) => (
            <div key={project.slug} className="border border-border rounded p-6">
              <p className="font-display text-lg text-ink">{project.title}</p>
              <p className="mt-2 text-sm text-ink-muted">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
