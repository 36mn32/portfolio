(() => {
  const root = document.documentElement;
  const storageKey = "portfolio-theme";
  let theme = "light";

  try {
    if (localStorage.getItem(storageKey) === "dark") theme = "dark";
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  const applyTheme = () => {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#111c24" : "#f6f5f0";
  };

  applyTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const updateButton = () => {
      button.setAttribute("aria-pressed", String(theme === "dark"));
    };

    updateButton();
    button.hidden = false;
    button.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme();
      updateButton();
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // Keep the selected theme for this page even without storage.
      }
    });
  });
})();
