$(document).ready(function() {
var randomNumber=function(min,max){
	return Math.floor(Math.random()*(max-min+1)) +min;
}
var CompSelection = randomNumber(19,125);
console.log(compSelection);
var winCounter = 0;

var loseCounter = 0;
var redGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var blueGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yellowGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var greenGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;

// console.log(redGem,blueGem,yellowGem,greenGem);

function mixingCrystalValValues(){
	redGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	blueGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	yellowGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	greenGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	console.log(redGem);
}


function initPlay(){
	// CompSelection = Math.floor(Math.random()*(120 - 19 + 1) + 19);

	if(userTotalScore === CompSelection){
		winCounter++;
		$('#win-counter').text(winCounter);
		// $('#win-or-lose').text('You win!');

		CompSelection = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-numb').text(CompSelection);
		userTotalScore = 0;
		
		console.log(CompSelection);

		$('#current-score-counter').text(userTotalScore);
		mixingCrystalValValues();
	} else if(userTotalScore > CompSelection){
		loseCounter++;
		$('#loss-counter').html(loseCounter);
		$('#win-or-lose').text('You lose!');
		CompSelection = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-numb').text(CompSelection);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		mixingCrystalValValues();
	}
}



$('#random-numb').text(CompSelection);



$('#redGem').on('click', function(){
	userTotalScore += redGem;
	$('#current-score-counter').text(userTotalScore);
	initPlay();
});


$('#blue').on('click', function(){
	userTotalScore += blueGem;
	$('#current-score-counter').text(userTotalScore);
	initPlay();
});


$('#yellow').on('click', function(){
	userTotalScore += yellowGem;
	$('#current-score-counter').text(userTotalScore);
	initPlay();
});


$('#green').on('click', function(){
	userTotalScore += greenGem;
	$('#current-score-counter').text(userTotalScore);
	initPlay();
});
});