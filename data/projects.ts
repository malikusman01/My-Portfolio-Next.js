export type ProjectStatus = "shipped" | "in-progress" | "prototype";

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  problem?: string;
  approach?: string;
  architecture?: string;
  features?: string[];
  engineeringDecisions?: string[];
  security?: string;
  lessons?: string;
  status: ProjectStatus;
  github?: string;
  liveDemo?: string;
}

// No case studies published yet — real projects and their documentation
// get added here as entries, and the /work pages render from this list.
export const projects: Project[] = [];
