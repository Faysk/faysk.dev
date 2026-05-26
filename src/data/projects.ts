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
  name: "Faysk DevOps",
  owner: "Faysk",
  role: "automation / infrastructure / delivery",
  url: "https://faysk.dev",
  githubUrl: "https://github.com/Faysk",
  labUrl: "https://lab.faysk.dev",
  title: "Faysk DevOps | Automation, CI/CD and Infrastructure",
  description:
    "DevOps portfolio for automation, CI/CD, infrastructure, cloud operations and production-ready delivery."
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
    title: "Delivery",
    value: "ship reliably",
    text:
      "Pipelines, release flow and deployment paths designed to reduce manual steps and production surprises."
  },
  {
    title: "Infrastructure",
    value: "codify repeatability",
    text:
      "Cloud, servers, networking and security shaped into repeatable, documented and maintainable systems."
  },
  {
    title: "Operations",
    value: "observe and recover",
    text:
      "Monitoring, troubleshooting, backup routines and incident response patterns for stable environments."
  }
];

export const stackPrinciples = [
  {
    title: "CI/CD and automation",
    text:
      "GitHub Actions, Azure DevOps, scripts and deployment routines that keep delivery predictable."
  },
  {
    title: "Infrastructure as Code",
    text:
      "Terraform, cloud configuration, environment setup and operational documentation for repeatable changes."
  },
  {
    title: "Production operations",
    text:
      "Monitoring, logs, troubleshooting, backups, access control and continuity across real environments."
  }
];

export const ecosystemSurfaces = [
  {
    label: "root",
    domain: "faysk.dev",
    state: "live",
    description: "DevOps identity, project index and professional timeline."
  },
  {
    label: "lab",
    domain: "lab.faysk.dev",
    state: "experimental",
    description: "Diagnostics, browser APIs and technical experimentation."
  },
  {
    label: "tools",
    domain: "tools.faysk.dev",
    state: "planned",
    description: "Operational helpers, small utilities and automation surfaces."
  },
  {
    label: "work",
    domain: "work.faysk.dev",
    state: "planned",
    description: "Case studies, client work and delivery notes."
  }
];

export const careerTimeline = [
  {
    stage: "Support",
    icon: "monitor",
    period: "2011 - 2012",
    company: "TAM",
    role: "IT Support Technician",
    focus: "Internal technical support, incidents, workstations and corporate infrastructure.",
    stack: ["Windows", "Hardware", "Networks", "Support"]
  },
  {
    stage: "Build",
    icon: "code",
    period: "2012 - 2015",
    company: "UpGlobal",
    role: "Software Developer",
    focus: "Web applications, system maintenance, environments and deployment support.",
    stack: ["PHP", "JavaScript", "HTML5", "CSS3", "Apache"]
  },
  {
    stage: "Stabilize",
    icon: "server",
    period: "2016 - 2019",
    company: "Oficina de TI",
    role: "IT Infrastructure Support Analyst",
    focus: "Corporate infrastructure, servers, networks, access, security and continuity.",
    stack: ["Windows Server", "Linux", "Active Directory", "Firewall", "Backup"]
  },
  {
    stage: "Automate",
    icon: "cloud",
    period: "2019 - 2026",
    company: "SAT",
    role: "DevOps Engineer",
    focus: "Cloud infrastructure, automation, CI/CD, containers and production operations.",
    stack: ["Azure", "Terraform", "Docker", "GitHub Actions", "PowerShell"]
  },
  {
    stage: "Deliver",
    icon: "pipeline",
    period: "2025 - Present",
    company: "LF Airport Transfers",
    role: "DevOps & Full-Stack Engineer",
    focus: "Production web platform, booking flow, request management and operational automation.",
    stack: ["Next.js", "React", "TypeScript", "Cloudflare", "SEO"]
  },
  {
    stage: "Operate",
    icon: "shield",
    period: "2026 - Present",
    company: "S4U",
    role: "IT Infrastructure Engineer",
    focus: "Infrastructure architecture, servers, networks, security, monitoring and continuity.",
    stack: ["Windows Server", "Linux", "Networking", "Firewall", "Backup"]
  }
];
