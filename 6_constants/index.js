const pi = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("radius").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById(
    "circumference"
  ).textContent = `Circumference: ${circumference} cm`;
};
