# Questions on ES6 Modules

---

### 📝 Module Practice Questions

---

#### **Q1: Export and Import a Function**

Create a module called `greetings.js` that exports a function `sayHello(name)` which logs `"Hello, <name>!"`.
Import it into `index.js` and call it with your own name.

✅ Expected Output:

```
Hello, Elijah!
```

💡 **Solution**:

```js
// greetings.js
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// index.js
import { sayHello } from "./greetings.js";

sayHello("Elijah");
```

---

#### **Q2: Export Multiple Values**

Create a module `mathOps.js` that exports two functions:

- `add(a, b)` → returns the sum
- `multiply(a, b)` → returns the product

Import and use both in `index.js`.

✅ Expected Output:

```
Sum: 12
Product: 35
```

💡 **Solution**:

```js
// mathOps.js
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

// index.js
import { add, multiply } from "./mathOps.js";

console.log("Sum:", add(5, 7));
console.log("Product:", multiply(5, 7));
```

---

#### **Q3: Default Export**

Create a module `logger.js` that has a default export function `logMessage(msg)` which simply logs the message.
Import it in `index.js` and call it with `"Modules are cool!"`.

✅ Expected Output:

```
Modules are cool!
```

💡 **Solution**:

```js
// logger.js
export default function logMessage(msg) {
  console.log(msg);
}

// index.js
import logMessage from "./logger.js";

logMessage("Modules are cool!");
```

---

#### **Q4: Rename Imports**

Create a module `converter.js` that exports:

- `toCelsius(f)` → convert Fahrenheit to Celsius
- `toFahrenheit(c)` → convert Celsius to Fahrenheit

When importing in `index.js`, rename them as `cToF` and `fToC`.

✅ Expected Output (for inputs 32°F and 0°C):

```
32°F = 0°C
0°C = 32°F
```

💡 **Solution**:

```js
// converter.js
export function toCelsius(f) {
  return (f - 32) * (5 / 9);
}
export function toFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

// index.js
import { toCelsius as fToC, toFahrenheit as cToF } from "./converter.js";

console.log(`32°F = ${fToC(32)}°C`);
console.log(`0°C = ${cToF(0)}°F`);
```

---

#### **Q5: Re-export from Another Module**

Create a module `shapes.js` with:

- `circleArea(r)`
- `squareArea(s)`

Then create another module `allShapes.js` that **re-exports everything from `shapes.js`**.
Finally, use it in `index.js`.

✅ Expected Output (r=5, s=4):

```
Circle Area: 78.54
Square Area: 16
```

💡 **Solution**:

```js
// shapes.js
const PI = 3.14159;
export function circleArea(r) {
  return PI * r * r;
}
export function squareArea(s) {
  return s * s;
}

// allShapes.js
export * from "./shapes.js";

// index.js
import { circleArea, squareArea } from "./allShapes.js";

console.log("Circle Area:", circleArea(5).toFixed(2));
console.log("Square Area:", squareArea(4));
```

---
