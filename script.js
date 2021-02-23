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
// changing user input from string to integer
  var pwLength = parseInt(
    prompt("How many characters do you want your password to be?")
  );

  if (isNaN(pwLength) === true) {
    alert("You must select a number");
    return;
  }

  // if they choose a password length too short, we give them an alert
  if(pwLength < 8) {
    alert("Password length is too short");
    return;
  }

  // if user chooses a password length too long, we give them an alert
  if(pwLength > 128) {
    alert("Password length is too long");
    return;
  }
  
  // Using booleans to intake user's selections of password criteria
  var chooseLowercase = confirm("If you want lower case characters, click OK.");
  var chooseUppercase = confirm("If you want upper case characters, click OK.");
  var chooseNumerics = confirm("If you want numbers, click OK.");
  var chooseSpecialCharacters = confirm("If you want special characters, click OK.");

  // if user selects cancel to every criteria option, we give them an alert 
  if(
    chooseLowercase === false &&
    chooseUppercase === false &&
    chooseNumerics === false &&
    chooseSpecialCharacters === false) {
    alert("You must select at least one character type");
    return;
  }


  // creating an object to pull in user selections in the next function
var options = {
  length: pwLength,
  chooseLowercase: chooseLowercase,
  chooseUppercase: chooseUppercase, 
  chooseNumerics: chooseNumerics, 
  chooseSpecialCharacters: chooseSpecialCharacters,
};

return options;
}

function createPassword() {
  // calling previous function to access user inputs
  var options = passwordPrompts();

  // establishing an empty array to create our password 
  var passwordEntry = [];

  // if user chose lower case options, we are pushing that into the empty array
  if (options.chooseLowercase) {
    for (i = 0 ; i < lowerCase.length; i++) {
      passwordEntry.push(lowerCase[i]);
    }
  }
  // if user chose special charaters, we are pushing that into the empty array
  if (options.chooseSpecialCharacters) {
    for (i = 0 ; i < specialCharacters.length; i++) {
      passwordEntry.push(specialCharacters[i]);
    }
  }
  // if user chose numerics, we are pushing that into the empty array
  if (options.chooseNumerics) {
    for (i = 0 ; i < numerics.length; i++) {
      passwordEntry.push(numerics[i]);
    }
  }
  // if user chose upppercase, we are pushing that into the empty array 
  if (options.chooseUppercase) {
    for (i = 0 ; i < upperCase.length; i++) {
      passwordEntry.push(upperCase[i]);
    }
  }
 console.log(passwordEntry) 
// creating a variable to produce password
  var producePassword = ""
// randomizing password
  for (i = 0; i < options.length; i++) {
    producePassword += passwordEntry[Math.floor(Math.random() * passwordEntry.length)];
  }
  console.log(producePassword)
return producePassword;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

