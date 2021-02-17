// Array of lowercase letters
var lowerCase = [
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
  "p",
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

// Array of uppercase letters
var upperCase = [
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

// Array of numerics
var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// function for password prompts
function passwordPrompts() {
  var pwLength = parsInt(
    prompt("How many characters do you want your password to be?")
  );

  if(pwLength < 8) {
    alert("Password length is too short")
  }
  if(pwLength > 128) {
    alert("Password length is too long")
  }
  
  var chooseLowercase = confirm("If you want lower case characters, click OK.");
  var chooseUppercase = confirm("If you want upper case characters, click OK.");
  var chooseNumerics = confirm("If you want numbers, click OK.");
  var chooseSpecialCharacters = confirm("If you want special characters, click OK.");
}

passwordPrompts() 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
