var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speCase = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\'];
var availArray = [lowCase, uppCase, numCase, speCase];
var chosenArray = [];
// var passwordLength = takePasswordLength();

document.getElementById("generate").addEventListener("click", writePassword);
function writePassword(){
      var numbers = confirm("Would you like numbers in your password?");
      var special = confirm("Would you like special characters in your password?");
      var passwordCase = confirm("Would you like upper case letters in your password?");
      var passwordLength = takePasswordLength();
      chooseCharacters(numbers, special, passwordCase);
      pickRand(passwordLength);
  }
  
  
  function takePasswordLength(){
      var passwordLength = prompt("How many characters do you want in your password?");
        if (passwordLength > 7 && passwordLength < 129){
            return passwordLength;
        } else {
            var retryPasswordLength = confirm("Password must be at least 8 characters and no more than 128 characters long.");
            if (retryPasswordLength == true) {
              return takePasswordLength();
        }
          else {
             alert("This isn't working for either of us...");
          }
       }
  }
  function chooseCharacters(numbers, special, passwordCase) {
      if (numbers == true || special == true || passwordCase == true) {
        pushCharacters(numbers, special, passwordCase)
      }else{
        var reconfirmPassCriteria = confirm("No password criteria were selected. Please choose.")
        if (reconfirmPassCriteria == true){
            pushCharacters()

        }else{
          alert("No characters have been selected. Please try again.")
        }

      }
    }
  function pushCharacters(numbers, special, passwordCase) {
        if (numbers == true){
            chosenArray.push.apply(chosenArray, numCase)
        }
        if (special == true){
          chosenArray.push.apply(chosenArray, speCase)
        }
        if (passwordCase == true){
          chosenArray.push.apply(chosenArray, uppCase)
        }

      
    }
  
  function pickRand(passwordLength){

    var password = ""

    for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * (chosenArray.length));
    password += chosenArray[randomIndex]
    }
    document.getElementById("password").innerHTML = password;

  }