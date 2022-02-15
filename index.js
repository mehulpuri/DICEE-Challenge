var randomNumber1= Math.floor((Math.random()*6)+1);
var randomDiceImg = "dice" + randomNumber1+ ".png";
var source= "images/"+ randomDiceImg;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", source);

var randomNumber2= Math.floor((Math.random()*6)+1);
var randomDiceImg2 = "dice" + randomNumber2+ ".png";
var source2= "images/"+ randomDiceImg2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", source2);

var op= (randomNumber1 > randomNumber2) ? "Player 1 Wins" : "Player 2 Wins";
document.querySelector("h1").innerHTML = op;

if(randomNumber1 == randomNumber2){
document.querySelector("h1").innerHTML = "Draw!";
}


  function refresh(){
        window.location.reload("Refresh");
      }
