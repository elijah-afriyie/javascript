function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current counter is ${counter.getCount()}`);

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
game.decreaseScore(1);

/* ADDITIONAL EXAMPLES

Create a function `bankAccount` that starts with a balance of `100`.
It should return an object with methods `deposit`, `withdraw`, and `checkBalance`.

*/

function bankAccount() {
  let balance = 100;

  return {
    deposit: function (amount) {
      balance += amount;
      return `You have received a deposit of $${amount} into your account. Your balance: $${balance}`;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        `A withdrawal of $${amount} has been made from your account. Remaining balance: $${balance}`;
      } else {
        console.error("You don't have enough balance!");
      }
    },
    checkBalance: function () {
      return `Your current balance is $${balance} as of today.`;
    },
  };
}

const myBankAccount = bankAccount();
console.log(myBankAccount.checkBalance());

myBankAccount.deposit(5900);
console.log(myBankAccount.checkBalance());

myBankAccount.withdraw(8000);
console.log(myBankAccount.checkBalance());
