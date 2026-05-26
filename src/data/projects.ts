export type ProjectType = "hub" | "lab" | "tool" | "project";
export type ProjectStatus = "live" | "experimental" | "planned";

export interface Project {
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  url: string;
  repo?: string;
  description: string;
  stack: string[];
  featured: boolean;
}

export const site = {
  name: "faysk.dev",
  owner: "Faysk",
  role: "developer hub",
  url: "https://faysk.dev",
  githubUrl: "https://github.com/Faysk",
  labUrl: "https://lab.faysk.dev",
  title: "faysk.dev - Developer hub",
  description:
    "A focused home base for Faysk projects, labs, tools and future technical surfaces."
};

export const projectTypes: Array<{ id: "all" | ProjectType; label: string }> = [
  { id: "all", label: "All" },
  { id: "hub", label: "Hub" },
  { id: "lab", label: "Labs" },
  { id: "tool", label: "Tools" },
  { id: "project", label: "Projects" }
];

export const projects: Project[] = [
  {
    name: "faysk.dev",
    type: "hub",
    status: "live",
    url: "https://faysk.dev",
    repo: "https://github.com/Faysk/faysk.dev",
    description:
      "The root domain: identity, selected work, project index and the launch point for the wider Faysk ecosystem.",
    stack: ["Astro", "TypeScript", "Cloudflare Pages"],
    featured: true
  },
  {
    name: "Browser Telemetry Lab",
    type: "lab",
    status: "experimental",
    url: "https://lab.faysk.dev",
    repo: "https://github.com/Faysk/faysk-lab",
    description:
      "A privacy-aware diagnostics interface exploring browser APIs, device capability signals and passive telemetry.",
    stack: ["Browser APIs", "ES Modules", "Safe mode"],
    featured: true
  },
  {
    name: "Tools Surface",
    type: "tool",
    status: "planned",
    url: "#",
    description:
      "A future collection of small utilities, internal helpers and polished single-purpose web tools.",
    stack: ["Workers", "D1", "Utilities"],
    featured: false
  },
  {
    name: "Case Studies",
    type: "project",
    status: "planned",
    url: "#",
    description:
      "Selected builds, technical notes, deployment writeups and before-and-after project stories.",
    stack: ["Writing", "Portfolio", "Process"],
    featured: false
  }
];

export const operatingNotes = [
  {
    title: "Root as hub",
    value: "one front door",
    text:
      "The main domain stays calm, fast and focused while each serious surface keeps its own source history."
  },
  {
    title: "Static first",
    value: "fast by default",
    text:
      "Astro outputs static HTML for the hub, with client JavaScript reserved for small targeted interactions."
  },
  {
    title: "Backend later",
    value: "when useful",
    text:
      "Workers, D1 and APIs are saved for features that genuinely need state, forms, auth or automation."
  }
];

export const stackPrinciples = [
  {
    title: "Content-led",
    text:
      "Projects, cases and notes can move into typed content collections without turning the root domain into a heavy app."
  },
  {
    title: "Cloudflare-native",
    text:
      "Pages handles the static site now; Workers and D1 can attach later without changing the public shape of the hub."
  },
  {
    title: "Separate surfaces",
    text:
      "Labs, tools and products can evolve under subdomains with their own repositories, deploy cadence and risk profile."
  }
];

export const ecosystemSurfaces = [
  {
    label: "root",
    domain: "faysk.dev",
    state: "live",
    description: "Identity, index and curated direction."
  },
  {
    label: "lab",
    domain: "lab.faysk.dev",
    state: "experimental",
    description: "Diagnostics, APIs and browser capability research."
  },
  {
    label: "tools",
    domain: "tools.faysk.dev",
    state: "planned",
    description: "Small utilities and focused web tools."
  },
  {
    label: "work",
    domain: "work.faysk.dev",
    state: "planned",
    description: "Case studies, technical writing and selected builds."
  }
];
