# DOM NAVIGATION [PRACTICE]

---

### Q1

When you click **any fruit** in the fruits list, highlight it by changing its background color, and remove the highlight
from all others.

✅ **Expected Result:**
Clicking _Banana_ highlights it, but _Apple/Cherry/Mango_ lose their highlight.

💡 **Solution:**

```js
const fruits = document.querySelectorAll("#fruits-list .fruit");

fruits.forEach((fruit) => {
    fruit.addEventListener("click", () => {
        fruits.forEach((f) => (f.style.background = ""));
        fruit.style.background = "#f39c12";
    });
});
```

---

### Q2

Double-click on a **box** to make it grow larger (scale it), and return it to normal size on the next double-click.

✅ **Expected Result:**

- Double-click Box 2 → it grows.
- Double-click Box 2 again → it shrinks back.

💡 **Solution:**

```js
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("dblclick", () => {
        box.classList.toggle("active-box");
    });
});
```

_(CSS needed for toggle)_

```css
.active-box {
    transform: scale(1.3);
    background: #8e44ad;
}
```

---

### Q3

When you hover over **Button A**, dynamically disable **Button B and Button C**. When the mouse leaves, re-enable them.

✅ **Expected Result:**
Hover → Button B & C disabled. Leave → Enabled again.

💡 **Solution:**

```js
const btnA = document.querySelector(".btn:nth-child(1)");
const otherBtns = document.querySelectorAll(".btn:nth-child(n+2)");

btnA.addEventListener("mouseenter", () => {
    otherBtns.forEach((btn) => (btn.disabled = true));
});

btnA.addEventListener("mouseleave", () => {
    otherBtns.forEach((btn) => (btn.disabled = false));
});
```

---

### Q4

Clicking on a **card image** should replace its title with `"Clicked!"` temporarily for 2 seconds, then restore the
original title.

✅ **Expected Result:**
Card A’s title changes to _Clicked!_ then goes back.

💡 **Solution:**

```js
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const title = card.querySelector("h3");
    const img = card.querySelector("img");
    const original = title.textContent;

    img.addEventListener("click", () => {
        title.textContent = "Clicked!";
        setTimeout(() => {
            title.textContent = original;
        }, 2000);
    });
});
```

---

### Q5

Create a feature where **clicking any gallery item** swaps its background color with its next sibling. If it’s the last
one, swap with the first.

✅ **Expected Result:**
Clicking _Gallery 1_ swaps its color with _Gallery 2_. Clicking _Gallery 5_ swaps with _Gallery 1_.

💡 **Solution:**

```js
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        const next = galleryItems[i + 1] || galleryItems[0];
        const temp = item.style.background;
        item.style.background = next.style.background;
        next.style.background = temp;
    });
});
```

---

### Q6

Clicking **Button C** should hide all the cards, but clicking it again should bring them back.

✅ **Expected Result:**
Cards section toggles visibility with Button C.

💡 **Solution:**

```js
const btnC = document.querySelector(".btn:nth-child(3)");
const cardsSection = document.getElementById("cards-section");

btnC.addEventListener("click", () => {
    cardsSection.classList.toggle("hidden");
});
```

_(CSS)_

```css
.hidden {
    display: none;
}
```

---

### Q7

When you click **Box 3**, change the text of the **last fruit** to `"Kiwi"`.

✅ **Expected Result:**
Mango → Kiwi.

💡 **Solution:**

```js
const box3 = document.querySelector(".boxes .box:nth-child(3)");
const lastFruit = document.querySelector("#fruits-list li:last-child");

box3.addEventListener("click", () => {
    lastFruit.textContent = "Kiwi";
});
```

---

### Q8

Hold down the mouse on **Box 1** (mousedown), and while holding, change all button texts to `"Loading..."`. Release (
mouseup) → restore original texts.

✅ **Expected Result:**
Mouse down → all buttons = "Loading...". Release → restore A, B, C.

💡 **Solution:**

```js
const box1 = document.querySelector(".boxes .box:nth-child(1)");
const btns = document.querySelectorAll(".btn");
const originals = Array.from(btns).map((b) => b.textContent);

box1.addEventListener("mousedown", () => {
    btns.forEach((b) => (b.textContent = "Loading..."));
});

box1.addEventListener("mouseup", () => {
    btns.forEach((b, i) => (b.textContent = originals[i]));
});
```

---

### Q9

When you click on a **card’s title**, append `" ⭐"` to the gallery item with the same number.

✅ **Expected Result:**
Clicking _Card 2’s title_ → Gallery 2 becomes `"Gallery 2 ⭐"`.

💡 **Solution:**

```js
const cardTitles = document.querySelectorAll(".card h3");
const gallery = document.querySelectorAll(".gallery-item");

cardTitles.forEach((title, i) => {
    title.addEventListener("click", () => {
        gallery[i].textContent += " ⭐";
    });
});
```

---

### Q10

Pressing the **“Enter” key** while focused on any fruit should alert its name.

✅ **Expected Result:**
Focus Banana → press Enter → alert “Banana”.

💡 **Solution:**

```js
document.querySelectorAll("#fruits-list .fruit").forEach((fruit) => {
    fruit.tabIndex = 0; // make focusable
    fruit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            alert(fruit.textContent);
        }
    });
});
```

---

### Q11

Click **Box 2** → add a **new fruit** `"Pineapple"` at the end of the fruits list.

✅ **Expected Result:**
Fruit list now has Apple, Banana, Cherry, Mango, Pineapple.

💡 **Solution:**

```js
const box2 = document.querySelector(".boxes .box:nth-child(2)");
const fruitsList = document.getElementById("fruits-list");

box2.addEventListener("click", () => {
    const newFruit = document.createElement("li");
    newFruit.textContent = "Pineapple";
    newFruit.classList.add("fruit");
    fruitsList.appendChild(newFruit);
});
```

---

### Q12

Click **Button B** → duplicate the **Boxes section** and insert it _below itself_.

✅ **Expected Result:**
Boxes section appears twice on the page.

💡 **Solution:**

```js
const btnB = document.querySelector(".btn:nth-child(2)");
const boxesSection = document.getElementById("boxes-section");

btnB.addEventListener("click", () => {
    const clone = boxesSection.cloneNode(true);
    boxesSection.after(clone);
});
```

---

### Q13

Click **Button A** → shuffle the order of the fruits list randomly.

✅ **Expected Result:**
Fruits appear in a new random order each time.

💡 **Solution:**

```js
const btnA = document.querySelector(".btn:nth-child(1)");

btnA.addEventListener("click", () => {
    const fruits = Array.from(fruitsList.children);
    fruits.sort(() => Math.random() - 0.5);
    fruitsList.innerHTML = "";
    fruits.forEach((f) => fruitsList.appendChild(f));
});
```

---

### Q14

Clicking on **Gallery 3** → changes the background of **Box 3** to match Gallery 3’s background color.

✅ **Expected Result:**
Box 3 inherits Gallery 3’s color.

💡 **Solution:**

```js
const gallery3 = document.querySelector(".gallery-item:nth-child(3)");
const box3 = document.querySelector(".boxes .box:nth-child(3)");

gallery3.addEventListener("click", () => {
    box3.style.background = gallery3.style.background;
});
```

---

### Q15

Double-click **Card 1’s description paragraph** → turn it into an editable input field (with the same text).

✅ **Expected Result:**
The paragraph is replaced by an `<input>` box with the same value.

💡 **Solution:**

```js
const card1Desc = document.querySelector("#cards-section .card:nth-child(1) p");

card1Desc.addEventListener("dblclick", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = card1Desc.textContent;
    card1Desc.replaceWith(input);
});
```

---

### Q16

Click **Box 1** → toggle showing only fruits whose names start with `"C"`.

✅ **Expected Result:**
Box 1 click → only `"Cherry"` shows. Click again → all fruits show.

💡 **Solution:**

```js
let filterActive = false;

box1.addEventListener("click", () => {
    const fruits = document.querySelectorAll("#fruits-list .fruit");
    filterActive = !filterActive;

    fruits.forEach((fruit) => {
        if (filterActive && !fruit.textContent.startsWith("C")) {
            fruit.style.display = "none";
        } else {
            fruit.style.display = "list-item";
        }
    });
});
```

---

### Q17

When you hover over **any card**, highlight the **corresponding gallery item** with a border.

✅ **Expected Result:**
Hover Card 2 → Gallery 2 has a red border.

💡 **Solution:**

```js
const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
    const galleryItem = document.querySelectorAll(".gallery-item")[i];

    card.addEventListener("mouseenter", () => {
        galleryItem.style.border = "3px solid red";
    });
    card.addEventListener("mouseleave", () => {
        galleryItem.style.border = "";
    });
});
```

---

### Q18

Click **Button C** → remove the **last gallery item** permanently.

✅ **Expected Result:**
Click → Gallery 5 disappears. Click again → Gallery 4 disappears.

💡 **Solution:**

```js
const btnC = document.querySelector(".btn:nth-child(3)");
const gallery = document.querySelector(".gallery");

btnC.addEventListener("click", () => {
    const lastItem = gallery.lastElementChild;
    if (lastItem) lastItem.remove();
});
```

---

### Q19

Click **Box 3** → move the **first card** to become the last one.

✅ **Expected Result:**
Card A moves to the end of the cards section.

💡 **Solution:**

```js
const cardsSection = document.getElementById("cards-section");

box3.addEventListener("click", () => {
    const firstCard = cardsSection.firstElementChild;
    cardsSection.appendChild(firstCard);
});
```

---

### Q20

Pressing the **“Escape” key** → reset all changes:

- Show all fruits.
- Restore button labels.
- Remove card highlights/borders.

✅ **Expected Result:**
Everything resets back to original state.

💡 **Solution:**

```js
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        // Reset fruits
        document
            .querySelectorAll("#fruits-list .fruit")
            .forEach((f) => (f.style.display = "list-item"));

        // Reset buttons
        const btns = document.querySelectorAll(".btn");
        btns[0].textContent = "Button A";
        btns[1].textContent = "Button B";
        btns[2].textContent = "Button C";

        // Reset gallery/card borders
        document
            .querySelectorAll(".gallery-item")
            .forEach((g) => (g.style.border = ""));
    }
});
```

---

### Q21

Add a **search input** above the fruit list that filters fruits as you type.

✅ **Expected Result:**
Typing `"an"` → only Banana and Mango remain visible.

💡 **Solution:**

```js
const search = document.createElement("input");
search.placeholder = "Search fruits...";
document.getElementById("fruits-section").prepend(search);

search.addEventListener("input", () => {
    const query = search.value.toLowerCase();
    document.querySelectorAll("#fruits-list .fruit").forEach((fruit) => {
        fruit.style.display = fruit.textContent.toLowerCase().includes(query)
            ? "list-item"
            : "none";
    });
});
```

---

### Q22

Turn the **Buttons section** into a **tab system**: clicking Button A shows fruits, Button B shows boxes, Button C shows
gallery.

✅ **Expected Result:**
Only one section is visible at a time, depending on button clicked.

💡 **Solution:**

```js
const sections = {
    "Button A": document.getElementById("fruits-section"),
    "Button B": document.getElementById("boxes-section"),
    "Button C": document.querySelector(".gallery-section"),
};

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        Object.values(sections).forEach((sec) => (sec.style.display = "none"));
        sections[btn.textContent].style.display = "block";
    });
});
```

---

### Q23

Make **Boxes draggable**: dragging a box reorders them inside the `.boxes` container.

✅ **Expected Result:**
You can rearrange Box 1, Box 2, Box 3 by dragging/dropping.

💡 **Solution:**

```js
const boxes = document.querySelectorAll(".boxes .box");
const container = document.querySelector(".boxes");

boxes.forEach((box) => {
    box.draggable = true;

    box.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", box.textContent);
        e.dataTransfer.effectAllowed = "move";
        box.classList.add("dragging");
    });

    box.addEventListener("dragend", () => box.classList.remove("dragging"));
});

container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const afterElement = [...container.children].find(
        (child) => e.clientY < child.offsetTop + child.offsetHeight / 2
    );
    if (afterElement) container.insertBefore(dragging, afterElement);
    else container.appendChild(dragging);
});
```

---

### Q24

Add a **“Mark Favorite” button** to each fruit. Clicking it highlights that fruit in **yellow**.

✅ **Expected Result:**
Strawberry clicked → yellow background.

💡 **Solution:**

```js
document.querySelectorAll("#fruits-list .fruit").forEach((fruit) => {
    const favBtn = document.createElement("button");
    favBtn.textContent = "⭐";
    favBtn.style.marginLeft = "8px";
    fruit.appendChild(favBtn);

    favBtn.addEventListener("click", () => {
        fruit.style.backgroundColor = "yellow";
    });
});
```

---

### Q25

Add an **accordion** to the **Cards section**: clicking a card title toggles its paragraph visibility.

✅ **Expected Result:**
Click Card A → hides/shows its text.

💡 **Solution:**

```js
document.querySelectorAll(".card .card-title").forEach((title) => {
    title.addEventListener("click", () => {
        const text = title.nextElementSibling;
        text.style.display = text.style.display === "none" ? "block" : "none";
    });
});
```

---

### Q26

Enable **keyboard navigation** for gallery:

- Left Arrow → previous item border.
- Right Arrow → next item border.

✅ **Expected Result:**
Pressing right highlights Gallery 2, 3… left goes back.

💡 **Solution:**

```js
const galleryItems = document.querySelectorAll(".gallery-item");
let current = 0;

function highlight(index) {
    galleryItems.forEach((g) => (g.style.border = ""));
    galleryItems[index].style.border = "3px solid blue";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        current = (current + 1) % galleryItems.length;
        highlight(current);
    } else if (e.key === "ArrowLeft") {
        current = (current - 1 + galleryItems.length) % galleryItems.length;
        highlight(current);
    }
});
```

---

### Q27

Add a **counter** that shows how many fruits are currently visible.

✅ **Expected Result:**
Initially `4 fruits visible`. If Banana hidden → updates to `3 fruits visible`.

💡 **Solution:**

```js
const counter = document.createElement("p");
document.getElementById("fruits-section").appendChild(counter);

function updateCounter() {
    const visible = [...document.querySelectorAll("#fruits-list .fruit")].filter(
        (f) => f.style.display !== "none"
    ).length;
    counter.textContent = `${visible} fruits visible`;
}

updateCounter();
document.querySelectorAll("#fruits-list .fruit").forEach((f) => {
    f.addEventListener("click", () => {
        f.style.display = f.style.display === "none" ? "list-item" : "none";
        updateCounter();
    });
});
```

---

### Q28

Add a **“Reset All” button** at the footer that restores:

- All fruits visible.
- Boxes in original order.
- Removes highlights/borders.

✅ **Expected Result:**
Everything returns to initial state.

💡 **Solution:**

```js
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset All";
document.body.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
    document
        .querySelectorAll("#fruits-list .fruit")
        .forEach((f) => (f.style.display = "list-item"));

    const boxContainer = document.querySelector(".boxes");
    ["Box 1", "Box 2", "Box 3"].forEach((txt, i) => {
        boxContainer.children[i].textContent = txt;
    });

    document
        .querySelectorAll(".gallery-item")
        .forEach((g) => (g.style.border = ""));
});
```

---

### Q29

Add a **live clock** at the top of the page.

✅ **Expected Result:**
Always shows current time, updates every second.

💡 **Solution:**

```js
const clock = document.createElement("h3");
document.body.prepend(clock);

setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);
```

---

### Q30

Create a **dark mode toggle** button in footer: switches entire page background and text color.

✅ **Expected Result:**
Click → page becomes dark background with white text. Click again → back to normal.

💡 **Solution:**

```js
const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙 Dark Mode";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// CSS (style.css):
/*
.dark {
  background: #111;
  color: #eee;
}
*/
```

---
