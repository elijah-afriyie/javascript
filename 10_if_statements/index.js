const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = "You are too old";
  } else if (age == 0) {
    resultElement.textContent = "You were just born";
  } else if (age >= 18) {
    resultElement.textContent = "You are an adult";
  } else if (age < 0) {
    resultElement.textContent = "Your age can't be below 0";
  } else {
    resultElement.textContent = "You must be 18+ to be here";
  }
};
