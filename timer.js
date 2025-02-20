// timer.js
export function createTimer() {
  const timerElement = document.createElement("div");
  timerElement.classList.add("digital-clock");
  document.body.appendChild(timerElement);

  const targetDate = new Date("2025-03-08T00:00:00");

  function updateTime() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      timerElement.textContent = "Countdown Complete!";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Create HTML structure with spans for numbers and labels
    timerElement.innerHTML = `
      <div class="time-unit">
        <span class="number">${days}</span>
        <span class="label">days</span>
      </div>
      <div class="time-unit">
        <span class="number">${hours}</span>
        <span class="label">hours</span>
      </div>
      <div class="time-unit">
        <span class="number">${minutes}</span>
        <span class="label">minutes</span>
      </div>
      <div class="time-unit">
        <span class="number">${seconds}</span>
        <span class="label">seconds</span>
      </div>
    `;
  }

  setInterval(updateTime, 1000);
  updateTime();
}
