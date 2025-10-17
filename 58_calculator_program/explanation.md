# Explanation of solution

---

## 1. Getting the Display Element

```js
const display = document.getElementById("display");
```

- `document.getElementById("display")` looks in your HTML for an element with `id="display"`.
- Example HTML:

  ```html
  <input id="display" type="text" readonly />
  ```

- Whatever it finds is stored in the variable `display`.
- We can then use `display.value` to read or change what’s shown in that input.

👉 Think of this as: “get the screen of my calculator so I can write numbers on it.”

---

## 2. Adding Numbers or Symbols

```js
function appendToDisplay(input) {
  display.value += input;
}
```

- This function adds whatever you pass (`input`) to the **end** of what’s already on the screen.
- Example:

  - If `display.value` = `"12"`
  - and you call `appendToDisplay("+")`
  - it becomes `"12+"`.

👉 This is how calculator buttons (like `1`, `2`, `+`, etc.) add things to the screen.

---

## 3. Clearing the Screen

```js
function clearDisplay() {
  display.value = "";
}
```

- This sets the display value to an empty string.
- Meaning the screen becomes blank.

👉 It’s just like pressing the `C` (clear) button on a calculator.

---

## 4. The Safe `calculate()` Function

```js
function calculate() {
  try {
    const expression = display.value.trim();

    if (!/^[0-9+\-*/(). ]+$/.test(expression) || expression === "") {
      throw new Error("Invalid input");
    }

    const result = new Function("return " + expression)();
    display.value = String(result);
  } catch (error) {
    display.value = "Error";
  }
}
```

Now let’s break this function line by line.

---

### Step A: Get the Expression

```js
const expression = display.value.trim();
```

- `display.value` is whatever the user typed (like `"2+3*4"`).
- `.trim()` removes spaces at the beginning and end.
- Example: `"  5+2 "` → `"5+2"`

👉 This gives us a clean expression to work with.

---

### Step B: Validate the Input

```js
if (!/^[0-9+\-*/(). ]+$/.test(expression) || expression === "") {
  throw new Error("Invalid input");
}
```

- This checks that the expression is only made of:

  - Numbers `0-9`
  - Operators `+ - * /`
  - Parentheses `( )`
  - Dots `.` (for decimals)
  - Spaces

- The regex `/^[0-9+\-*/(). ]+$/` means:

  - `^` start of string
  - `$` end of string
  - `[0-9+\-*/(). ]+` → one or more allowed characters

- `.test(expression)` returns `true` if the expression matches, `false` otherwise.

If the check fails or if the string is empty (`""`), we throw an error → goes straight to the `catch` block.

👉 This makes sure the user can’t type something dangerous like `alert("hack")`.

---

### Step C: Evaluate the Expression

```js
const result = new Function("return " + expression)();
```

- This creates a new function **from the string** and runs it immediately.
- Example:

  - If `expression = "2+3*4"`
  - Then it becomes: `new Function("return 2+3*4")()`
  - Which is like running:

    ```js
    function() { return 2+3*4 }
    ```

    and then calling it.

- The result is `14`.

👉 This is safer than `eval()` because it runs in its own scope, but we still rely on the regex check to block bad input.

---

### Step D: Show the Result

```js
display.value = String(result);
```

- Converts the answer to a string and shows it in the calculator display.
- Example:

  - `result = 14` → `display.value = "14"`

👉 This updates the screen with the final answer.

---

### Step E: Catch Errors

```js
catch
(error)
{
    display.value = "Error";
}
```

- If something goes wrong (invalid input, bad math like division by 0), it jumps here.
- Instead of crashing, the calculator shows `"Error"`.

👉 This gives a clean user experience.

---

## 5. Example Runs

### Example 1

```js
display.value = "2+3*4";
calculate();
// Screen shows "14"
```

### Example 2

```js
display.value = "(5 - 2) * 3";
calculate();
// Screen shows "9"
```

### Example 3

```js
display.value = "abc";
calculate();
// Screen shows "Error" (blocked by regex)
```

### Example 4

```js
display.value = "10/0";
calculate();
// Screen shows "Infinity" (JavaScript result)
```

---

✅ **Summary:**

1. `appendToDisplay()` → add numbers/operators.
2. `clearDisplay()` → clear screen.
3. `calculate()` →

   - Clean input → Validate with regex → Evaluate safely → Show result → Catch errors.

---
