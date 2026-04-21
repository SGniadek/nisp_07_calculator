const divideBtn = document.getElementById("divide");

divideBtn.addEventListener("click", () => {
  if (currentValue === "") return;

  storedValue = Number(currentValue);
  currentValue = "";
  operation = "divide";

  display.textContent = storedValue + " ÷";
});