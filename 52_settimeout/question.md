# TRY QUESTIONS ON setTimeout();

---

## 📝 Exercise 1: Simple Delay

**Question:**
Use `setTimeout` to print `"Hello after 2 seconds"` with a 2-second delay.

**Expected Output (after 2 sec):**

```txt
Hello after 2 seconds
```

**Solution:**

```js
setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);
```

---

## 📝 Exercise 2: Multiple Delays

**Question:**
Print:

* `"First message"` after 1 second
* `"Second message"` after 2 seconds
* `"Third message"` after 3 seconds

**Expected Output:**

```txt
First message
Second message
Third message
```

**Solution:**

```js
setTimeout(() => console.log("First message"), 1000);
setTimeout(() => console.log("Second message"), 2000);
setTimeout(() => console.log("Third message"), 3000);
```

---

## 📝 Exercise 3: Countdown with `setTimeout`

**Question:**
Use `setTimeout` inside a loop to create a countdown from `3` to `1`, then print `"Go!"`.

**Expected Output:**

```txt
3
2
1
Go!
```

**Solution (with `let`):**

```js
for (let i = 3; i > 0; i--) {
    setTimeout(() => console.log(i), (4 - i) * 1000);
}

setTimeout(() => console.log("Go!"), 4000);
```

---

## 📝 Exercise 4: Closure with `setTimeout`

**Question:**
Fix the following code so it prints `1, 2, 3` instead of `4, 4, 4`:

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

**Expected Output (after 1 sec):**

```txt
1
2
3
```

**Solution 1 (use `let`):**

```js
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```

**Solution 2 (closure with IIFE):**

```js
for (var i = 1; i <= 3; i++) {
    ((n) => {
        setTimeout(() => console.log(n), 1000);
    })(i);
}
```

---

## 📝 Exercise 5: Repeat Message with `setTimeout` (manual loop)

**Question:**
Print `"Hello"` every second, but only 5 times using `setTimeout`.

**Expected Output:**

```txt
Hello
Hello
Hello
Hello
Hello
```

**Solution:**

```js
function repeatHello(count) {
    if (count === 0) return;

    console.log("Hello");
    setTimeout(() => repeatHello(count - 1), 1000);
}

repeatHello(5);
```

---
