# question

---

## 📝 Exercise 1: Basic Closure

**Question:**
Create a function `greet` that takes a `name` as an argument and returns another function.
When you call the returned function, it should print:
`Hello, <name>!`

**Expected Output:**

```txt
Hello, Elijah!
```

**Solution:**

```js
function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const sayHello = greet("Elijah");
sayHello(); // Hello, Elijah!
```

---

## 📝 Exercise 2: Counter with Closure

**Question:**
Write a function `makeCounter` that creates a private counter starting at `0`.
It should return two functions: `increment` and `getValue`.

**Expected Output:**

```txt
1
2
2
```

**Solution:**

```js
function makeCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    getValue: function () {
      console.log(count);
    },
  };
}

const counter = makeCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getValue(); // 2
```

---

## 📝 Exercise 3: Function Factory

**Question:**
Write a function `powerOf` that takes an exponent (like `2`, `3`) and returns a function.
The returned function should take a number and raise it to the given exponent.

**Expected Output:**

```txt
9
27
```

**Solution:**

```js
function powerOf(exp) {
  return function (num) {
    return num ** exp;
  };
}

const square = powerOf(2);
const cube = powerOf(3);

console.log(square(3)); // 9
console.log(cube(3)); // 27
```

---

## 📝 Exercise 4: Closures in Loops

**Question:**
Fix the code so that the numbers `1, 2, 3` are logged instead of `4, 4, 4` after a delay.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

**Expected Output (after 1 sec):**

```txt
1
2
3
```

**Solution 1 (using `let`):**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

**Solution 2 (using closure + IIFE):**

```js
for (var i = 1; i <= 3; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000);
  })(i);
}
```

---

## 📝 Exercise 5: Private Bank Account

**Question:**
Create a function `bankAccount` that starts with a balance of `100`.
It should return an object with methods `deposit`, `withdraw`, and `checkBalance`.

**Expected Output:**

```txt
150
120
120
```

**Solution:**

```js
function bankAccount() {
  let balance = 100; // private variable

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(balance);
    },
    withdraw: function (amount) {
      balance -= amount;
      console.log(balance);
    },
    checkBalance: function () {
      console.log(balance);
    },
  };
}

const myAccount = bankAccount();
myAccount.deposit(50); // 150
myAccount.withdraw(30); // 120
myAccount.checkBalance(); // 120
```

## 📝 Exercise 6: Personalized Greeter

**Question:**
Create a function `createGreeter` that takes a greeting word (like `"Hi"`, `"Welcome"`) and returns another function.
The returned function should take a `name` and print `<greeting>, <name>!`.

**Expected Output:**

```txt
Hi, Elijah!
Welcome, Ruby!
```

**Solution:**

```js
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const hiGreeter = createGreeter("Hi");
const welcomeGreeter = createGreeter("Welcome");

hiGreeter("Elijah"); // Hi, Elijah!
welcomeGreeter("Ruby"); // Welcome, Ruby!
```

---

## 📝 Exercise 7: Multiplier with Memory

**Question:**
Create a function `createMultiplier` that starts with a number (say `2`) and multiplies it each time `multiply` is
called.

**Expected Output:**

```txt
2
4
8
```

**Solution:**

```js
function createMultiplier(start) {
  let value = start;

  return function () {
    console.log(value);
    value *= start;
  };
}

const multiplier = createMultiplier(2);
multiplier(); // 2
multiplier(); // 4
multiplier(); // 8
```

---

## 📝 Exercise 8: Unique ID Generator

**Question:**
Write a function `idGenerator` that returns a function.
Every time you call the function, it should give the next ID (`1, 2, 3...`).

**Expected Output:**

```txt
1
2
3
```

**Solution:**

```js
function idGenerator() {
  let id = 0;

  return function () {
    id++;
    return id;
  };
}

const generateId = idGenerator();
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3
```

---

## 📝 Exercise 9: Remember the Last Value

**Question:**
Make a function `remember` that returns another function.
Each time the returned function is called, it should show the **last stored value** and update it with the **new input
**.

**Expected Output:**

```txt
No value yet
Elijah
Ruby
```

**Solution:**

```js
function remember() {
  let last;

  return function (newValue) {
    if (last === undefined) {
      console.log("No value yet");
    } else {
      console.log(last);
    }
    last = newValue;
  };
}

const memory = remember();
memory("Elijah"); // No value yet
memory("Ruby"); // Elijah
memory("Pixie"); // Ruby
```

---

## 📝 Exercise 10: Once Function

**Question:**
Write a function `once` that takes a function `fn` as input and returns a new function.
The returned function should only allow `fn` to run **once**, and afterwards just return the first result.

**Expected Output:**

```txt
5
5
5
```

**Solution:**

```js
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const addOnce = once((a, b) => a + b);
console.log(addOnce(2, 3)); // 5
console.log(addOnce(10, 20)); // 5 (still 5)
console.log(addOnce(100, 200)); // 5 (still 5)
```

---
