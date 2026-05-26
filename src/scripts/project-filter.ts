function normalize(value: string) {
  return value.trim().toLowerCase();
}

function initProjectFilters() {
  const controls = document.querySelector<HTMLElement>("[data-project-controls]");
  const searchInput = document.querySelector<HTMLInputElement>("[data-project-search-input]");
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-project-filter]"));
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
  const emptyState = document.querySelector<HTMLElement>("[data-project-empty]");
  let activeFilter = "all";

  function syncProjects() {
    const query = normalize(searchInput?.value ?? "");
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const type = card.dataset.projectType ?? "";
      const searchable = card.dataset.projectSearch ?? "";
      const matchesType = activeFilter === "all" || type === activeFilter;
      const matchesQuery = !query || searchable.includes(query);
      const isVisible = matchesType && matchesQuery;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.projectFilter === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  if (controls && projectCards.length) {
    searchInput?.addEventListener("input", syncProjects);

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.projectFilter ?? "all";
        syncProjects();
      });
    });

    syncProjects();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectFilters, { once: true });
} else {
  initProjectFilters();
}
