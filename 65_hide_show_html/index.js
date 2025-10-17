const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (e) => {
    if (myImg.style.visibility === "hidden") {
        myButton.textContent = "Hide";
        myImg.style.visibility = "visible";
    } else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});