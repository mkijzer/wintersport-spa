// figures.js
export function setupFigures() {
  const figures = document.querySelectorAll(".figures img");

  figures.forEach((figure) => {
    // Handle click events
    figure.addEventListener("click", (e) => {
      e.stopPropagation();
      figures.forEach((f) => {
        if (f !== figure) {
          f.classList.toggle("gray");
        }
      });
      console.log("Clicked:", figure.className);
    });

    // Handle hover events
    figure.addEventListener("mouseenter", () => {
      figures.forEach((f) => {
        if (f !== figure) {
          f.classList.add("gray");
        }
      });
    });

    figure.addEventListener("mouseleave", () => {
      figures.forEach((f) => {
        f.classList.remove("gray");
      });
    });
  });
}
