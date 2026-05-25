export const profile = {
  name: "Faysk",
  domain: "faysk.dev",
  role: "developer hub",
  summary:
    "A focused home base for projects, labs, tools and case studies. Clean on the surface, experimental under the hood.",
  githubUrl: "https://github.com/Faysk",
  labUrl: "https://lab.faysk.dev"
};

export const projectTypes = [
  { id: "all", label: "All" },
  { id: "hub", label: "Hub" },
  { id: "lab", label: "Labs" },
  { id: "tool", label: "Tools" },
  { id: "project", label: "Projects" }
];

export const projects = [
  {
    name: "faysk.dev",
    type: "hub",
    status: "live",
    url: "https://faysk.dev",
    repo: "https://github.com/Faysk/faysk.dev",
    description:
      "The root domain: identity, featured work, project index and the launch point for the wider Faysk ecosystem.",
    stack: ["Static", "Vanilla JS", "Cloudflare Pages"],
    featured: true
  },
  {
    name: "Browser Telemetry Lab",
    type: "lab",
    status: "experimental",
    url: "https://lab.faysk.dev",
    repo: "https://github.com/Faysk/faysk-lab",
    description:
      "A privacy-aware diagnostics interface that explores browser APIs, device capability signals and passive telemetry.",
    stack: ["Browser APIs", "ES Modules", "Safe mode"],
    featured: true
  },
  {
    name: "Tools Surface",
    type: "tool",
    status: "planned",
    url: "#",
    repo: "",
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
    repo: "",
    description:
      "A place for selected builds, technical notes, deployment writeups and before-and-after project stories.",
    stack: ["Writing", "Portfolio", "Process"],
    featured: false
  }
];

export const operatingNotes = [
  {
    title: "Separate repos",
    value: "clean deploys",
    text: "Each serious project gets its own source history, preview deploys and Cloudflare configuration."
  },
  {
    title: "Root as hub",
    value: "one front door",
    text: "The main domain stays lightweight and points visitors toward the right project or experiment."
  },
  {
    title: "Backend later",
    value: "when useful",
    text: "Workers, D1 and APIs are reserved for features that actually need state, forms or auth."
  }
];
