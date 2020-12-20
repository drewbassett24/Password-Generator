// Assignment Code (this gets the button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button (registers when button is clicked)
generateBtn.addEventListener("click", writePassword);


var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwordCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['!', '\"', '£', '$', '%', '^', '&', '*', '>', '<', '\;', '(', ')', '+', '.', ',', '-', ':', '?', '[', ']', '_', '{', '}', '@', '\/', '\\'];


/*We will declare generatepassword function here.*/

// function myFunction() {
//   var person = prompt("Please enter your name", "Harry Potter");
//   if (person != null) {
//     document.getElementById("demo").innerHTML =
//     "Hello " + person + "! How are you today?";
//   }
// }

function generatePassword() {

  var passwordLength = prompt("How long do you want your password to be? it must be at least 8 characters and no more than 128 characters long.");
  if (passwordLength > 7 && passwordLength < 129) {
    alert("OK")

    var passwordCase = confirm("Would you like upper case letters in your password?");
    // if passwordCase === true //Does this just automatically pass on to the next if/else statement or do I need an else?
    //   for (i = passwordCase.length -1; i > 0; i--) {
    //     j = Math.floor(Math.random() * i)
    //    k = passwordCase[i]
    //     passwordCase[i] = passwordCase[j]
    //     passwordCase[j] = k  
      // }
    console.log('Password Case: ', passwordCase);

    var numbers = confirm("Would you like numbers in your password?");
    console.log('Password Numbers: ', numbers);

    var special = confirm("Would you like special characters in your password?");
    console.log('Password Special: ', special);

    //To generate random characters from the arrays above

    for (i = lower.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = lower[i]
      lower[i] = lower[j]
      lower[j] = k
    } //This requires a way to return something to the generate password function
    
    for (i = numbers.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = numbers[i]
      numbers[i] = numbers[j]
      numbers[j] = k
    }
    for (i = special.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = special[i]
      special[i] = special[j]
      special[j] = k
    }      

    return password;

  } else {
      alert("Please enter a number between 8 and 128")
  }


  
}

/*The function should offer several prompts
- 3 or 4 criteria that are discrete (length, character types)
length >8 <=128
char types can include upper, lower, numeric and special
  (use arrays for each of these)
  validate user input (use an If condition that gives an alert - 'OK' if input is >8 and <129
Always need something - Else Return empty string - ""
  */


  // function genRanNum() {
  //   return String.fromCharCode(Math.random() * 10)).toString();
  // }
  // return
