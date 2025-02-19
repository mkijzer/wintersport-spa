// timer.js
export function createTimer() {
  const timerElement = document.createElement("div");
  timerElement.classList.add("digital-clock");
  document.body.appendChild(timerElement);

  function updateTime() {
    const now = new Date();
    timerElement.textContent = now.toLocaleTimeString("en-US", {
      hour12: false,
    });
  }

  setInterval(updateTime, 1000);
  updateTime();
}
