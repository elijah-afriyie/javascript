let userName = "Elijah King ";

// console.log(userName.charAt(0));

// console.log(userName.indexOf("a"));

// console.log(userName.lastIndexOf("j"));

// console.log(userName.length);

// userName = userName.trim();
// console.log(userName);

// console.log(userName.toUpperCase());

// console.log(userName.toLocaleLowerCase());

// userName = userName.repeat(3);
// console.log(userName);

// let result1 = userName.startsWith(" ");
// if (result1) {
//   console.log("Your username can't begin with ' '");
// } else {
//   console.log(userName);
// }

// let result2 = userName.endsWith(" ");
// if (result2) {
//   console.log("Your username can't end with ' '");
// } else {
//   console.log(userName);
// }

// let result3 = userName.includes(" ");
// if (result3) {
//   console.log("Your username can't include ' '");
// } else {
//   console.log(userName);
// }

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", " ");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);
