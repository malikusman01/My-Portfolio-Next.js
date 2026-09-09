import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Contact — Usman Ali Awan",
  description: "Get in touch with Usman Ali Awan.",
};

export default function ContactPage() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        title="Let's build something useful."
        subtitle="Open to software engineering opportunities, technically challenging projects, and conversations around building better systems."
      />

      <div className="flex flex-col gap-4 max-w-sm">
        <a
          href="mailto:i.usman.ali85@gmail.com"
          className="border border-border rounded px-5 py-4 text-ink hover:border-border-strong flex items-center justify-between"
        >
          Email me
          <span className="text-ink-muted text-sm">i.usman.ali85@gmail.com</span>
        </a>
        <a
          href="https://linkedin.com/in/malik-usman-4607b6294"
          target="_blank"
          rel="noreferrer"
          className="border border-border rounded px-5 py-4 text-ink hover:border-border-strong flex items-center justify-between"
        >
          LinkedIn
          <span className="text-ink-muted text-sm">→</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="border border-border rounded px-5 py-4 text-ink hover:border-border-strong flex items-center justify-between"
        >
          GitHub
          <span className="text-ink-faint text-xs">add your profile URL</span>
        </a>
      </div>
    </div>
  );
}
