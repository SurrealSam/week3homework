var genBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var textArea = document.querySelector("#textArea");

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["&", "$", "#", "@", "!", "*", "_", "."];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordArray = [];
var finalPassword = [];

var needLower = confirm("Does you password require lowercase letters?");
var needUpper = confirm("Does you password require uppercase letters?");
var needSpecial = confirm("Does your password require special characters?");
var needNumber = confirm("Does your password require numbers?");
var passwordLength = prompt("How long would you like your password to be? (Please enter a number from 8-128)");



genBtn.addEventListener("click", function () {

    if (needLower, needUpper, needSpecial, needNumber === false) {
        alert("Please refresh and select at least one character type")
    }
    else {
        if (passwordLength < 8) {
            alert("Please refresh and enter a number from 8-128");
        }
        else if (passwordLength > 128) {
            alert("Please refresh and enter a number from 8-128");
        }
        else {
            if (needLower === true) {
                passwordArray = passwordArray.concat(lowerChar);
            }
            else {

            }
            if (needUpper === true) {
                passwordArray = passwordArray.concat(upperChar);
            }
            else {

            }
            if (needSpecial === true) {
                passwordArray = passwordArray.concat(specialChar);
            }
            else {

            }
            if (needNumber === true) {
                passwordArray = passwordArray.concat(numberChar);
            }
            else {

            }
            for (i = 0; i < parseInt(passwordLength); i++) {
                var randomChar = passwordArray[Math.floor(Math.random() * passwordArray.length)];
                finalPassword.push(randomChar);
            }

            textArea.textContent = finalPassword.join("");

        }
    }
});




copyBtn.addEventListener("click", function () {

    /* Select the text field */
    textArea.select();
    textArea.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
});





//var points = [40, 100, 1, 5, 25, 10];
//document.getElementById("demo").innerHTML = points;  

//function myFunction() {
  //points.sort(function(a, b){return 0.5 - Math.random()});
  //document.getElementById("demo").innerHTML = points;
//}