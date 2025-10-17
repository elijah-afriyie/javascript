const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});

const cubes = numbers.map((number) => {
  return Math.pow(number, 3);
});

const evens = numbers.filter((number) => {
  return number % 2 == 0;
});

const odds = numbers.filter((number) => {
  return number % 2 == 1;
});

const sum = numbers.reduce((accumulator, element) => {
  return accumulator + element;
});

console.log(`squares: ${squares}`);
console.log(`cubes: ${cubes}`);
console.log(`evens: ${evens}`);
console.log(`odds: ${odds}`);
console.log(`sum: ${sum}`);
