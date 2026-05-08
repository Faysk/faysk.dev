import { createElement } from "../core/dom.js";

export function createTelemetryCard(module) {
  const statusClass = module.status === "permission-required" ? "permission-required" : module.status;
  const lines = module.items.map((item) => `${item.label}: ${item.value}`).join("\n");

  return createElement("article", {
    className: "telemetry-card is-revealed",
    attrs: {
      "data-group": module.group,
      "data-title": module.title.toLowerCase()
    },
    children: [
      createElement("div", {
        className: "card-top",
        children: [
          createElement("div", {
            children: [
              createElement("div", { className: "card-label", text: module.groupLabel }),
              createElement("h3", { className: "card-title", text: module.title })
            ]
          }),
          createElement("span", {
            className: `status-badge ${statusClass}`,
            text: module.status
          })
        ]
      }),
      createElement("div", {
        className: "card-value",
        text: lines || module.description
      })
    ]
  });
}

export function createEmptyState() {
  return createElement("div", {
    className: "empty-state",
    text: "No telemetry modules match this search."
  });
}
