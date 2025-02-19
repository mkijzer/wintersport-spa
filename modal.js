// modal.js
export function setupModal() {
  // Create modal container
  const modal = document.createElement("div");
  modal.className = "info-modal";
  document.body.appendChild(modal);

  // Move info elements into modal
  const weatherInfo = document.querySelector(".weather-info");
  const snowInfo = document.querySelector(".snow-info");
  modal.appendChild(weatherInfo);
  modal.appendChild(snowInfo);

  const joene = document.querySelector(".figure-joene");

  function showModal() {
    modal.classList.add("show");
  }

  function hideModal() {
    modal.classList.remove("show");
  }

  joene.addEventListener("mouseenter", showModal);
  joene.addEventListener("mouseleave", hideModal);
  joene.addEventListener("click", showModal);

  // Close on click outside
  document.addEventListener("click", (e) => {
    if (!modal.contains(e.target) && !joene.contains(e.target)) {
      hideModal();
    }
  });
}
