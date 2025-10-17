const person = {
  _age: 0,
  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    }
  },
  get age() {
    return this._age;
  },
};

person.age = 25;

console.log(person);


/* ===== NEW EXAMPLE ===== */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(`Width: ${rectangle.width}`);
console.log(`Height: ${rectangle.height}`);
console.log(`Area: ${rectangle.area}`);

/* ===== NEW EXAMPLE ===== */
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // setters
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Enter a valid age");
    }
  }

  // getters
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Donald", "Carlson", 29);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
