// ── js/search.js ──
// Global search that filters across ALL sections simultaneously.

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

  items.forEach((item) => {
    const text = (item.dataset.search || "").toLowerCase();
    const matches = !query || text.includes(query);

    item.classList.toggle("search-hidden", !matches);
    if (matches) totalVisible++;
  });

  // Update banner result count
  const resultText = document.getElementById("searchResultsText");
  if (resultText && query) {
    resultText.textContent = `Found ${totalVisible} result${totalVisible !== 1 ? "s" : ""} for "${query}"`;
  }

  // Show no-results message if needed
  document.querySelectorAll(".no-results").forEach((el) => {
    const parent = el.closest(".accordion-body-inner") || el.parentElement;
    const visibleInSection = parent
      ? parent.querySelectorAll("[data-search]:not(.search-hidden)").length
      : 1;
    el.classList.toggle("visible", query.length > 0 && visibleInSection === 0);
  });
}

export function getActiveQuery() {
  return activeQuery;
}
