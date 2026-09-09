import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/layout/EmptyState";
import { lab, type LabStatus } from "@/data/lab";

export const metadata: Metadata = {
  title: "Engineering Lab — Usman Ali Awan",
  description: "What Usman Ali Awan is currently exploring and experimenting with.",
};

const statusLabel: Record<LabStatus, string> = {
  exploring: "Exploring",
  active: "Active",
  paused: "Paused",
  concluded: "Concluded",
};

export default function LabPage() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        title="Engineering Lab"
        subtitle="What I'm currently exploring — experiments, open questions, and lessons still in progress."
      />

      {lab.length === 0 ? (
        <EmptyState
          title="Experiments in progress"
          description="This is where current explorations — new skills, tools, and technical questions — will show up as they take shape, each marked with its real status."
        />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {lab.map((entry) => (
            <div key={entry.slug} className="border border-border rounded p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-ink">{entry.title}</p>
                <span className="text-xs text-accent border border-accent/30 rounded px-2 py-0.5 whitespace-nowrap">
                  {statusLabel[entry.status]}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                <span className="text-ink-faint">Question — </span>
                {entry.question}
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                <span className="text-ink-faint">Approach — </span>
                {entry.approach}
              </p>
              {entry.lesson && (
                <p className="mt-2 text-sm text-ink-muted">
                  <span className="text-ink-faint">Lesson — </span>
                  {entry.lesson}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}