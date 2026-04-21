const equalsBtn = document.getElementById("equals");

equalsBtn.addEventListener("click", () => {
  if (operation === "add" && currentValue !== "") {
    const result = storedValue + Number(currentValue);
    display.textContent = result;

    // reset
    currentValue = String(result);
    storedValue = null;
    operation = null;
  }
});