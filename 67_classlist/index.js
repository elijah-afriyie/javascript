const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");
let buttons = document.querySelectorAll(".myButtons");

/*
myButton.addEventListener("mouseover", function (e) {
    e.target.classList.add("hover");
});
myButton.addEventListener("mouseout", function (e) {
    e.target.classList.remove("hover");
});

myButton.addEventListener("mouseover", function (e) {
    e.target.classList.toggle("hover");
});

myH1.classList.add("enabled");
myH1.addEventListener("click", (e) => {
    if (e.target.classList.contains("disabled")) {
        e.target.textContent += "🤬";
    } else {
        e.target.classList.replace("enabled", "disabled");
    }
});

myButton.classList.add("enabled");
myButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("disabled")) {
        e.target.textContent += "🤬";
    } else {
        e.target.classList.replace("enabled", "disabled");
    }
});

 */

buttons.forEach(button => {
    button.addEventListener("mouseover", (e) => {
        e.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.classList.add("enabled");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.classList.contains("disabled")) {
            e.target.textContent += "🤬";
        } else {
            e.target.classList.replace("enabled", "disabled");
        }
    });
});

