// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

// ---------- EXAMPLE 2 ----------
// SWAP THE ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [fistColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(fistColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const points = { x: 10, y: 20 };
console.log(points);

// destructuring
const { x, y } = points;
console.log(x);
console.log(y);

/* ======= EXAMPLE ======= */
const user = {
  id: 1,
  username: "Elijah",
  age: 25,
  country: "United States of America",
};

// destructuring
const { username, country } = user;
console.log(username);
console.log(country);

const person1 = {
  firstName: "Elijah",
  lastName: "Carlson",
  age: 30,
  job: "Self-employed",
};

const person2 = {
  firstName: "Stacey",
  lastName: "Carlson",
  age: 28,
};

const { firstName, lastName, age, job = "Unemployed" } = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ---------- EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS
function displayUser({ firstName, lastName, age, job = "Student" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const user1 = {
  firstName: "Donald",
  lastName: "Carlson",
  age: 30,
  job: "Self-employed",
};

const user2 = {
  firstName: "Stacey",
  lastName: "Carlson",
  age: 28,
};

displayUser(user2);
