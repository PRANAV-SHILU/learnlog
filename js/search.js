// ── js/search.js ──
// Global search that filters across ALL sections simultaneously.

import { openAccordion, closeAll } from "./accordion.js";
let activeQuery = "";

/**
 * Initialise search bar, clear button, and banner.
 */
export function initSearch() {
  const input = document.getElementById("globalSearch");
  const clearBtn = document.getElementById("searchClear");
  const clearBtn2 = document.getElementById("clearSearchBtn");
  const banner = document.getElementById("searchBanner");
  const resultText = document.getElementById("searchResultsText");

  if (!input) return;

  input.addEventListener("input", () => {
    activeQuery = input.value.trim().toLowerCase();
    runSearch(activeQuery);

    // Toggle clear button visibility
    clearBtn.classList.toggle("visible", activeQuery.length > 0);

    // Show / hide banner
    if (activeQuery.length > 0) {
      banner.classList.add("visible");
      resultText.textContent = `Searching for "${input.value.trim()}"`;
    } else {
      banner.classList.remove("visible");
    }
  });

  const clearSearch = () => {
    input.value = "";
    activeQuery = "";
    clearBtn.classList.remove("visible");
    banner.classList.remove("visible");
    runSearch("");
  };

  clearBtn.addEventListener("click", clearSearch);
  clearBtn2?.addEventListener("click", clearSearch);
}

/**
 * Run the search — show/hide searchable items across all sections.
 * @param {string} query
 */
function runSearch(query) {
  const items = document.querySelectorAll("[data-search]");
  let totalVisible = 0;

  closeAll();

  items.forEach((item) => {
    const text = item.dataset.search.toLowerCase();
    const matches = !query || text.includes(query);

    item.classList.toggle("search-hidden", !matches);

    // restore first
    if (item.dataset.original) item.innerHTML = item.dataset.original;

    if (matches) {
      totalVisible++;

      if (query) {
        // save original once
        if (!item.dataset.original) item.dataset.original = item.innerHTML;

        // highlight
        const regex = new RegExp(
          `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
          "gi",
        );
        item.innerHTML = item.dataset.original.replace(
          regex,
          "<mark>$1</mark>",
        );
      }

      const parentAccordion = item.closest(".accordion");
      if (parentAccordion) openAccordion(parentAccordion);
    }
  });

  if (!query) closeAll();
}

export function getActiveQuery() {
  return activeQuery;
}
