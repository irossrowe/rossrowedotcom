var lottoPick = getRandomNumber(59);

function getRandomNumber(pick) {
  var num = Math.floor(Math.random() * pick) + 1; 
  return num;
}

// document.write("<h1>" + lottoPick + "</h1>");

