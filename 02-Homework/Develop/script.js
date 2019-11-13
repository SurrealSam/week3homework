var genBtn=document.querySelector("#generate");
var copyBtn=document.querySelector("#copy");
var textArea=document.querySelector("#textArea");

var lowerChar= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar= ["&","$","#","@","!","*","_","."];
var numberChar= ["1","2","3","4","5","6","7","8","9","0"];

var needLower=confirm("Does you password require lowercase letters?");
var needUpper=confirm("Does you password require uppercase letters?");
var needSpecial=confirm("Does your password require special characters?");
var needNumber=confirm("Does your password require numbers?");






//var points = [40, 100, 1, 5, 25, 10];
//document.getElementById("demo").innerHTML = points;  

//function myFunction() {
  //points.sort(function(a, b){return 0.5 - Math.random()});
  //document.getElementById("demo").innerHTML = points;
//}