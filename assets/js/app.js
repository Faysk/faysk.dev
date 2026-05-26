import { operatingNotes, profile, projects, projectTypes } from "./projects.js";

const state = {
  activeType: "all",
  searchTerm: ""
};

function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  const { className, text, html, attrs = {}, children = [] } = options;

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  if (html !== undefined) element.innerHTML = html;

  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      element.setAttribute(key, String(value));
    }
  });

  children.filter(Boolean).forEach((child) => element.append(child));
  return element;
}

function createLink(label, href, variant = "", ariaLabel = "") {
  const disabled = !href || href === "#";
  const external = /^https?:\/\//.test(href || "");
  return createElement("a", {
    className: `button ${variant}`.trim(),
    text: label,
    attrs: {
      href: disabled ? "#" : href,
      target: external ? "_blank" : "",
      rel: external ? "noreferrer" : "",
      "aria-disabled": disabled ? "true" : "",
      "aria-label": ariaLabel
    }
  });
}

function createBrand() {
  return createElement("a", {
    className: "brand",
    attrs: { href: "#" },
    children: [
      createElement("span", { className: "brand-mark", text: "FD" }),
      createElement("span", {
        className: "brand-copy",
        children: [
          createElement("strong", { text: profile.domain }),
          createElement("span", { text: profile.role })
        ]
      })
    ]
  });
}

function renderTopbar() {
  return createElement("header", {
    className: "topbar",
    children: [
      createBrand(),
      createElement("nav", {
        className: "nav-links",
        attrs: { "aria-label": "Primary navigation" },
        children: [
          createElement("a", { text: "Projects", attrs: { href: "#projects" } }),
          createElement("a", { text: "System", attrs: { href: "#system" } }),
          createElement("a", { text: "Lab", attrs: { href: profile.labUrl, target: "_blank", rel: "noreferrer" } }),
          createElement("a", { text: "GitHub", attrs: { href: profile.githubUrl, target: "_blank", rel: "noreferrer" } })
        ]
      }),
      createElement("div", {
        className: "topbar-actions",
        children: [
          createLink("Open Lab", profile.labUrl, "", "Open Browser Telemetry Lab"),
          createLink("GitHub", profile.githubUrl, "button-primary", "Open Faysk on GitHub")
        ]
      })
    ]
  });
}

function createMetaPill(text) {
  return createElement("span", { className: "meta-pill", text });
}

function renderHero() {
  const liveCount = projects.filter((project) => project.status === "live").length;
  const featuredCount = projects.filter((project) => project.featured).length;

  return createElement("section", {
    className: "hero",
    children: [
      createElement("div", {
        className: "hero-card",
        children: [
          createElement("div", { className: "eyebrow", text: "Personal developer system" }),
          createElement("h1", {
            className: "hero-title",
            html: "Useful builds.<span>Clean signals.</span>"
          }),
          createElement("p", { className: "hero-copy", text: profile.summary }),
          createElement("div", {
            className: "hero-actions",
            children: [
              createLink("Explore projects", "#projects", "button-primary"),
              createLink("Visit lab", profile.labUrl)
            ]
          }),
          createElement("div", {
            className: "meta-row",
            children: [
              createMetaPill(`${liveCount} live`),
              createMetaPill(`${featuredCount} featured`),
              createMetaPill("static-first"),
              createMetaPill("cloudflare-ready")
            ]
          })
        ]
      }),
      createElement("aside", {
        className: "orbit-card",
        attrs: { "aria-label": "Faysk domain map" },
        children: [
          createElement("div", {
            className: "domain-map",
            children: [
              createElement("span", { className: "map-core", text: "FAYSK" }),
              createElement("span", { className: "map-node node-top", text: "lab" }),
              createElement("span", { className: "map-node node-right", text: "tools" }),
              createElement("span", { className: "map-node node-bottom", text: "work" }),
              createElement("span", { className: "map-node node-left", text: "api" })
            ]
          })
        ]
      })
    ]
  });
}

function renderBento() {
  return createElement("section", {
    className: "section",
    attrs: { id: "system" },
    children: [
      createElement("div", {
        className: "section-heading",
        children: [
          createElement("div", { className: "eyebrow", text: "Operating model" }),
          createElement("h2", { className: "section-title", text: "A hub that can grow without getting heavy." }),
          createElement("p", {
            className: "section-copy",
            text: "The root site stays simple and fast. Experiments, tools and portfolio pieces can evolve independently under their own subdomains."
          })
        ]
      }),
      createElement("div", {
        className: "bento-grid",
        children: operatingNotes.map((note, index) => createElement("article", {
          className: `bento-card ${index === 0 ? "large" : "small"}`,
          children: [
            createElement("div", { className: "eyebrow", text: note.title }),
            createElement("strong", { className: "bento-value", text: note.value }),
            createElement("p", { text: note.text })
          ]
        }))
      })
    ]
  });
}

function matchesProject(project) {
  const typeMatch = state.activeType === "all" || project.type === state.activeType;
  const haystack = [
    project.name,
    project.type,
    project.status,
    project.description,
    project.stack.join(" ")
  ].join(" ").toLowerCase();
  return typeMatch && haystack.includes(state.searchTerm.toLowerCase());
}

function renderFilters(onUpdate) {
  const input = createElement("input", {
    className: "search-input",
    attrs: {
      type: "search",
      placeholder: "Search projects...",
      "aria-label": "Search projects"
    }
  });

  input.addEventListener("input", () => {
    state.searchTerm = input.value.trim();
    onUpdate();
  });

  const buttons = projectTypes.map((type) => {
    const button = createElement("button", {
      className: `filter-button ${state.activeType === type.id ? "is-active" : ""}`.trim(),
      text: type.label,
      attrs: {
        type: "button",
        "aria-pressed": state.activeType === type.id ? "true" : "false"
      }
    });

    button.addEventListener("click", () => {
      state.activeType = type.id;
      onUpdate();
    });

    return button;
  });

  return createElement("div", {
    className: "filter-row",
    children: [input, ...buttons]
  });
}

function renderProjectCard(project) {
  return createElement("article", {
    className: "project-card",
    children: [
      createElement("div", {
        className: "project-topline",
        children: [
          createElement("span", { className: "project-type", text: project.type }),
          createElement("span", { className: `project-status status-${project.status}`, text: project.status })
        ]
      }),
      createElement("div", {
        children: [
          createElement("div", { className: "eyebrow", text: project.featured ? "Featured" : "Queued" }),
          createElement("h3", { className: "project-title", text: project.name })
        ]
      }),
      createElement("p", { className: "project-description", text: project.description }),
      createElement("div", {
        className: "tag-list",
        children: project.stack.map((item) => createElement("span", { className: "tag", text: item }))
      }),
      createElement("div", {
        className: "project-links",
        children: [
          createLink("Open", project.url, "button-primary", `Open ${project.name}`),
          project.repo ? createLink("Repo", project.repo, "", `Open ${project.name} repository`) : null
        ]
      })
    ]
  });
}

function renderProjectsSection() {
  const grid = createElement("div", { className: "project-grid" });

  function updateGrid() {
    grid.replaceChildren();
    const visible = projects.filter(matchesProject);

    if (!visible.length) {
      grid.append(createElement("div", { className: "empty-state", text: "No projects match this filter yet." }));
      return;
    }

    visible.forEach((project) => grid.append(renderProjectCard(project)));
  }

  const filters = renderFilters(updateGrid);
  updateGrid();

  return createElement("section", {
    className: "section",
    attrs: { id: "projects" },
    children: [
      createElement("div", {
        className: "section-heading",
        children: [
          createElement("div", { className: "eyebrow", text: "Index" }),
          createElement("h2", { className: "section-title", text: "Projects, labs and future surfaces." }),
          createElement("p", {
            className: "section-copy",
            text: "A curated map of what exists now and what can grow next."
          })
        ]
      }),
      filters,
      grid
    ]
  });
}

function renderStackSection() {
  const cards = [
    {
      title: "Static by default",
      text: "Fast first load, low operational cost and fewer deployment surprises."
    },
    {
      title: "Serverless when needed",
      text: "Cloudflare Workers, Pages Functions and D1 can join only when features require backend state."
    },
    {
      title: "Independent surfaces",
      text: "Each subdomain can keep its own repository, release cadence and visual treatment."
    }
  ];

  return createElement("section", {
    className: "section",
    children: [
      createElement("div", { className: "eyebrow", text: "Scale path" }),
      createElement("h2", { className: "section-title", text: "Simple now, extensible later." }),
      createElement("div", {
        className: "stack-grid",
        children: cards.map((card) => createElement("article", {
          className: "stack-card",
          children: [
            createElement("h3", { text: card.title }),
            createElement("p", { text: card.text })
          ]
        }))
      })
    ]
  });
}

function renderFooter() {
  return createElement("footer", {
    className: "footer",
    children: [
      createElement("div", {
        className: "footer-inner",
        children: [
          createElement("span", { text: `${profile.domain} / ${new Date().getFullYear()}` }),
          createElement("div", {
            className: "project-links",
            children: [
              createElement("a", { className: "text-link", text: "GitHub", attrs: { href: profile.githubUrl, target: "_blank", rel: "noreferrer" } }),
              createElement("a", { className: "text-link", text: "Lab", attrs: { href: profile.labUrl, target: "_blank", rel: "noreferrer" } })
            ]
          })
        ]
      })
    ]
  });
}

function boot() {
  const root = document.querySelector("#app");
  if (!root) return;

  root.replaceChildren(createElement("main", {
    className: "site-shell",
    attrs: { id: "main-content" },
    children: [
      renderTopbar(),
      renderHero(),
      renderBento(),
      renderProjectsSection(),
      renderStackSection(),
      renderFooter()
    ]
  }));
}

boot();
