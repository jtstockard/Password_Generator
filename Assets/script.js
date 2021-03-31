// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //TODO: CODE HERE
  passwordText.value = password;
}

function getSpecialChars() {
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  for (var i = 9; i < specialChars.length; i++) {}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {}
var password = "";

var numericValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//ask for password length
//validate pw responce

//

return password;
