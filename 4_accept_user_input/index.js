let firstName;
let lastName;

document.getElementById("mySubmit").onclick = function () {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  console.log(`Your name is ${firstName} ${lastName}`);
};
