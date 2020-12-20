var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var speCase = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\'];
var availArray = [lowCase, uppCase, numCase, speCase];
var chosenArray = [];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

    function writePassword(){
      var passwordText = document.querySelector("#password");
      var passwordLength = takePasswordLength();
      var passwordCase = collectPasswordCase();
      var numbers = collectPasswordNums();
      // var special = 
      var passChar = pickRand();

      collectpasswordData(passwordCase, numbers, special);
      pickRand(passwordLength)
    }
    
      var passwordLength = prompt("How long do you want your password to be? It must be at least 8 characters and no more than 128 characters long.");
        if (passwordLength > 7 && passwordLength < 129) {
        alert("OK")
          // return passwordLength;
        }
          else {
            var retryPasswordLength = prompt("Please enter a number between 8 and 128")
             if (passwordLength > 7 && passwordLength < 129) {
            alert("OK")
              // return passwordLength;
          }
       }
      var passwordCase = confirm("Would you like upper case letters in your password?");
      if (passwordCase == true) {
        chosenArray.push.apply(chosenArray, uppCase);
      }
      console.log('Password Case: ', passwordCase);
    
      var numbers = confirm("Would you like numbers in your password?");
      if (numbers == true) {
        chosenArray.push.apply(chosenArray, numCase);
      
      console.log('Password Numbers: ', numbers);
    }
      var special = confirm("Would you like special characters in your password?");
      if (special == true) {
        chosenArray.push.apply(chosenArray, speCase);
      
      console.log('Password Special: ', speCase);
      }
      function pickRand(passwordLength) {
        for (var i = 0; i < passwordLength; i++) {
          var arrInd = Math.floor(Math.random() * chosenArray.length);
          return chosenArray[arrInd];
        }
      }
      function generatePass(numberofChars){
        var password = ""
        for (var i = 0; i < numberofChars; i++) {
        var randomIndex = Math.floor(Math.random() * (caseArray.length));
        passway += caseArray[randomIndex]
        }

        document.getElementById("generated_password").innerHTML = password;
      }
      