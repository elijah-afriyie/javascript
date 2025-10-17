const arr = [
  { id: 2, name: "Aiden" },
  { id: 1, name: "Skylar" },
  { id: 5, name: "Pixie" },
  { id: 3, name: "Frankie" },
  { id: 4, name: "Kyle" },
];

const sortById = arr.toSorted((a, b) => a.id - b.id);
const sortByName = arr.toSorted((a, b) => a.name.localeCompare(b.name));

console.log(sortById);
console.log(sortByName);

// ======= NEW EXAMPLE ======= */
const people = [
  { name: "Luke", age: 30, gpa: 3.0 },
  { name: "Jane", age: 20, gpa: 1.5 },
  { name: "Henry", age: 22, gpa: 2.8 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];

const sortByUsername = people.toSorted((a, b) => a.name.localeCompare(b.name));
const sortByAge = people.toSorted((a, b) => a.age - b.age);
const sortByGpa = people.toSorted((a, b) => a.gpa - b.gpa);

console.log(sortByUsername);
console.log(sortByAge);
console.log(sortByGpa);

/* ======= NEW EXAMPLE ======= */
const cars = [
    { make: "Toyota", model: "Corolla", year: 2018, mileage: 45000, color: "blue", electric: false },
    { make: "Tesla", model: "Model 3", year: 2022, mileage: 12000, color: "white", electric: true },
    { make: "Ford", model: "Mustang", year: 2015, mileage: 70000, color: "red", electric: false },
    { make: "BMW", model: "X5", year: 2020, mileage: 30000, color: "black", electric: false },
    { make: "Nissan", model: "Leaf", year: 2021, mileage: 15000, color: "green", electric: true },
    { make: "Chevrolet", model: "Bolt", year: 2019, mileage: 28000, color: "silver", electric: true },
    { make: "Honda", model: "Civic", year: 2017, mileage: 54000, color: "grey", electric: false },
];

const carSortByMake = cars.toSorted((a, b) => a.make.localeCompare(b.make));
const carSortByModel = cars.toSorted((a, b) => a.model.localeCompare(b.model));
const carSortByYear = cars.toSorted((a, b) => a.year - b.year);
const carSortByMileage = cars.toSorted((a, b) => a.mileage - b.mileage);
const carSortByColor = cars.toSorted((a, b) => a.color.localeCompare(b.color));
const carSortByElectric = cars.sort((a, b) => Number(a.electric) - Number(b.electric));
const carSortByNonElectric = cars.sort((a, b) => Number(b.electric) - Number(a.electric));

console.log(carSortByMake)
console.log(carSortByModel)
console.log(carSortByYear)
console.log(carSortByMileage)
console.log(carSortByColor)
console.log(carSortByElectric)
