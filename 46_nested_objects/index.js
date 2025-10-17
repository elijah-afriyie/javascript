class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Lucy",
  30,
  "124 Milk Street",
  "Fire Town",
  "Int. Waters"
);

const person2 = new Person(
  "Fred",
  32,
  "124 Milk Street",
  "Smoke Town",
  "Int. Waters"
);

const person3 = new Person(
  "Kyle",
  27,
  "30 Yellow Street",
  "Water Town",
  "Int. Waters"
);

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.country);


/* ======= NEW EXAMPLE ======= */
const obj = {
    user: {
        id: 1,
        profile: {
            firstName: "Pixie",
            lastName: "Lane",
            hobbies: ["reading", "swimming"]
        }
    }
};

const {
    user: {
        profile: {firstName, hobbies}
    }
} = obj;

console.log(hobbies.map(hobbies => hobbies.toUpperCase()));