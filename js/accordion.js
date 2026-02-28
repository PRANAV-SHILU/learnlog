// ── js/accordion.js ──
// Handles animated slide-down accordion behavior.
// Multiple accordions can be open simultaneously.

/**
 * Initialise all accordions on the page.
 * Call this after all accordion HTML has been injected into the DOM.
 */
export function initAccordions() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () =>
      toggleAccordion(header.closest(".accordion")),
    );
  });
}

/**
 * Toggle a single accordion open/closed.
 * @param {HTMLElement} accordion
 */
export function toggleAccordion(accordion) {
  const isOpen = accordion.classList.contains("open");
  if (isOpen) {
    closeAccordion(accordion);
  } else {
    openAccordion(accordion);
  }
}

export function openAccordion(accordion) {
  accordion.classList.add("open");
}

export function closeAccordion(accordion) {
  accordion.classList.remove("open");
}

/**
 * Open all accordions on page load (optional — not used by default).
 */
export function openAll() {
  document
    .querySelectorAll(".accordion")
    .forEach((a) => a.classList.add("open"));
}

/**
 * Close all accordions.
 */
export function closeAll() {
  document
    .querySelectorAll(".accordion")
    .forEach((a) => a.classList.remove("open"));
}
