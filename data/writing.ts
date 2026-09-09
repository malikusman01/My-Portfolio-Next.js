export interface WritingEntry {
  title: string;
  slug: string;
  summary: string;
  date: string;
  type: "article" | "research-paper";
}

// No posts published yet. Add real, substantive entries here as they're
// written — this list drives the /writing index.
export const writing: WritingEntry[] = [];
