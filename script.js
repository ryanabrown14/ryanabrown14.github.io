// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var symbol = ["!","@","#","$","%","^","&","*","(",")","-","+"];



function generatePassword (){
var passwordLengthConfirm = window.prompt("How many characters would you like your password to be? It must be between 8 and 128.");
if (passwordLengthConfirm < 8 || passwordLengthConfirm > 128){
  window.alert ("Your number of characters must be between 8 and 128.");
  passwordLengthConfirm = window.prompt("How many characters would you like your password to be?");
}

var upperCaseConfirm = window.confirm ("Would you like to use upercase letters?");
var lowerCaseConfirm = window.confirm ("Would you like to use lowercase letters?");
var numberConfirm = window.confirm ("Would you like to use numbers?");
var symbolConfirm = window.confirm ("Would you like to use symbols?");
if (!upperCaseConfirm && !lowerCaseConfirm && !numberConfirm && !symbolConfirm){
  window.alert("You must select one.");
  upperCaseConfirm = window.confirm ("Would you like to use upercase?");
  lowerCaseConfirm = window.confirm ("Would you like to use lowercase?");
  numberConfirm = window.confirm ("Would you like to use numbers?");
  symbolConfirm = window.confirm ("Would you like to use symbols?");

}


var passwordChar = []
if (upperCaseConfirm){
  passwordChar= passwordChar.concat(upperCase)
}
if (lowerCaseConfirm) {
  passwordChar= passwordChar.concat(lowerCase)

}
if (numberConfirm){
  passwordChar= passwordChar.concat(number)
}
if (symbolConfirm){
  passwordChar = passwordChar.concat(symbol)
}

var randomPassword = ""
for (var i = 0; i < passwordLengthConfirm; i++) {
  randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  
}
return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//I'm not sure why this is giving me an error message^^
