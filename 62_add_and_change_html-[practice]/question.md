# ADD AND CHANGE HTML [PRACTICE]

---

# 🎬 DOM Navigation Practice Questions (Movies Theme)

---

### Q1

Select the **last movie** in the **Movie List** and log its text content.

✅ **Expected Result:**
Logs:

```
Joker
```

💡 **Solution:**

```js
const moviesList = document.getElementById("movies-list");
console.log(moviesList.lastElementChild.textContent);
```

---

### Q2

Select the **Disney+ platform** by navigating from **Netflix** (no direct query like `getElementById("disney")`).

✅ **Expected Result:**
Logs:

```
Disney+
```

💡 **Solution:**

```js
const netflix = document.getElementById("netflix");
console.log(netflix.nextElementSibling.textContent);
```

---

### Q3

From the **Pause button**, log the text of the **Play button** using DOM navigation.

✅ **Expected Result:**
Logs:

```
▶ Play
```

💡 **Solution:**

```js
const pauseBtn = document.getElementById("pauseBtn");
console.log(pauseBtn.previousElementSibling.textContent);
```

---

### Q4

Select the **middle box** (Box 3) and change its background color to `"lightblue"`.

✅ **Expected Result:**
Box 3’s background changes to light blue.

💡 **Solution:**

```js
const boxes = document.querySelector(".boxes");
boxes.children[2].style.backgroundColor = "lightblue";
```

---

### Q5

Navigate from **Box 5** to log the **text of Box 2** (without using IDs directly).

✅ **Expected Result:**
Logs:

```
Box 2
```

💡 **Solution:**

```js
const box5 = document.getElementById("box5");
console.log(box5.parentElement.children[1].textContent);
```

---

### Q6

From the **Controls section**, select the section’s heading (`<h2>`) and log its text.

✅ **Expected Result:**
Logs:

```
Controls
```

💡 **Solution:**

```js
const controlsSection = document.getElementById("controls-section");
console.log(controlsSection.firstElementChild.textContent);
```

---

### Q7

Select the **first movie** in the list and log its **parent element’s tag name**.

✅ **Expected Result:**
Logs:

```
UL
```

💡 **Solution:**

```js
const firstMovie = document.getElementById("inception");
console.log(firstMovie.parentElement.tagName);
```

---

### Q8

From the **Prime Video** platform, log the text of the **first platform (Netflix)**.

✅ **Expected Result:**
Logs:

```
Netflix
```

💡 **Solution:**

```js
const prime = document.getElementById("prime");
console.log(prime.parentElement.firstElementChild.textContent);
```

---

### Q9

Select **all buttons inside Controls** and log their text using a loop.

✅ **Expected Result:**
Logs:

```
▶ Play
⏸ Pause
⏹ Stop
```

💡 **Solution:**

```js
const controls = document.querySelectorAll("#controls-section .ctrl");
controls.forEach(btn => console.log(btn.textContent));
```

---

### Q10

Select the **Movie List heading (`<h2>`)** by navigating from one of its movies.

✅ **Expected Result:**
Logs:

```
Movie List
```

💡 **Solution:**

```js
const matrix = document.getElementById("matrix");
console.log(matrix.parentElement.previousElementSibling.textContent);
```

---

### Q11

Create a new movie `<li>` called **"Interstellar"** and insert it **before Avatar**.

✅ **Expected Result:**
The movie list becomes:

```
Inception
Interstellar
Avatar
The Matrix
Joker
```

💡 **Solution:**

```js
const newMovie = document.createElement("li");
newMovie.textContent = "Interstellar";
newMovie.className = "movie";

const avatar = document.getElementById("avatar");
document.getElementById("movies-list").insertBefore(newMovie, avatar);
```

---

### Q12

Remove the **Joker movie** from the list.

✅ **Expected Result:**
Movie list no longer contains **Joker**.

💡 **Solution:**

```js
const joker = document.getElementById("joker");
joker.parentElement.removeChild(joker);
```

---

### Q13

Change the text of the **Stop button** to `"⏹ End"`.

✅ **Expected Result:**
The last button reads:

```
⏹ End
```

💡 **Solution:**

```js
const stopBtn = document.getElementById("stopBtn");
stopBtn.textContent = "⏹ End";
```

---

### Q14

From **Box 2**, change the text of **Box 4** to `"Surprise Box"`.

✅ **Expected Result:**
Box 4 now shows:

```
Surprise Box
```

💡 **Solution:**

```js
const box2 = document.getElementById("box2");
box2.parentElement.children[3].textContent = "Surprise Box";
```

---

### Q15

Duplicate the **Play button** and insert it right after the **Pause button**.

✅ **Expected Result:**
Controls section shows:

```
▶ Play | ⏸ Pause | ▶ Play | ⏹ Stop
```

💡 **Solution:**

```js
const playBtn = document.getElementById("playBtn");
const clonePlay = playBtn.cloneNode(true);

const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.insertAdjacentElement("afterend", clonePlay);
```

---

### Q16

Move the **Netflix div** into **Box 1**.

✅ **Expected Result:**
Box 1 contains:

```
Box 1
Netflix
```

💡 **Solution:**

```js
const netflix = document.getElementById("netflix");
document.getElementById("box1").append(netflix);
```

---

### Q17

Change the color of **all movies** to `"darkred"`.

✅ **Expected Result:**
Each movie title turns **dark red**.

💡 **Solution:**

```js
const movies = document.querySelectorAll("#movies-list li");
movies.forEach(movie => movie.style.color = "darkred");
```

---

### Q18

From the **Pause button**, log the text of the **section heading** (`<h2>` that says "Controls").

✅ **Expected Result:**
Logs:

```
Controls
```

💡 **Solution:**

```js
const pause = document.getElementById("pauseBtn");
console.log(pause.parentElement.previousElementSibling.textContent);
```

---

### Q19

Replace **Box 5** completely with a new `<div>` that says `"Final Box"`.

✅ **Expected Result:**
The boxes area shows:

```
Box 1, Box 2, Box 3, Box 4, Final Box
```

💡 **Solution:**

```js
const newBox = document.createElement("div");
newBox.className = "box";
newBox.textContent = "Final Box";

const box5 = document.getElementById("box5");
box5.parentElement.replaceChild(newBox, box5);
```

---

### Q20

Add a **new platform** called `"HBO Max"` at the **end of Platforms section**.

✅ **Expected Result:**
Platforms show:

```
Netflix | Disney+ | Prime Video | HBO Max
```

💡 **Solution:**

```js
const hbo = document.createElement("div");
hbo.className = "platform";
hbo.textContent = "HBO Max";

document.querySelector(".platforms").append(hbo);
```

---

### Q21

Add a new `<li>` movie called **"Tenet"**, but make it the **last child** of the Movie List.

✅ **Expected Result:**

```
... Joker
Tenet
```

💡 **Solution:**

```js
const tenet = document.createElement("li");
tenet.textContent = "Tenet";
tenet.className = "movie";
document.getElementById("movies-list").append(tenet);
```

---

### Q22

Bold the text of the **first and last movies**.

✅ **Expected Result:**

* Inception → Bold
* Joker → Bold

💡 **Solution:**

```js
const movieList = document.getElementById("movies-list");
movieList.firstElementChild.style.fontWeight = "bold";
movieList.lastElementChild.style.fontWeight = "bold";
```

---

### Q23

Clone **Box 3** and insert the copy **before Box 1**.

✅ **Expected Result:**
Boxes order becomes:

```
Box 3 | Box 1 | Box 2 | Box 3 | Box 4 | Box 5
```

💡 **Solution:**

```js
const box3 = document.getElementById("box3");
const cloneBox3 = box3.cloneNode(true);

const box1 = document.getElementById("box1");
box1.parentElement.insertBefore(cloneBox3, box1);
```

---

### Q24

From **Avatar**, log the **heading `<h2>` of its section**.

✅ **Expected Result:**
Logs:

```
Movie List
```

💡 **Solution:**

```js
const avatar = document.getElementById("avatar");
console.log(avatar.closest("section").querySelector("h2").textContent);
```

---

### Q25

Make all **platforms** have a **yellow background**, but only the **middle one (Disney+)** should have **black text**.

✅ **Expected Result:**

* Netflix → yellow background, normal text
* Disney+ → yellow background, black text
* Prime → yellow background, normal text

💡 **Solution:**

```js
const platforms = document.querySelectorAll(".platforms .platform");
platforms.forEach(p => p.style.backgroundColor = "yellow");
platforms[1].style.color = "black";
```

---

### Q26

Replace the text of **Box 2** with the title of the **first movie (Inception)**.

✅ **Expected Result:**
Box 2 shows:

```
Inception
```

💡 **Solution:**

```js
const firstMovie = document.querySelector("#movies-list li");
document.getElementById("box2").textContent = firstMovie.textContent;
```

---

### Q27

Insert a new **button** `"🔁 Restart"` after the **Stop button** inside Controls.

✅ **Expected Result:**

```
▶ Play | ⏸ Pause | ⏹ Stop | 🔁 Restart
```

💡 **Solution:**

```js
const restartBtn = document.createElement("button");
restartBtn.textContent = "🔁 Restart";
restartBtn.className = "ctrl";

const stopBtn = document.getElementById("stopBtn");
stopBtn.insertAdjacentElement("afterend", restartBtn);
```

---

### Q28

Delete the **first box** and the **last box**.

✅ **Expected Result:**
Remaining:

```
Box 2 | Box 3 | Box 4
```

💡 **Solution:**

```js
const boxes = document.querySelector(".boxes");
boxes.removeChild(boxes.firstElementChild);
boxes.removeChild(boxes.lastElementChild);
```

---

### Q29

Change the **Play button’s text** to `"▶ Watch Movie"` and make it **green**.

✅ **Expected Result:**
Play button shows:

```
▶ Watch Movie
```

and appears green.

💡 **Solution:**

```js
const play = document.getElementById("playBtn");
play.textContent = "▶ Watch Movie";
play.style.color = "green";
```

---

### Q30

From **Box 4**, log the text of the **last platform** (Prime Video).

✅ **Expected Result:**
Logs:

```
Prime Video
```

💡 **Solution:**

```js
const box4 = document.getElementById("box4");
console.log(box4.closest("body").querySelector("#prime").textContent);
```

---
