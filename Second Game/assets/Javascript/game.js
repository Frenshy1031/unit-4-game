$(document).ready(function(){
// initital vlaue for dispaly
var userTotal= 0;
var wincount=0;
$('#win-counter').text(wincount);
var losscount=0;
$('#loss-Counter').text(losscount);

var randomValue = function (min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min
}
var targetscore = randomValue(19,125);
$("#randomNumner").text(targetscore);
console.log(targetscore);
var blue = randomValue(1, 12);
var green = randomValue(1, 12);
var red  = randomValue(1, 12);
var yellow = randomValue(1, 12);


function startgame(){
 targetscore = randomValue(19,125);
 $('#randomNumber').text("Target SCORE : " + targetscore);
 console.log(targetscore);
 blue = randomValue(1, 12);
 green = randomValue(1, 12);
 red  = randomValue(1, 12);
 yellow = randomValue(1, 12);
 userTotal= 0;
 $('#user-total').text(userTotal);
 console.log(userTotal);
};


function wincheck(){
 if(userTotal === targetscore){
   startgame();
   wincount++;
   alert("Congratulation! You guessed the right number");
   $('#win-counter').text(wincount);

 }
 else if(userTotal > targetscore){
   startgame();
   losscount++;
   alert ("Sorry You loss the game")
   $('#loss-counter').text(losscount);
   }
};

$('#red').on('click',function(){
 userTotal += red;
 $('#user-total').text(userTotal);
 wincheck();
 console.log(userTotal);
});

$('#blue').on('click',function(){
 userTotal += blue;
 $('#user-total').text(userTotal);
 wincheck();
 console.log(userTotal);
});

$('#yellow').on('click',function(){
 userTotal += yellow;
 $('#user-total').text(userTotal);
 wincheck();
 console.log(userTotal);

});

$('#green').on('click',function(){
 userTotal += green;
 $('#user-total').text(userTotal);
 wincheck();
 console.log(userTotal);
});
startgame();

});