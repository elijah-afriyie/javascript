const randNum = document.getElementById("randNum");
const livesRemaining = document.getElementById("livesRemaining");
const numInput = document.getElementById("numInput");
const submitBtn = document.getElementById("submitBtn");

// game state (lives + random number)
let lives = 3;
let randomNum = Math.floor(Math.random() * 5) + 1;

submitBtn.addEventListener("click", () => {
  const userGuess = Number(numInput.value);

  if (userGuess === randomNum) {
    alert("🎉 You guessed the correct number!");
    randNum.textContent = `The correct number was ${randomNum}`;
    submitBtn.disabled = true; // stop the game
  } else {
    lives--;

    if (lives > 0) {
      livesRemaining.textContent = `❌ Wrong guess. You have ${lives} lives remaining.`;
    } else {
      livesRemaining.textContent = "😢 Game over. No lives left.";
      alert(`The correct number was ${randomNumber}`);
      submitBtn.disabled = true; // stop the game
    }
  }

  numInput.value = ""; // clear input after each guess
});
