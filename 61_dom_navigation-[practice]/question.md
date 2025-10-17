# DOM NAVIGATION [PRACTICE]

---

# 📝 Advanced DOM Navigation Practice Questions (Q1 - Q18)

===========================================================

---

### Q1

Select the `#fruits-list` and log its **first child element’s text**.

✅ Expected Result:
Logs **Apple** in the console.

💡 Solution:

```js
const fruitsList = document.getElementById("fruits-list");
console.log(fruitsList.firstElementChild.textContent);
```

---

### Q2

Select the **Banana** list item and log its **next sibling’s text**.

✅ Expected Result:
Logs **Cherry**.

💡 Solution:

```js
const banana = document.querySelectorAll(".fruit")[1];
console.log(banana.nextElementSibling.textContent);
```

---

### Q3

Select the **Cherry** list item and log its **previous sibling’s text**.

✅ Expected Result:
Logs **Banana**.

💡 Solution:

```js
const cherry = document.querySelectorAll(".fruit")[2];
console.log(cherry.previousElementSibling.textContent);
```

---

### Q4

Select the `.boxes` container and change the background color of its **last child** to **orange**.

✅ Expected Result:
**Box 3** turns orange.

💡 Solution:

```js
const boxes = document.querySelector(".boxes");
boxes.lastElementChild.style.backgroundColor = "orange";
```

---

### Q5

Select the **Button B** element and log its **next sibling’s text**.

✅ Expected Result:
Logs **Button C**.

💡 Solution:

```js
const buttonB = document.querySelectorAll(".btn")[1];
console.log(buttonB.nextElementSibling.textContent);
```

---

### Q6

Select the **Mango** fruit and log its **parent element’s id**.

✅ Expected Result:
Logs **fruits-list**.

💡 Solution:

```js
const mango = document.querySelectorAll(".fruit")[3];
console.log(mango.parentElement.id);
```

---

### Q7

Select the `#fruits-list` and log the **number of children it has**.

✅ Expected Result:
Logs **4**.

💡 Solution:

```js
const fruitList = document.getElementById("fruits-list");
console.log(fruitList.children.length);
```

---

### Q8

Select the `.boxes` container and loop through all its children to log each box’s text.

✅ Expected Result:
Logs:

```
Box 1
Box 2
Box 3
```

💡 Solution:

```js
const boxesDiv = document.querySelector(".boxes");
for (let box of boxesDiv.children) {
  console.log(box.textContent);
}
```

---

### Q9

Select the `#buttons-section` and log the text of its **first child button**.

✅ Expected Result:
Logs **Button A**.

💡 Solution:

```js
const buttonsSection = document.getElementById("buttons-section");
console.log(buttonsSection.querySelector(".btn").textContent);
```

---

### Q10

Select the `#fruits-list` and change the text of its **last child** to `"Pineapple"`.

✅ Expected Result:
The last fruit (Mango) changes to **Pineapple**.

💡 Solution:

```js
const fruitsList = document.getElementById("fruits-list");
fruitsList.lastElementChild.textContent = "Pineapple";
```

---

### Q11

Select the **Apple** fruit and log the text of its **next sibling**.

✅ Expected Result:
Logs **Banana**.

💡 Solution:

```js
const apple = document.querySelector(".fruit");
console.log(apple.nextElementSibling.textContent);
```

---

### Q12

Select **Button C** and log the text of its **previous sibling**.

✅ Expected Result:
Logs **Button B**.

💡 Solution:

```js
const buttonC = document.querySelectorAll(".btn")[2];
console.log(buttonC.previousElementSibling.textContent);
```

---

### Q13

Select the `.boxes` container and give its **first child** a red border.

✅ Expected Result:
**Box 1** has a red border.

💡 Solution:

```js
const boxes = document.querySelector(".boxes");
boxes.firstElementChild.style.border = "2px solid red";
```

---

### Q14

Select the **Banana** fruit and log the number of children its **parent element** has.

✅ Expected Result:
Logs **4**.

💡 Solution:

```js
const banana = document.querySelectorAll(".fruit")[1];
console.log(banana.parentElement.children.length);
```

---

### Q15

Select the `#buttons-section` and log the text of its **last child**.

✅ Expected Result:
Logs **Button C**.

💡 Solution:

```js
const buttonsSection = document.getElementById("buttons-section");
console.log(buttonsSection.lastElementChild.textContent);
```

---

### Q16

Select the `.boxes` container and log the text of its **second child**.

✅ Expected Result:
Logs **Box 2**.

💡 Solution:

```js
const boxes = document.querySelector(".boxes");
console.log(boxes.children[1].textContent);
```

---

### Q17

Select **Cherry** and log the id of its **parent element**.

✅ Expected Result:
Logs **fruits-list**.

💡 Solution:

```js
const cherry = document.querySelectorAll(".fruit")[2];
console.log(cherry.parentElement.id);
```

---

### Q18

Select the `#fruits-list` and loop through all its children, logging each fruit’s text in uppercase.

✅ Expected Result:
Logs:

```
APPLE
BANANA
CHERRY
MANGO
```

💡 Solution:

```js
const fruits = document.getElementById("fruits-list").children;
for (let fruit of fruits) {
  console.log(fruit.textContent.toUpperCase());
}
```

---

---

# 📝 Advanced DOM Navigation Practice Questions (Q19 - Q30)

============================================================

---

### Q19

Select the **second box (`Box 2`)** and change the text of its **previous sibling** to `"Modified Box 1"`.

✅ Expected Result:
`Box 1` becomes **Modified Box 1**.

💡 Solution:

```js
const box2 = document.querySelectorAll(".boxes div")[1];
box2.previousElementSibling.textContent = "Modified Box 1";
```

---

### Q20

Select the **last fruit (`Mango`)** and log the text of its **second previous sibling**.

✅ Expected Result:
Logs **Banana**.

💡 Solution:

```js
const mango = document.querySelectorAll(".fruit")[3];
console.log(mango.previousElementSibling.previousElementSibling.textContent);
```

---

### Q21

From the **Banana** element, move up to its parent and then select its **last child’s text**.

✅ Expected Result:
Logs **Mango**.

💡 Solution:

```js
const banana = document.querySelectorAll(".fruit")[1];
console.log(banana.parentElement.lastElementChild.textContent);
```

---

### Q22

From the `.boxes` container, access its **first child**, then move to its **next sibling**, and finally change that
sibling’s background color to **green**.

✅ Expected Result:
**Box 2** turns green.

💡 Solution:

```js
const boxes = document.querySelector(".boxes");
boxes.firstElementChild.nextElementSibling.style.backgroundColor = "green";
```

---

### Q23

Select **Button A** and log the text of the **last child** of its **parent element**.

✅ Expected Result:
Logs **Button C**.

💡 Solution:

```js
const buttonA = document.querySelector(".btn");
console.log(buttonA.parentElement.lastElementChild.textContent);
```

---

### Q24

Select the **Apple** fruit and change the text of its **third sibling** (3 steps forward) to `"Dragonfruit"`.

✅ Expected Result:
**Mango** becomes **Dragonfruit**.

💡 Solution:

```js
const apple = document.querySelector(".fruit");
apple.nextElementSibling.nextElementSibling.nextElementSibling.textContent =
  "Dragonfruit";
```

---

### Q25

Select the **second button (`Button B`)** and log the number of siblings it has (count both before and after).

✅ Expected Result:
Logs **3** (Buttons, Button A, and Button C).

💡 Solution:

```js
const buttonB = document.querySelectorAll(".btn")[1];
console.log(buttonB.parentElement.children.length - 1);
```

---

### Q26

Select the `#fruits-list` and log the text of its **middle child** (works regardless of how many children there are).

✅ Expected Result (with 4 items):
Logs **Banana** or **Cherry** depending on interpretation (middle two).

💡 Solution:

```js
const fruits = document.getElementById("fruits-list");
const midIndex = Math.floor(fruits.children.length / 2);
console.log(fruits.children[midIndex].textContent);
```

---

### Q27

Select the `.boxes` container and **reverse the order of its children’s text** (without changing the HTML structure).

✅ Expected Result:

```
Box 3
Box 2
Box 1
```

💡 Solution:

```js
const boxesDiv = document.querySelector(".boxes");
const texts = Array.from(boxesDiv.children)
  .map((box) => box.textContent)
  .reverse();

Array.from(boxesDiv.children).forEach((box, i) => {
  box.textContent = texts[i];
});
```

---

### Q28

Select the **last button** and log the text of its **grandparent element’s first child**.

✅ Expected Result:
Logs the first child of the grandparent (depends on your HTML).

💡 Solution:

```js
const lastButton = document.querySelectorAll(".btn")[2];
console.log(
  lastButton.parentElement.parentElement.firstElementChild.textContent
);
```

---

### Q29

Loop through all fruits in `#fruits-list` and add a **sequential number before their text** (e.g., `"1. Apple"`,
`"2. Banana"`, …).

✅ Expected Result:

```
1. Apple
2. Banana
3. Cherry
4. Mango
```

💡 Solution:

```js
const fruitsList = document.getElementById("fruits-list").children;
Array.from(fruitsList).forEach((fruit, index) => {
  fruit.textContent = `${index + 1}. ${fruit.textContent}`;
});
```

---

### Q30

From the `.boxes` container, select the **last child**, then go back two siblings, and change its background color to \*
\*blue\*\*.

✅ Expected Result:
**Box 1** turns blue.

💡 Solution:

```js
const boxes = document.querySelector(".boxes");
boxes.lastElementChild.previousElementSibling.previousElementSibling.style.backgroundColor =
  "blue";
```

---
