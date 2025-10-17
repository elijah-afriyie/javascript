// --------------- .firstElementChild ---------------

/*
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
 */

// --------------- .lastElementChild ---------------

/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});
 */

// --------------- .nextElementSibling ---------------

/*
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "lightyellow";

const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "lightgray";
 */

// --------------- .previousElementSibling ---------------

/*
const element = document.getElementById("orange");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "purple";

const element = document.getElementById("vegetables");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "purple";
 */

// --------------- .parentElement ---------------

/*
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";

const element = document.getElementById("vegetables");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
 */

// --------------- .children ---------------

/*
const element = document.getElementById("fruits");
const children = element.children;

// children don't have a built-in forEach method. Type cast as Array
Array.from(children).forEach((child) => {
    child.style.backgroundColor = "lightblue";
});

const element = document.getElementById("fruits");
const children = element.children;

children[0].style.backgroundColor = "yellow";
 */
