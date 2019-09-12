var gamePatteren=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPatteren=[];
var level=0;
    var troggle=true;
$(document).keypress(function(event){
    $("h1").html("Level "+level);

    if(troggle){
  nextSequence(event.key);
  troggle=false;
}
});

$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPatteren.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPatteren.length-1)
});
function playSound(name){

  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);

}
function checkAnswer(currentLevel){
  if(gamePatteren[currentLevel] === userClickedPatteren[currentLevel]){
  if(gamePatteren.length === userClickedPatteren.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}
else{
  var a=new Audio("sounds/wrong.mp3");
  a.play();

  $("body").addClass("game-over");
  setTimeout(function(){
      $("body").removeClass("game-over");
  },200);
  $("h1").html("Game-Over,Press any key to restart");
  troggle=true;
  level=0;

}
}
function nextSequence(){
  userClickedPatteren=[];
  level++;
  $("h1").html("Level "+level);
var n=Math.random();
  n=Math.floor(n*4);
var randomChosenColour=buttonColours[n];
gamePatteren.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}
