var lottoPick1 = getRandomNumber(59);
var lottoPick2 = getRandomNumber(59);
var lottoPick3 = getRandomNumber(59);
var lottoPick4 = getRandomNumber(59);
var lottoPick5 = getRandomNumber(59);
var powerBall = getRandomNumber(35);

function getRandomNumber(pick) {
  var num = Math.floor(Math.random() * pick) + 1; 
  return num;
}

document.getElementById("lotto").innerHTML="<h1>" + lottoPick1 + " " + lottoPick2 + " " + lottoPick3 + " " + lottoPick4 + " " + lottoPick5 + " " + "<span>" + powerBall + "</span>" + "</h1>";


// document.write("<h1>" + lottoPick + "</h1>");