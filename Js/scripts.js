var randomNumber;
// function for generating random numbers
function rollDice(){
	var die = document.getElementById('die');
	randomNumber = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber;
}
 // end of function
 //function for enabling and disabling the buttons
 function enablePlayer2() {
     document.getElementById("dice2").disabled = false;
     document.getElementById("pass2").disabled = false;
     document.getElementById("dice").disabled = true;
     document.getElementById("pass").disabled = true;
         }
 function enablePlayer1() {
     document.getElementById("dice").disabled = false;
     document.getElementById("pass").disabled = false;
     document.getElementById("dice2").disabled = true;
     document.getElementById("pass2").disabled = true;
 }
