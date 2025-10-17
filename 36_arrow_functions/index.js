const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((number) => Math.pow(number, 2));
const cubes = numbers.map((number) => Math.pow(number, 3));
const evens = numbers.filter((number) => number % 2 == 0);
const odds = numbers.filter((number) => number % 2 == 1);
const total = numbers.reduce((accumulator, number) => accumulator + number);

console.log(squares);
console.log(cubes);
console.log(evens);
console.log(odds);
console.log(total);
