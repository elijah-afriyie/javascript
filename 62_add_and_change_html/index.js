// ---------- EXAMPLE 1 <h1> ----------

// STEP 1 - CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 - ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "blue";
newH1.style.textAlign = "center";

// STEP 3 - APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// ---------- EXAMPLE 2 <li> ----------

// STEP 1 - CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 - ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 - APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const fruits = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, fruits[0]);

// REMOVE HTML ELEMENT
// document.getElementById("fruits").removeChild(newListItem);