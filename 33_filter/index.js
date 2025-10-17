// Extracting items priced above 500

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];

const expensiveProducts = products
  .filter((product) => product.price > 500)
  .map((product) => product.name);
const affordableProducts = products
  .filter((product) => product.price < 500)
  .map((product) => product.name);

console.log(expensiveProducts);
console.log(affordableProducts);
