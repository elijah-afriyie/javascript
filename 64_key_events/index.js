const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", e => {
    myBox.textContent = "😩";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", e => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", (e) => {
    if (e.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (e.key) {
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break;
            case "ArrowLeft" :
                x -= moveAmount;
                break;
            case "ArrowRight" :
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});