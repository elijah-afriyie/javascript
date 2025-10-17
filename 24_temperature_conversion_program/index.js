const userInput = document.getElementById("userInput");
const degC = document.getElementById("degC");
const degF = document.getElementById("degF");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(userInput.value);
  if (isNaN(temp) || temp == "") {
    alert("Please enter a valid number");
  } else if (degC.checked) {
    const fahrenheit = (temp * 9) / 5 + 32;
    alert(`${temp}°C is ${fahrenheit.toFixed(2)}°F`);
  } else if (degF.checked) {
    const celsius = ((temp - 32) * 5) / 9;
    alert(`${temp}°F is ${celsius.toFixed(2)}°C`);
  } else {
    alert("Please select a temperature unit to convert from");
  }
});
