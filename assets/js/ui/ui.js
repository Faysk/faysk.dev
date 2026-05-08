import { APP_NAME, APP_VERSION, BUILD_NAME } from "../constants.js";
import { createElement, qs, clear } from "../core/dom.js";
import { log } from "../core/logger.js";
import { getState, setState } from "../state.js";
import { collectTelemetry } from "../modules/index.js";
import { createEmptyState, createTelemetryCard } from "./cards.js";
import { renderSidebar } from "./sidebar.js";
import { renderTerminal } from "./terminal.js";
import { bindSearch } from "./search.js";

function renderHero() {
  const scanButton = createElement("button", {
    className: "primary-button",
    attrs: { id: "scan-button", type: "button" },
    text: "Start Scan"
  });

  const terminalButton = createElement("button", {
    className: "secondary-button",
    attrs: { id: "terminal-button", type: "button" },
    text: "Open Terminal"
  });

  scanButton.addEventListener("click", () => {
    const telemetry = collectTelemetry();
    const nextCount = getState().scanCount + 1;
    setState({ telemetry, scanCount: nextCount });
    log(`Safe scan ${nextCount} completed without permission prompts.`, "info");
  });

  terminalButton.addEventListener("click", () => {
    qs("#live-terminal")?.scrollIntoView({ behavior: "smooth", block: "center" });
    log("Terminal focused.", "info");
  });

  return createElement("section", {
    attrs: { id: "hero" },
    children: [
      createElement("div", {
        className: "hero-left is-revealed",
        children: [
          createElement("div", { className: "hero-badge", text: "Advanced Browser Intelligence" }),
          createElement("h1", {
            className: "hero-title",
            html: "Browser Telemetry <span class=\"hero-highlight\">Reimagined</span>"
          }),
          createElement("p", {
            className: "hero-description",
            text: "A futuristic browser intelligence interface focused on diagnostics, capability checks, privacy-aware telemetry and modular UI systems."
          }),
          createElement("div", {
            className: "hero-actions",
            children: [scanButton, terminalButton]
          })
        ]
      }),
      createElement("div", {
        className: "hero-right is-revealed",
        children: [
          createElement("div", {
            className: "hero-stats-grid",
            children: [
              createStat("PRIVACY SCORE", "SAFE", 74),
              createStat("ENTROPY", "READY"),
              createStat("SECURITY", "STABLE"),
              createStat("TELEMETRY", "ACTIVE")
            ]
          })
        ]
      })
    ]
  });
}

function createStat(label, value, progress = null) {
  return createElement("div", {
    className: "hero-stat-card",
    children: [
      createElement("div", { className: "stat-label", text: label }),
      createElement("div", { className: "stat-value", text: value }),
      progress === null ? "" : createElement("div", {
        className: "stat-progress",
        children: [
          createElement("div", {
            className: "stat-progress-bar",
            attrs: { style: `width:${progress}%` }
          })
        ]
      })
    ].filter(Boolean)
  });
}

function renderOverlay() {
  return createElement("section", {
    attrs: { id: "performance-overlay" },
    children: [
      createOverlayCard("FPS", "60", "fps-counter"),
      createOverlayCard("LATENCY", "0ms", "latency-counter"),
      createOverlayCard("MEMORY", "--", "memory-counter")
    ]
  });
}

function createOverlayCard(label, value, id) {
  return createElement("div", {
    className: "overlay-card",
    children: [
      createElement("div", { className: "overlay-title", text: label }),
      createElement("div", { attrs: { id }, text: value })
    ]
  });
}

function renderFooter() {
  return createElement("footer", {
    attrs: { id: "footer" },
    children: [
      createElement("div", {
        className: "footer-left",
        children: [
          createElement("div", { className: "footer-logo", text: APP_NAME }),
          createElement("div", { className: "footer-description", text: "Browser Intelligence & Telemetry Interface" })
        ]
      }),
      createElement("div", {
        className: "footer-right",
        children: [
          createElement("div", { className: "footer-item", text: BUILD_NAME }),
          createElement("div", { className: "footer-item", text: "Vanilla JS" }),
          createElement("div", { className: "footer-item", text: "Experimental" })
        ]
      })
    ]
  });
}

function renderShell() {
  const state = getState();
  const searchInput = createElement("input", {
    attrs: {
      type: "text",
      id: "search-input",
      placeholder: "Search modules...",
      autocomplete: "off"
    }
  });

  const sidebarNav = createElement("nav", { attrs: { id: "sidebar-nav" } });
  sidebarNav.append(renderSidebar({
    activeGroup: state.activeGroup,
    onGroupSelect: (activeGroup) => setState({ activeGroup })
  }));

  const sidebar = createElement("aside", {
    attrs: { id: "sidebar" },
    children: [
      createElement("div", {
        className: "sidebar-top",
        children: [
          createElement("div", {
            className: "logo-container",
            children: [
              createElement("div", { className: "logo-glow" }),
              createElement("h1", { className: "logo-text", text: APP_NAME })
            ]
          }),
          createElement("p", { className: "sidebar-description", text: "Browser Intelligence Interface" })
        ]
      }),
      createElement("div", {
        className: "sidebar-status",
        children: [
          createElement("div", {
            className: "status-card",
            children: [
              createElement("span", { className: "status-dot" }),
              createElement("span", { className: "status-text", text: "ONLINE" })
            ]
          })
        ]
      }),
      createElement("div", { className: "sidebar-search", children: [searchInput] }),
      sidebarNav,
      createElement("div", {
        className: "sidebar-footer",
        children: [
          createElement("div", { className: "sidebar-version", text: APP_VERSION }),
          createElement("div", { className: "sidebar-build", text: BUILD_NAME })
        ]
      })
    ]
  });

  const grid = createElement("section", { attrs: { id: "telemetry-grid" } });
  const main = createElement("main", {
    attrs: { id: "main-content" },
    children: [renderHero(), renderTerminal(), grid, renderOverlay(), renderFooter()]
  });

  const shell = createElement("div", {
    className: "app-shell",
    children: [sidebar, main]
  });

  bindSearch(searchInput);
  return shell;
}

function renderTelemetryGrid() {
  const grid = qs("#telemetry-grid");
  if (!grid) return;

  const { telemetry, activeGroup, searchTerm } = getState();
  const filtered = telemetry.filter((module) => {
    const matchesGroup = activeGroup === "all" || module.group === activeGroup;
    const haystack = `${module.title} ${module.groupLabel} ${module.description}`.toLowerCase();
    const matchesSearch = !searchTerm || haystack.includes(searchTerm);
    return matchesGroup && matchesSearch;
  });

  clear(grid);
  if (!filtered.length) {
    grid.append(createEmptyState());
    return;
  }

  filtered.forEach((module) => grid.append(createTelemetryCard(module)));
}

function updateSidebar() {
  const nav = qs("#sidebar-nav");
  if (!nav) return;
  clear(nav);
  nav.append(renderSidebar({
    activeGroup: getState().activeGroup,
    onGroupSelect: (activeGroup) => setState({ activeGroup })
  }));
}

function updateOverlay() {
  const state = getState();
  qs("#fps-counter").textContent = "60";
  qs("#latency-counter").textContent = `${Math.round(performance.now() % 90)}ms`;
  qs("#memory-counter").textContent = performance.memory
    ? `${Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)} MB`
    : `${state.telemetry.length} modules`;
}

export function initUI(root) {
  clear(root);
  root.append(renderShell());

  setState({ telemetry: collectTelemetry() });
  renderTelemetryGrid();
  updateOverlay();

  return {
    renderTelemetryGrid,
    updateSidebar,
    updateOverlay
  };
}
