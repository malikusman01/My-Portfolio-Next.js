import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-left">
      <p className="text-sm text-accent">404</p>
      <h1 className="text-display-lg mt-4">This route doesn't exist.</h1>
      <p className="mt-4 max-w-[48ch] text-ink-muted">
        The page you're looking for either moved or was never built. Try one
        of the sections below.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded border border-ink/20 bg-ink px-5 py-2.5 text-sm font-medium text-bg hover:bg-ink/90"
        >
          Back home
        </Link>
        <Link
          href="/work"
          className="rounded border border-border px-5 py-2.5 text-sm text-ink hover:border-border-strong"
        >
          Selected Systems
        </Link>
      </div>
    </div>
  );
}