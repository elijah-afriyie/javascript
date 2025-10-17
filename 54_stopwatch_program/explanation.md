# Explanation of Code

# 1) Quick overview

This code implements a stopwatch that:

- Starts/resumes counting time (`start()`),
- Pauses (`stop()`),
- Resets to zero (`reset()`),
- Updates the on-screen display frequently (`update()` called by `setInterval`).

It measures time by comparing timestamps (`Date.now()`) rather than relying on exact timer intervals, so the displayed time stays correct even if the update calls are delayed.

# 2) Variables — what each one is for

```js
const display = document.getElementById("display");
let timer = null; // the id returned by setInterval (used to stop the interval)
let startTime = 0; // the timestamp when the stopwatch was (re)started
let elapsedTime = 0; // total elapsed time in ms (updated continuously)
let isRunning = false; // flag to prevent multiple intervals from being started
```

- `display`: DOM element where the time string is shown (assumes an element with id="display" exists).
- `timer`: holds the interval id so `clearInterval(timer)` can stop updates.
- `startTime`: when you start/resume the stopwatch you set this so `elapsedTime = now - startTime`.
- `elapsedTime`: current elapsed milliseconds — used for formatting.
- `isRunning`: prevents starting the timer twice.

# 3) What each function does

### `start()`

```js
if (!isRunning) {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(update, 10);
  isRunning = true;
}
```

- If the stopwatch is not already running, it sets `startTime` to `Date.now() - elapsedTime`.

  - This is the key trick for **resuming**: if `elapsedTime` is non-zero (because we paused earlier), subtracting it makes the math `Date.now() - startTime` continue from the paused value.

- Calls `setInterval(update, 10)` to call `update()` roughly every 10ms.
- Sets the `isRunning` flag so further `start()` calls do nothing until stopped.

### `stop()`

```js
if (isRunning) {
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  isRunning = false;
}
```

- Stops the periodic updates (`clearInterval`).
- Saves the current total time into `elapsedTime` (so we can resume later).
- Clears the running flag.

### `reset()`

```js
clearInterval(timer);
startTime = 0;
elapsedTime = 0;
isRunning = false;
display.textContent = "00:00:00:00";
```

- Stops any running interval, zeroes the timing state, sets the `display` back to the initial string.
- Note: it does not set `timer = null` — that's a minor thing we can tidy up.

### `update()`

```js
const currentTime = Date.now();
elapsedTime = currentTime - startTime;

let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
  .toString()
  .padStart(2, "0");
let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
  .toString()
  .padStart(2, "0");
let seconds = Math.floor((elapsedTime / 1000) % 60)
  .toString()
  .padStart(2, "0");
let milliseconds = Math.floor((elapsedTime % 1000) / 10)
  .toString()
  .padStart(2, "0");

display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
```

- Calculates `elapsedTime` as the difference between now and `startTime`.
- Converts ms to `hours`, `minutes`, `seconds`, and `milliseconds` (see next section for exact math).
- `padStart(2, "0")` ensures each piece is at least two digits (e.g., `5` -> `"05"`).
- The final `milliseconds` value is actually **centiseconds** (hundredths of a second), because the code divides ms by 10 and takes the floor -> gives two digits from `00` to `99`.

# 4) The math explained (with a concrete example)

Assume `elapsedTime = 1,234 ms` (1.234 seconds).

- `hours = Math.floor(1,234 / 3,600,000) = 0 -> "00"`
- `minutes = Math.floor(1,234 / 60,000 % 60) = 0 -> "00"`
- `seconds = Math.floor(1,234 / 1000 % 60) = 1 -> "01"`
- `milliseconds = Math.floor(1,234 % 1000 / 10) = Math.floor(234 / 10) = 23 -> "23"`

Display becomes: `00:00:01:23` (hours:minutes:seconds:centiseconds)

If you want full three-digit milliseconds (000–999), use:

```js
let ms = Math.floor(elapsedTime % 1000)
  .toString()
  .padStart(3, "0");
```

# 5) Important behaviors & why it’s robust

- **Using timestamps (`Date.now()`) is robust** — even if the browser’s intervals are delayed/throttled, the displayed time is still correct because you compute elapsed time from absolute timestamps instead of counting interval ticks.
- `isRunning` prevents duplicate intervals and accidental speedups from multiple `setInterval` calls.
- `startTime = Date.now() - elapsedTime` is the canonical resume trick: it makes the elapsed calculation continue from where it left off.

# 6) Gotchas & edge cases

- `setInterval(update, 10)` tries to update every 10ms, but JavaScript timers are not guaranteed to be exact:

  - Tabs in the background may be throttled by the browser.
  - CPU load can delay timer callbacks.
  - This is why using `Date.now()` for actual elapsed time is correct — it compensates for delayed callbacks.

- `milliseconds` in your code are centiseconds, not true milliseconds. If you expect `:ms` to show 3 digits, change the calculation.
- `display` may be `null` if the element id doesn’t exist — consider guarding it.
- `reset()` doesn’t set `timer = null`. Not a big bug, but tidier to set `timer = null` after clearing.
- `padStart(2, "0")` on `hours` will still show more than 2 digits if hours ≥ 100 — `padStart` only ensures a minimum width, it won’t truncate.

# 7) Minor improvements and alternatives

### Tidy small fixes

```js
function reset() {
  if (timer) clearInterval(timer);
  timer = null;
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
```

### Use `performance.now()` for better precision

`performance.now()` offers higher-resolution timestamps (sub-millisecond) and is monotonic:

```js
function start() {
  if (!isRunning) {
    startTime = performance.now() - elapsedTime;
    timer = setInterval(updateWithPerformanceNow, 10);
    isRunning = true;
  }
}
function updateWithPerformanceNow() {
  const now = performance.now();
  elapsedTime = now - startTime;
  // format same as before
}
```

### Use `requestAnimationFrame` for smoother UI updates (runs ~60fps and pauses in background)

If you only need updates at screen refresh rate (≈60Hz) you can use `requestAnimationFrame` instead of setInterval:

```js
let rafId = null;

function start() {
  if (!isRunning) {
    startTime = performance.now() - elapsedTime;
    isRunning = true;
    tick(); // start RAF loop
  }
}

function tick() {
  const now = performance.now();
  elapsedTime = now - startTime;
  updateDisplayFromElapsed();
  rafId = requestAnimationFrame(tick);
}

function stop() {
  if (isRunning) {
    cancelAnimationFrame(rafId);
    elapsedTime = performance.now() - startTime;
    isRunning = false;
  }
}
```

`requestAnimationFrame` is better for animations and when you want to avoid over-updating the DOM (and it’s paused in background tabs, which saves CPU).

### Reduce DOM writes

Updating the DOM every 10ms can be heavy. You can throttle updates to, say, every 50–100ms, or only update the text when the visible string actually changes.

# 8) How to wire this to buttons (example HTML)

```html
<div id="display">00:00:00:00</div>
<button id="startBtn">Start</button>
<button id="stopBtn">Stop</button>
<button id="resetBtn">Reset</button>
```

```js
document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("resetBtn").addEventListener("click", reset);
```

# 9) Recap — main things to remember

- `Date.now()` vs `setInterval`: you use `Date.now()` to compute true elapsed time, `setInterval` only schedules updates.
- `startTime = Date.now() - elapsedTime` lets you resume correctly.
- `milliseconds` variable in the code represents **centiseconds** (two digits) — change if you want 3 digits.
- Consider `performance.now()` or `requestAnimationFrame` for better precision or smoother updates.
- Prevent multiple `setInterval` calls using a flag (you already do this with `isRunning`).

---
