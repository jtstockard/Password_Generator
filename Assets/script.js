// Assignment Code
var start;
var password = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpper;
var confirmLower;
var generateBtn = document.querySelector("#generate");
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var numericValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "P",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
generateBtn.addEventListener("click", writePassword);
//TODO: CODE HERE
function generatePassword() {
  var start = parseInt(
    prompt("How many characters would you like in your password? Min: 8, Max: 128")
  );
  {
    if (!start) {
      alert("Please enter your desired number first.");
    } else if (start < 8 || start > 128) {
      start = parseInt(prompt("Please choose a number between 8 and 128 characters."));
    } else {
      confirmLower = confirm("Will this password have lowercase letters?");
      confirmUpper = confirm("Will this password have uppercase letters?");
      confirmNumeric = confirm("Will this password have numbers?");
      confirmSpecial = confirm("Will this password have special characters?");
    }
  }

  passwordText.value = password;

  function getSpecialChars() {
    for (var i = 0; i < specialChars.length; i++) {
      return getSpecialChars;
    }
  }
  function getNumericValue() {
    for (var i = 0; i < numericValue.length; i++) {
      return getNumericValue;
    }
  }
  function getUppercaseLetters() {
    for (var i = 0; i < uppercaseLetters.length; i++) {
      return getUppercaseLetters;
    }
  }
  function getLowercaseLetters() {
    for (var i = 0; i < lowercaseLetters.length; i++) {
      return getLowercaseLetters;
    }
  }
  return password;

  // Add event listener to generate button

  //ask for password length
  //validate pw responce
}
