import { MODULE_GROUPS } from "../constants.js";
import { createElement } from "../core/dom.js";

export function renderSidebar({ activeGroup, onGroupSelect }) {
  const list = createElement("ul", { className: "nav-list" });

  const groups = [{ id: "all", label: "All Modules", icon: "✦" }, ...MODULE_GROUPS];

  groups.forEach((group) => {
    const button = createElement("button", {
      className: `nav-button${activeGroup === group.id ? " is-active" : ""}`,
      attrs: { type: "button", "data-group": group.id },
      children: [
        createElement("span", { text: `${group.icon} ${group.label}` }),
        createElement("span", { text: "›" })
      ]
    });

    button.addEventListener("click", () => onGroupSelect(group.id));
    list.append(createElement("li", { children: [button] }));
  });

  return list;
}
