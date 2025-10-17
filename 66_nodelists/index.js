let buttons = document.querySelectorAll(".buttons");

console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "lightgreen";
    button.textContent += "🥳";
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = "lightgreen";
            button.style.backgroundColor = "tomato";
        });
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", (e) => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = "lightgreen";
            button.style.backgroundColor = "yellow";
        });
    });
});

/*

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "buttons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".buttons");
console.log(buttons);
 */

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.remove();
        buttons = document.querySelectorAll(".buttons");
    });
});

