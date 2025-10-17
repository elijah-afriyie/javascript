// 1. document.querySelector()             // FIRST ELEMENT OR NULL (...essential)
// 2. document.querySelectorAll()          // NODELIST              (...essential)
// 3. document.getElementById()            // ELEMENT OR NULL       (...essential)
// 4. document.getElementsByClassName()    // HTML COLLECTION       (...not important)
// 5. document.getElementsByTagName()      // HTML COLLECTION       (...not important)


// ESSENTIAL

// 1. ------------------------------ document.querySelector()
/*
const fruit = document.querySelector(".fruits");
fruit.style.backgroundColor = "yellow";
*/


// 2. --------------------------- document.querySelectorAll()
/*
const fruits = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "yellow";

fruits.forEach((fruit) => {
    fruit.style.backgroundColor = "yellow";
});
*/


// 3. ----------------------------- document.getElementById()
/*
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
*/


// NOT IMPORTANT

// 4. --------------------- document.getElementsByClassName()
/*
const fruits = document.getElementsByClassName("fruits");

// Accessing a single element
fruits[0].style.backgroundColor = "yellow";

// Converting HTMLCollection into an array to use forEach
Array.from(fruits).forEach((fruit) => {
    fruit.style.backgroundColor = "yellow";
});
*/


// 5. --------------------- document.getElementsByTagName()
/*
const listItems = document.getElementsByTagName("li");

// Accessing a single element
listItems[0].style.backgroundColor = "yellow";

// Converting HTMLCollection into an array to use forEach
Array.from(listItems).forEach((item) => {
    item.style.backgroundColor = "yellow";
});
*/


