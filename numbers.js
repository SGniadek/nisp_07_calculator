const numberButtons = document.querySelectorAll("[data-num]");

numberButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentValue += btn.dataset.num;
    display.textContent = currentValue;
  });
});
