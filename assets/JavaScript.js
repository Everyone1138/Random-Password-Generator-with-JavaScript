// Variable and Array declarations 
var pwLength = "";
var specChar;
var numericChar;
var upperCase;
var lowerCase;
// these are the arrays that the rest of the code uses to pull what it needs to make a random code 
//var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", "_", ".", "/", "<", ">", "?", "~", "$", "@", "{", "}", "[", "]", "^", "#"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// This prompt asks the user to input the length of the desired password. It has to be within the 8-128 paramenter 
function generatePassword() { // Below is how the user can choose the password length
  var pwLength = (prompt("How many characters between 8 and 128 would you like your password to be?"));
// Here we have the while loop if a number outside of 8-128 is given an alert will pop-up for the user.
// The parameter starts with 7 so that the user can choose 8. it ends with 129 so the user can choose 128 
  while(pwLength <= 7 || pwLength >= 129) {
      alert("The password length must be between 8-128 characters! Please try again.");
      var pwLength = (prompt("How many characters would you like your password to contain? Remember: it has to be between 8-128 characters!"));
      } 
      alert(`Your new password will be be ${pwLength} characters long!`);
// these are a series of prompts that ask the user what they 
    var specChar = confirm("Click the OK button to confirm that you want to include special characters in your password.");
    var numericChar = confirm("Click the OK button to confirm that you want to include numeric characters in your password.");   
    var lowerCase = confirm("Click the OK button to confirm that you want to include lowercase letters in your password.");
    var upperCase = confirm("Click the OK button to confirm that you want to include uppercase letters in your password.");  
// If the user clicked the cancel on all questions this pops up to ask the user to click on at least one       
    while(upperCase === false && lowerCase === false && specChar === false && numericChar === false) {
        alert("You must choose at least one!");
        var specChar = confirm("Click the OK button to confirm that you want to include special characters in your password.");
        var numericChar = confirm("Click the OK button to confirm that you want to include numeric characters in your password.");    
        var lowerCase = confirm("Click the OK button to confirm that you want to include lowercase letters in your password.");
        var upperCase = confirm("Click the OK button to confirm that you want to include uppercase letters in your password.");      
    } 
// These are the if conditions that assign/concat the password parameters to pwChar.  
      var pwChar = []  
    if (specChar) {
      pwChar = pwChar.concat(specialChar)
    }
    if (numericChar) {
      pwChar = pwChar.concat(number)
    }
    if (lowerCase) {
      pwChar = pwChar.concat(alphaLower)
    }
    if (upperCase) {
      pwChar = pwChar.concat(alphaUpper)
    }
      console.log(pwChar)
// this is the empty string that is filled based on selection of random characters pulled from the array
      var randomPw = ""
      for (var i = 0; i < pwLength; i++) {
        randomPw = randomPw + pwChar[Math.floor(Math.random() * pwChar.length)];
        console.log(randomPw)
      }
      return randomPw;
} //this is the query selector. it write the password to the #password input
document.querySelector("#generate").addEventListener("click", writePassword);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert(`After you hit the OK button your password will be generated!`);
}


