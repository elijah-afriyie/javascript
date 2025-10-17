let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}

for (let i = 10; i > 0; i--) {
  setTimeout(() => console.log(i), (11 - i) * 1000);
}

setTimeout(() => console.log("Go! 🔥🔥🔥🔥"), 11000);
