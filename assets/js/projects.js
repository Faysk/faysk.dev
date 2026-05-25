export const profile = {
  name: "Faysk",
  domain: "faysk.dev",
  headline: "Developer hub for projects, labs and experiments.",
  summary:
    "A home base for what I build: production projects, visual experiments, browser labs, tools and future case studies.",
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
      "The main identity hub for Faysk: projects, labs, tools, links and future case studies.",
    stack: ["HTML", "CSS", "Vanilla JS", "Cloudflare Pages"],
    featured: true
  },
  {
    name: "Browser Telemetry Lab",
    type: "lab",
    status: "experimental",
    url: "https://lab.faysk.dev",
    repo: "https://github.com/Faysk/faysk-lab",
    description:
      "A privacy-aware browser diagnostics experiment with passive telemetry, capability cards and a cyberpunk interface.",
    stack: ["ES Modules", "Browser APIs", "Static Site", "Cloudflare Pages"],
    featured: true
  },
  {
    name: "Tools",
    type: "tool",
    status: "planned",
    url: "#",
    repo: "",
    description:
      "A future collection of focused utilities, internal helpers and small public web tools.",
    stack: ["Planned", "Workers", "D1"],
    featured: false
  },
  {
    name: "Case Studies",
    type: "project",
    status: "planned",
    url: "#",
    repo: "",
    description:
      "A future portfolio area for selected builds, technical decisions, before-and-after notes and deployment details.",
    stack: ["Portfolio", "Writing", "Process"],
    featured: false
  }
];
