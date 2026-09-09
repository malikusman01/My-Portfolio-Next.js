import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/layout/EmptyState";
import { writing } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing — Usman Ali Awan",
  description: "Technical notes and writing by Usman Ali Awan.",
};

export default function WritingPage() {
  const articles = writing.filter((w) => w.type === "article");
  const papers = writing.filter((w) => w.type === "research-paper");

  return (
    <div className="container-page pb-24">
      <PageHeader
        title="Writing"
        subtitle="Notes on how I think about software, systems, and infrastructure."
      />

      <section>
        <h2 className="text-display-md">Articles</h2>
        <div className="mt-6">
          {articles.length === 0 ? (
            <EmptyState
              title="Nothing published yet"
              description="Technical notes on API design, IT operations, and building full-stack systems will land here — only once there's real substance to share."
            />
          ) : (
            <div className="grid gap-4">
              {articles.map((a) => (
                <div key={a.slug} className="border border-border rounded p-6">
                  <p className="font-display text-ink">{a.title}</p>
                  <p className="mt-2 text-sm text-ink-muted">{a.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-display-md">Research</h2>
        <div className="mt-6">
          {papers.length === 0 ? (
            <EmptyState
              title="A research paper is in the works"
              description="A longer-form technical paper is planned. It will be linked here once it's written."
            />
          ) : (
            <div className="grid gap-4">
              {papers.map((p) => (
                <div key={p.slug} className="border border-border rounded p-6">
                  <p className="font-display text-ink">{p.title}</p>
                  <p className="mt-2 text-sm text-ink-muted">{p.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
