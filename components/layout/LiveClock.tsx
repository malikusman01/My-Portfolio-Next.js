"use client";

import { useEffect, useState } from "react";

function getIslamabadInfo() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    hour12: false,
    weekday: "short",
  });

  const time = formatter.format(now);
  const parts = hourFormatter.formatToParts(now);
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const isWeekday = !["Sat", "Sun"].includes(weekday);
  const likelyReachable = isWeekday && hour >= 9 && hour < 21;

  return { time, likelyReachable };
}

export default function LiveClock() {
  const [info, setInfo] = useState<{ time: string; likelyReachable: boolean } | null>(null);

  useEffect(() => {
    setInfo(getIslamabadInfo());
    const interval = setInterval(() => setInfo(getIslamabadInfo()), 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!info) {
    return (
      <span className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Islamabad, Pakistan
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          info.likelyReachable ? "bg-accent" : "bg-ink-faint"
        }`}
      />
      Islamabad, PK — {info.time} local
      {info.likelyReachable ? " · usually reachable" : ""}
    </span>
  );
}