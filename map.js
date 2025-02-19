// map.js
export function setupMap() {
  const mapOverlay = document.querySelector(".map-overlay");
  const rob = document.querySelector(".figure-rob");
  const closeButton = document.querySelector(".map-close");
  const externalButton = document.querySelector(".map-external");

  rob.addEventListener("click", () => mapOverlay.classList.add("show"));
  closeButton.addEventListener("click", () =>
    mapOverlay.classList.remove("show")
  );
  externalButton.addEventListener("click", () => {
    window.open(document.querySelector(".map-overlay iframe").src, "_blank");
  });
}
