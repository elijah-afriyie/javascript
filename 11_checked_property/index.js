const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("MasterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subcribeResult = document.getElementById("subcribeResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  /* Check Checkbox */
  if (myCheckBox.checked) {
    subcribeResult.textContent = `You are subscribed!`;
  } else {
    subcribeResult.textContent = `You are not subscribed!`;
  }

  /* Check Radio Buttons */
  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with VISA!`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard!`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal!`;
  } else {
    paymentResult.textContent = `You must select a payment type!`;
  }
};
