export type ProjectType = "hub" | "portfolio" | "lab" | "tool" | "project";
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
  title: "faysk.dev | Projects, labs and tools",
  description:
    "Public index for Faysk projects, labs, tools and technical writing."
};

export const projectTypes: Array<{ id: "all" | ProjectType; label: string }> = [
  { id: "all", label: "All" },
  { id: "hub", label: "Hub" },
  { id: "portfolio", label: "Portfolio" },
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
    name: "LF Airport Transfers",
    type: "portfolio",
    status: "live",
    url: "https://www.lfairporttransfers.co.uk/",
    description:
      "Client website for a London private chauffeur and airport transfer service, focused on premium positioning, airport routes, Mercedes fleet clarity and a direct quote flow.",
    stack: ["Client Website", "Responsive UI", "SEO", "Lead Flow"],
    featured: true
  },
  {
    name: "Thayná Portfolio",
    type: "portfolio",
    status: "live",
    url: "https://thayna.faysk.dev/",
    description:
      "Published client portfolio surface focused on a simple online presence, responsive layout and clean public presentation.",
    stack: ["Client Website", "Portfolio", "Responsive UI"],
    featured: false
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

export const careerTimeline = [
  {
    period: "2026 - Present",
    company: "S4U",
    role: "IT Infrastructure Engineer",
    focus: "Infrastructure architecture, servers, networks, security, monitoring and continuity.",
    stack: ["Windows Server", "Linux", "Networking", "Firewall", "Backup"]
  },
  {
    period: "2025 - Present",
    company: "LF Airport Transfers",
    role: "DevOps & Full-Stack Engineer",
    focus: "Production web platform, booking flow, request management and operational automation.",
    stack: ["Next.js", "React", "TypeScript", "Cloudflare", "SEO"]
  },
  {
    period: "2019 - 2026",
    company: "SAT",
    role: "DevOps Engineer",
    focus: "Cloud infrastructure, automation, CI/CD, containers and production operations.",
    stack: ["Azure", "Terraform", "Docker", "GitHub Actions", "PowerShell"]
  },
  {
    period: "2016 - 2019",
    company: "Oficina de TI",
    role: "IT Infrastructure Support Analyst",
    focus: "Corporate infrastructure, servers, networks, access, security and continuity.",
    stack: ["Windows Server", "Linux", "Active Directory", "Firewall", "Backup"]
  },
  {
    period: "2012 - 2015",
    company: "UpGlobal",
    role: "Software Developer",
    focus: "Web applications, system maintenance, environments and deployment support.",
    stack: ["PHP", "JavaScript", "HTML5", "CSS3", "Apache"]
  },
  {
    period: "2011 - 2012",
    company: "TAM",
    role: "IT Support Technician",
    focus: "Internal technical support, incidents, workstations and corporate infrastructure.",
    stack: ["Windows", "Hardware", "Networks", "Support"]
  }
];
