// spinner.js
export function setupSpinner() {
  const spinnerContainer = document.querySelector(".spinner-container");
  const spinner = document.querySelector(".spinner");
  const alrik = document.querySelector(".figure-alrik");

  let spinning = false;
  let spinDuration = 3000;

  function spin() {
    if (spinning) return;

    spinning = true;
    spinnerContainer.classList.add("show");

    // Simple spin: 5 rotations
    const rotations = 5 * 100; // 5 full rotations (each item is 100%)

    spinner.style.transition = `transform ${spinDuration}ms cubic-bezier(0.5, 0, 0.5, 1)`;
    spinner.style.transform = `translateY(-${rotations}%)`;

    setTimeout(() => {
      spinning = false;
      // Reset without animation
      spinner.style.transition = "none";
      spinner.style.transform = "translateY(0)";
    }, spinDuration);
  }

  alrik.addEventListener("click", spin);
  alrik.addEventListener("mouseenter", spin);
}
