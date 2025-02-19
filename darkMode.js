// darkMode.js
export function setupDarkMode() {
  const mike = document.querySelector(".figure-mike");

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  mike.addEventListener("click", toggleDarkMode);
}
