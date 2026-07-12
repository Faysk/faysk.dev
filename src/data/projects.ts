export type ProjectType = "client work" | "lab" | "product";
export type ProjectStatus = "live" | "experiment" | "private";

export interface Project {
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  url: string;
  repo?: string;
  description: string;
  stack: string[];
  featured: boolean;
  image: string;
  imageAlt: string;
}

export const site = {
  name: "Faysk",
  owner: "Faysk",
  role: "DevOps Engineer",
  url: "https://faysk.dev",
  githubUrl: "https://github.com/Faysk",
  labUrl: "https://lab.faysk.dev",
  contactEmail: "contato@faysk.dev",
  title: "Faysk — DevOps Engineer | Infrastructure & CI/CD",
  description:
    "I design, automate and operate reliable infrastructure, CI/CD pipelines and production systems."
};

export const projects: Project[] = [
  {
    name: "LF Airport Transfers",
    type: "client work",
    status: "live",
    url: "https://www.lfairporttransfers.co.uk/",
    image: "/assets/img/projects/lf-airport-transfers.jpg",
    imageAlt: "LF Airport Transfers homepage showing its London chauffeur service",
    description:
      "A production website and direct quote journey for a London chauffeur service, built around clear routes, fleet positioning and qualified enquiries.",
    stack: ["Next.js", "TypeScript", "Cloudflare", "SEO"],
    featured: true
  },
  {
    name: "LaBolita",
    type: "product",
    status: "live",
    url: "https://labolita.faysk.dev/",
    image: "/assets/img/projects/labolita.jpg",
    imageAlt: "LaBolita World Cup dashboard with fixtures, pool ranking and prediction features",
    description:
      "A World Cup companion for fixtures, predictions, private pools and live standings, including a replay of how rankings changed across completed matches.",
    stack: ["Next.js", "Data visualisation", "Responsive UX"],
    featured: true
  },
  {
    name: "Browser Telemetry Lab",
    type: "lab",
    status: "experiment",
    url: "https://lab.faysk.dev",
    repo: "https://github.com/Faysk/faysk-lab",
    image: "/assets/img/projects/browser-telemetry-lab.jpg",
    imageAlt: "Browser Telemetry Lab privacy-aware diagnostics interface",
    description:
      "A privacy-aware diagnostics workspace for exploring browser APIs, device capabilities and passive telemetry without collecting personal data.",
    stack: ["Browser APIs", "ES Modules", "Privacy"],
    featured: true
  },
  {
    name: "DnD Scribe",
    type: "product",
    status: "private",
    url: "https://dnd.faysk.dev/",
    image: "/assets/img/projects/dnd-scribe.jpg",
    imageAlt: "DnD Scribe private campaign workspace sign-in screen",
    description:
      "A private operations workspace for D&D campaigns, combining session notes, Roll20, audio and review workflows behind role-based authentication.",
    stack: ["Supabase", "OAuth", "Operations UI"],
    featured: false
  },
  {
    name: "Thayná Portfolio",
    type: "client work",
    status: "live",
    url: "https://thayna.faysk.dev/",
    image: "/assets/img/projects/thayna-portfolio.jpg",
    imageAlt: "Thayná Borges psychology portfolio homepage",
    description:
      "A compact, responsive portfolio that gives a personal brand a focused and easy-to-maintain online presence.",
    stack: ["Responsive UI", "Portfolio", "Cloudflare"],
    featured: false
  }
];

export const capabilities = [
  {
    title: "Delivery automation",
    text:
      "CI/CD, release paths and scripts that remove manual work while keeping deployments understandable.",
    stack: ["GitHub Actions", "Azure DevOps", "PowerShell"]
  },
  {
    title: "Infrastructure as Code",
    text:
      "Cloud, servers, networking and security shaped into repeatable, documented environments.",
    stack: ["Terraform", "Azure", "Docker"]
  },
  {
    title: "Production operations",
    text:
      "Monitoring, troubleshooting, backups and recovery practices designed for calm, stable operations.",
    stack: ["Observability", "Linux", "Windows Server"]
  }
];

export const careerTimeline = [
  {
    period: "2026 — Present",
    company: "S4U",
    role: "IT Infrastructure Engineer",
    focus: "Infrastructure architecture, servers, networks, security, monitoring and continuity.",
    stack: ["Windows Server", "Linux", "Networking", "Security"]
  },
  {
    period: "2025 — Present",
    company: "LF Airport Transfers",
    role: "DevOps & Full-Stack Engineer",
    focus: "Production web platform, booking flow, request management and operational automation.",
    stack: ["Next.js", "TypeScript", "Cloudflare", "SEO"]
  },
  {
    period: "2019 — 2026",
    company: "SAT",
    role: "DevOps Engineer",
    focus: "Cloud infrastructure, automation, CI/CD, containers and production operations.",
    stack: ["Azure", "Terraform", "Docker", "GitHub Actions", "PowerShell"]
  },
  {
    period: "2016 — 2019",
    company: "Oficina de TI",
    role: "IT Infrastructure Support Analyst",
    focus: "Corporate infrastructure, servers, networks, access, security and continuity.",
    stack: ["Windows Server", "Linux", "Active Directory", "Backup"]
  },
  {
    period: "2012 — 2015",
    company: "UpGlobal",
    role: "Software Developer",
    focus: "Web applications, system maintenance, environments and deployment support.",
    stack: ["PHP", "JavaScript", "HTML", "CSS", "Apache"]
  },
  {
    period: "2011 — 2012",
    company: "TAM",
    role: "IT Support Technician",
    focus: "Internal support, incident handling, workstations and corporate infrastructure.",
    stack: ["Windows", "Hardware", "Networks", "Support"]
  }
];