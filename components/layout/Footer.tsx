import LiveClock from "./LiveClock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-sm text-ink">Usman Ali Awan</p>
          <p className="text-sm text-ink-muted mt-1">
            <LiveClock />
          </p>
        </div>

        <div className="flex gap-6 text-sm text-ink-muted">
          <a href="mailto:i.usman.ali85@gmail.com" className="hover:text-ink">
            Email
          </a>
          <a
            href="https://linkedin.com/in/malik-usman-4607b6294"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
        </div>

        <p className="text-xs text-ink-faint">© {year} Usman Ali Awan</p>
      </div>
    </footer>
  );
}
