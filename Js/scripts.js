var randomNumber;
// function for generating random numbers
function rollDice(){
	var die = document.getElementById('die');
	randomNumber = Math.ceil(Math.random()*6);
	die.innerHTML = randomNumber;
}
 // end of function
