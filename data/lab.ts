export type LabStatus = "exploring" | "active" | "paused" | "concluded";

export interface LabEntry {
  title: string;
  slug: string;
  question: string;
  approach: string;
  status: LabStatus;
  lesson?: string;
}

// No experiments documented yet. Add real entries here as they take
// shape — the /lab page renders from this list.
export const lab: LabEntry[] = [];