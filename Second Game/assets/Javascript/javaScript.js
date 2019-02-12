$(document).ready(function() {

var CompSelection = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCounter = 0;
var loseCounter = 0;
var redGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var blueGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yellowGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var greenGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;

console.log(redGem,blueGem,yellowGem,greenGem);

function mixingCrystalValValues(){
	redGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	blueGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	yellowGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	greenGem = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function initPlay(){
	if(userTotalScore === CompSelection){
		winCounter++;
		$('#win-counter').text(winCounter);
		$('#win-or-lose').text('You win!');
		CompSelection = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-numb').text(CompSelection);
		userTotalScore = 0;
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



$('#red').on('click', function(){
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