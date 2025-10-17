const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", (e) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 🤕";
});

myBox.addEventListener("mouseover", (e) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it 🙄";
});

myBox.addEventListener("mouseout", (e) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me😀";
});

myButton.addEventListener("click", (e) => {
  myBox.textContent = "sending...";
  e.target.disabled = true;
});
