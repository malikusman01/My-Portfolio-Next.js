import Link from "next/link";
import ArchitectureFlow from "./ArchitectureFlow";
import RoleRotator from "./RoleRotator";
import LiveClock from "@/components/layout/LiveClock";

export default function Hero() {
  return (
    <section className="container-page pt-12 pb-20 sm:pt-16 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-[1fr_auto] gap-14 md:gap-10 items-start">
        <div>
          <h1
            className="text-display-xl animate-[fadeInUp_700ms_ease_both]"
            style={{ animationDelay: "0ms" }}
          >
            I build software that makes complex operations simple.
          </h1>

          <p
            className="mt-6 text-lg text-ink-muted animate-[fadeInUp_700ms_ease_both]"
            style={{ animationDelay: "100ms" }}
          >
            <RoleRotator /> — Full-Stack, Systems, APIs, Infrastructure
          </p>

          <p
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink-muted animate-[fadeInUp_700ms_ease_both]"
            style={{ animationDelay: "180ms" }}
          >
            I design and build practical software systems across the
            frontend, backend, APIs, and data layer — with hands-on
            experience in the IT environments those systems actually run in.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-[fadeInUp_700ms_ease_both]"
            style={{ animationDelay: "260ms" }}
          >
            <Link
              href="/work"
              className="rounded border border-ink/20 bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-200 hover:bg-ink/90"
            >
              Explore my work
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-border px-5 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-border-strong"
            >
              View GitHub
            </a>
            
              href="/resume-usman-ali-awan.pdf"
              className="text-sm text-ink-muted hover:text-ink underline underline-offset-4 transition-colors duration-200"
            <a>
              Download resume
            </a>
          </div>

          <p
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted animate-[fadeInUp_700ms_ease_both]"
            style={{ animationDelay: "340ms" }}
          >
            <LiveClock />
            <span className="text-ink-faint">· open to software engineering opportunities</span>
          </p>
        </div>

        <div
          className="hidden md:block pt-2 animate-[fadeIn_900ms_ease_both]"
          style={{ animationDelay: "200ms" }}
          aria-hidden="false"
        >
          <ArchitectureFlow />
        </div>
      </div>
    </section>
  );
}