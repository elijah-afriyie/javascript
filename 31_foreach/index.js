let display = document.getElementById("display");

let cars = [
  "toyota",
  "honda",
  "ford",
  "chevrolet",
  "nissan",
  "bmw",
  "mercedes",
  "audi",
  "volkswagen",
  "hyundai",
];

cars.forEach(capitalize);
cars.forEach(displayCars);

function capitalize(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function displayCars(element) {
  console.log(element);
}
