const displayPassword = document.getElementById("displayPassword");
const generatePasswordButton = document.getElementById("generatePassword");

generatePassword.addEventListener("click", () => {
  const generatedPassword = (
    length,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  ) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
      return "Password length must be greater than 0.";
    }

    if (allowedChars.length === 0) {
      return "At least one character type must be selected.";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }

    return password;
  };

  const passwordLength = 12;
  const includeLowerCase = true;
  const includeUpperCase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  const password = generatedPassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );

  displayPassword.textContent = password;
});
