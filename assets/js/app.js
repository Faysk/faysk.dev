import { profile, projects, projectTypes } from "./projects.js";

const state = {
  activeType: "all",
  searchTerm: ""
};

function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  if (options.html) element.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([key, value]) => {
      if (value !== "" && !value) return;
      element.setAttribute(key, value);
    });
  }
  if (options.children) {
    options.children.filter(Boolean).forEach((child) => element.append(child));
  }
  return element;
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createLink(label, href, variant = "") {
  const isDisabled = !href || href === "#";
  const isExternal = /^https?:\/\//.test(href || "");
  return createElement("a", {
    className: `button ${variant}`.trim(),
    text: label,
    attrs: {
      href: isDisabled ? "#" : href,
      target: isExternal ? "_blank" : "",
      rel: isExternal ? "noreferrer" : "",
      "aria-disabled": isDisabled ? "true" : ""
    }
  });
}

function matchesProject(project) {
  const matchesType = state.activeType === "all" || project.type === state.activeType;
  const haystack = [
    project.name,
    project.type,
    project.status,
    project.description,
    project.stack.join(" ")
  ].join(" ").toLowerCase();

  return matchesType && haystack.includes(state.searchTerm.toLowerCase());
}

function renderTopbar() {
  return createElement("header", {
    className: "topbar",
    children: [
      createElement("a", {
        className: "brand",
        attrs: { href: "#" },
        children: [
          createElement("span", { className: "brand-mark", text: "FD" }),
          createElement("span", { text: profile.domain })
        ]
      }),
      createElement("nav", {
        className: "nav-links",
        attrs: { "aria-label": "Primary navigation" },
        children: [
          createElement("a", { text: "Projects", attrs: { href: "#projects" } }),
          createElement("a", { text: "System", attrs: { href: "#system" } }),
          createElement("a", { text: "Lab", attrs: { href: profile.labUrl } }),
          createElement("a", { text: "GitHub", attrs: { href: profile.githubUrl, target: "_blank", rel: "noreferrer" } })
        ]
      }),
      createElement("div", {
        className: "topbar-actions",
        children: [
          createLink("Open Lab", profile.labUrl),
          createLink("GitHub", profile.githubUrl, "button-primary")
        ]
      })
    ]
  });
}

function renderHero() {
  const featuredCount = projects.filter((project) => project.featured).length;
  const liveCount = projects.filter((project) => project.status === "live").length;

  return createElement("section", {
    className: "hero",
    children: [
      createElement("div", {
        className: "hero-panel",
        children: [
          createElement("div", { className: "eyebrow", text: "Developer Hub" }),
          createElement("h1", {
            className: "hero-title",
            html: `${profile.name}<span>${profile.domain}</span>`
          }),
          createElement("p", { className: "hero-copy", text: profile.summary }),
          createElement("div", {
            className: "hero-actions",
            children: [
              createLink("Explore Projects", "#projects", "button-primary"),
              createLink("Open Browser Lab", profile.labUrl)
            ]
          }),
          createElement("div", {
            className: "signal-list",
            children: [
              createMetric("Live", liveCount),
              createMetric("Featured", featuredCount),
              createMetric("Mode", "Static")
            ]
          })
        ]
      }),
      createElement("aside", {
        className: "orbit-panel",
        attrs: { "aria-label": "Domain map" },
        children: [
          createElement("div", {
            className: "orbit",
            children: [
              createElement("span", { className: "orbit-core", text: "HUB" }),
              createElement("span", { className: "orbit-node node-top", text: "lab" }),
              createElement("span", { className: "orbit-node node-right", text: "tools" }),
              createElement("span", { className: "orbit-node node-bottom", text: "work" }),
              createElement("span", { className: "orbit-node node-left", text: "api" })
            ]
          })
        ]
      })
    ]
  });
}

function createMetric(label, value) {
  return createElement("div", {
    className: "signal",
    children: [
      createElement("span", { className: "eyebrow", text: label }),
      createElement("strong", { text: String(value) })
    ]
  });
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
      className: `filter-button ${state.activeType === type.id ? "is-active" : ""}`,
      text: type.label,
      attrs: { type: "button" }
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
    attrs: { id: slug(project.name) },
    children: [
      createElement("div", {
        className: "project-top",
        children: [
          createElement("div", {
            children: [
              createElement("span", { className: "project-type", text: project.type }),
              createElement("h3", { className: "project-title", text: project.name })
            ]
          }),
          createElement("span", {
            className: `project-status status-${project.status}`,
            text: project.status
          })
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
          createLink("Open", project.url, "button-primary"),
          project.repo ? createLink("Repo", project.repo) : null
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
          createElement("div", {
            children: [
              createElement("div", { className: "eyebrow", text: "Index" }),
              createElement("h2", { className: "section-title", text: "Projects and labs" }),
              createElement("p", {
                className: "section-copy",
                text: "The root domain stays small and intentional. Bigger work gets its own repo, deploy and subdomain."
              })
            ]
          })
        ]
      }),
      filters,
      grid
    ]
  });
}

function renderSystemSection() {
  const items = [
    {
      title: "Independent repos",
      text: "Major projects can ship, break, recover and evolve without touching the main hub."
    },
    {
      title: "Subdomain map",
      text: "The hub links outward to labs, tools, case studies and future products under the faysk.dev namespace."
    },
    {
      title: "Backend later",
      text: "The current hub is static. APIs, D1 and Workers can be added only when there is a real product need."
    }
  ];

  return createElement("section", {
    className: "section",
    attrs: { id: "system" },
    children: [
      createElement("div", { className: "eyebrow", text: "Architecture" }),
      createElement("h2", { className: "section-title", text: "Built to split cleanly" }),
      createElement("p", {
        className: "section-copy",
        text: "This keeps faysk.dev as the front door while every serious project can own its repository, versioning and Cloudflare Pages deployment."
      }),
      createElement("div", {
        className: "system-grid",
        children: items.map((item) => createElement("article", {
          className: "system-card",
          children: [
            createElement("h3", { text: item.title }),
            createElement("p", { text: item.text })
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
              createElement("a", { className: "text-link", text: "Lab", attrs: { href: profile.labUrl } })
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

  root.append(createElement("div", {
    className: "site-shell",
    children: [
      renderTopbar(),
      renderHero(),
      renderProjectsSection(),
      renderSystemSection(),
      renderFooter()
    ]
  }));
}

boot();
