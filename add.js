const display = document.getElementById("display");
const addBtn = document.getElementById("add");

let currentValue = "";
let storedValue = null;
let operation = null;

addBtn.addEventListener("click", () => {
  if (currentValue === "") return;

  storedValue = Number(currentValue);
  currentValue = "";
  operation = "add";

  display.textContent = storedValue + " +";
});