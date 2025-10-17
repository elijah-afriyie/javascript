sum(displayPage, 5, 10);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayPage(result) {
  document.getElementById("result").innerText = "Result: " + result;
}

/* === example === */
addNums(
  function (result) {
    console.log(`result: ${result}`);
  },
  5,
  10
);

function addNums(callback, x, y) {
  let result = x + y;
  callback(result);
}

/* === example === */
function processNumbers(numbers, callback) {
  return numbers.reduce(callback);
}

const numbers = [2, 6];
const result = processNumbers(
  numbers,
  (accumulator, next) => accumulator + next
);
console.log(result);

/* === example === */
function processNumbersAlt(num1, num2, callback) {
  const result = callback(num1, num2);
  console.log(result);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

processNumbersAlt(2, 6, addNumbers);

/* === example === */
function processString(str, callback) {
  const result = callback(str);
  console.log(result);
}

function uppercaseConv(str) {
  return str.toUpperCase();
}

const greeting = "hello";
processString(greeting, uppercaseConv);


/* === example === */
function arrOddNums(arr, callback) {
  return arr.filter(callback);
}

function filterOdd(number) {
  return number % 2 == 0;
}
const arr = [4, 7, 10, 13];
const result = arrOddNums(arr, filterOdd);
console.log(result);
