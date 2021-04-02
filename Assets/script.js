//Global variables
var start;
var password = [];
var confirmSpecial;
var confirmNumeric;
var confirmUpper;
var confirmLower;
var setsOfChar;
var generateBtn = document.querySelector("#generate");
//all character values
var specialChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numericValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
  passwordText.value = password;
}
// Stores click event to create passwrod
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Character limit prompt
  var start = parseInt(
    prompt("How many characters would you like in your password? Min: 8, Max: 128")
  );
  {
    // If no value is selected
    if (!start) {
      alert("Please enter your desired number first.");
      //this "or" statement validates the pw length
    } else if (start < 8 || start > 128) {
      start = parseInt(alert("Please choose a number between 8 and 128 characters."));
    } else {
      //confirms for pw character types
      confirmLower = confirm("Will this password have lowercase letters?");
      confirmUpper = confirm("Will this password have uppercase letters?");
      confirmNumeric = confirm("Will this password have numbers?");
      confirmSpecial = confirm("Will this password have special characters?");
    }
    //0 types
    if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
      setsOfChar = alert("Please choose at least one type of chrarcter.");
    }
    //4 types
    else if (confirmLower && confirmUpper && confirmNumeric && confirmSpecial) {
      setsOfChar = lowercaseLetters.concat(uppercaseLetters, numericValue, specialChars);
    }
    //3 types
    else if (confirmLower && confirmUpper && confirmNumeric) {
      setsOfChar = lowercaseLetters.concat(uppercaseLetters, numericValue);
    } else if (confirmLower && confirmUpper && confirmSpecial) {
      setsOfChar = lowercaseLetters.concat(uppercaseLetters, specialChars);
    } else if (confirmLower && confirmNumeric && confirmSpecial) {
      setsOfChar = lowercaseLetters.concat(numericValue, specialChars);
    } else if (confirmUpper && confirmNumeric && confirmSpecial) {
      setsOfChar = uppercaseLetters.concat(numericValue, specialChars);
    }
    //2 types
    else if (confirmLower && confirmUpper) {
      setsOfChar = lowercaseLetters.concat(uppercaseLetters);
    } else if (confirmLower && confirmNumeric) {
      setsOfChar = lowercaseLetters.concat(numericValue);
    } else if (confirmLower && confirmSpecial) {
      setsOfChar = lowercaseLetters.concat(specialChars);
    } else if (confirmUpper && confirmNumeric) {
      setsOfChar = uppercaseLetters.concat(numericValue);
    } else if (confirmUpper && confirmSpecial) {
      setsOfChar = uppercaseLetters.concat(specialChars);
    } else if (confirmNumeric && confirmSpecial) {
      setsOfChar = numericValue.concat(specialChars);
    }
    // 1 type
    else if (confirmLower) {
      setsOfChar = lowercaseLetters;
    } else if (confirmUpper) {
      setsOfChar = uppercaseLetters;
    } else if (confirmNumeric) {
      setsOfChar = numericValue;
    } else if (confirmSpecial) {
      setsOfChar = specialChars;
    }
  }
  //Math for loop for the pw
  for (var i = 0; i < start; i++) {
    var chosenSets = setsOfChar[Math.floor(Math.random() * setsOfChar.length)];
    password.push(chosenSets);
  }
  //added a join method to add the arrays into one complete string
  var finish = password.join([]);
  return finish;
}
