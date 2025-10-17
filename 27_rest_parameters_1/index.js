let books = [
  "Tale of two cities",
  "Oliver Twist",
  "David Copperfield",
  "Great Expectations",
  "Jane Eyre",
  "Wuthering Heights",
  "Pride and Prejudice",
  "Moby Dick",
  "War and Peace",
  "The Odyssey",
];

let [firstBook, secondBook, ...otherBooks] = books;

console.log(`First Book: ${firstBook}`);
console.log(`Second Book: ${secondBook}`);
console.log(`Other Books: ${otherBooks}`);
