# ELEMENT SELECTOR

---

## 📝 Mixed DOM Practice Questions

---

### Q1

Select the heading with `id="main-heading"` and change its text color to blue.

✅ Expected Result:
The big **“DOM Practice Playground”** heading turns blue.

💡 Solution:

```js
const heading = document.getElementById("main-heading");
heading.style.color = "blue";
```

---

### Q2

Select all `.fruits` list items and make their text bold.

✅ Expected Result:
Apple, Banana, Cherry, Orange all become bold.

💡 Solution:

```js
const fruits = document.querySelectorAll(".fruits");
fruits.forEach((fruit) => {
  fruit.style.fontWeight = "bold";
});
```

---

### Q3

Select the **email input field** (`input[type="email"]`) and change its placeholder text to `"Your email goes here"`.

✅ Expected Result:
The email field now says: **“Your email goes here”**.

💡 Solution:

```js
const emailInput = document.querySelector('input[type="email"]');
emailInput.placeholder = "Your email goes here";
```

---

### Q4

Select the **submit button** (`id="submit-btn"`) and change its text to `"Sending..."`.

✅ Expected Result:
The **Submit** button text changes to **Sending...**

💡 Solution:

```js
const btn = document.getElementById("submit-btn");
btn.textContent = "Sending...";
```

---

### Q5

Select the **first paragraph** with class `.intro` and make its background yellow.

✅ Expected Result:
Only the **first paragraph** gets a yellow background.

💡 Solution:

```js
const firstIntro = document.querySelector(".intro");
firstIntro.style.backgroundColor = "yellow";
```

---

### Q6

Select all `.box` elements and give each a different background color (red, green, blue).

✅ Expected Result:
Box **1** is red, **2** is green, **3** is blue.

💡 Solution:

```js
const boxes = document.querySelectorAll(".box");
const colors = ["red", "green", "blue"];
boxes.forEach((box, i) => {
  box.style.backgroundColor = colors[i];
});
```

---

### Q7

Select the `#content` div and replace its text with:
`"This content has been updated!"`

✅ Expected Result:
The text in the `Content` section changes to the new sentence.

💡 Solution:

```js
const content = document.getElementById("content");
content.textContent = "This content has been updated!";
```

---

### Q8

Select the **first fruit** inside `#fruit-list` and change its text to `"Mango"`.

✅ Expected Result:
The first fruit (Apple) changes to **Mango**.

💡 Solution:

```js
const firstFruit = document.querySelector("#fruit-list li");
firstFruit.textContent = "Mango";
```

---

### Q9

Select all `.action-btn` buttons and disable them.

✅ Expected Result:
The **Click Me** and **Reset** buttons become unclickable (grayed out).

💡 Solution:

```js
const buttons = document.querySelectorAll(".action-btn");
buttons.forEach((btn) => {
  btn.disabled = true;
});
```

---

### Q10

Select the logo image (`id="logo"`) and set its width to `50px`.

✅ Expected Result:
The logo image shrinks to 50px wide.

💡 Solution:

```js
const logo = document.getElementById("logo");
logo.style.width = "50px";
```

---

### Q11

Select all `.gallery` images and add a **solid black border** around them.

✅ Expected Result:
Both gallery images now have a black border.

💡 Solution:

```js
const galleryImgs = document.querySelectorAll(".gallery");
galleryImgs.forEach((img) => {
  img.style.border = "2px solid black";
});
```

---

### Q12

Select the first element with class `.title` and change its text to:
`"My Favorite Fruits"`

✅ Expected Result:
The first **Fruit List** heading changes to **My Favorite Fruits**.

💡 Solution:

```js
const firstTitle = document.querySelector(".title");
firstTitle.textContent = "My Favorite Fruits";
```

---

### Q13

Select the username input (`id="username"`) and set its value to `"Elijah123"`.

✅ Expected Result:
The username field is automatically filled with `Elijah123`.

💡 Solution:

```js
const usernameInput = document.getElementById("username");
usernameInput.value = "Elijah123";
```

---

### Q14

Select all `.intro` paragraphs and change their text color to green.

✅ Expected Result:
Both paragraphs under the main heading turn green.

💡 Solution:

```js
const intros = document.querySelectorAll(".intro");
intros.forEach((p) => {
  p.style.color = "green";
});
```

---

### Q15

Select the second `.box` and change its text to `"Box Two"`.

✅ Expected Result:
The **2** inside the second box changes to **Box Two**.

💡 Solution:

```js
const secondBox = document.querySelectorAll(".box")[1];
secondBox.textContent = "Box Two";
```

---

### Q16

Select the fruit with text `"Cherry"` (the 3rd in the list) and make its background pink.

✅ Expected Result:
Cherry has a pink background.

💡 Solution:

```js
const cherry = document.querySelectorAll(".fruits")[2];
cherry.style.backgroundColor = "pink";
```

---

### Q17

Select the `Sign Up` button inside the form and change its background color to purple.

✅ Expected Result:
The **Sign Up** button turns purple.

💡 Solution:

```js
const signupBtn = document.querySelector("#signup-form button");
signupBtn.style.backgroundColor = "purple";
```

---

### Q18

Select all elements with class `.title` and make their text uppercase.

✅ Expected Result:
All section titles (**Fruit List, Boxes, Buttons, Form Section, Images, Content**) appear in uppercase.

💡 Solution:

```js
const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.style.textTransform = "uppercase";
});
```

---
