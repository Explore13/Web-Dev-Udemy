function player_1(randomNumber_1)
{
if(randomNumber_1==1)
document.querySelector(".img1").src="./images/dice1.png";
else if(randomNumber_1==2)
document.querySelector(".img1").src="./images/dice2.png";
else if(randomNumber_1==3)
document.querySelector(".img1").src="./images/dice3.png";
else if(randomNumber_1==4)
document.querySelector(".img1").src="./images/dice4.png";
else if(randomNumber_1==5)
document.querySelector(".img1").src="./images/dice5.png";
else
document.querySelector(".img1").src="./images/dice6.png";
}
function player_2(randomNumber_2)
{
if(randomNumber_2==1)
document.querySelector(".img2").src="./images/dice1.png";
else if(randomNumber_2==2)
document.querySelector(".img2").src="./images/dice2.png";
else if(randomNumber_2==3)
document.querySelector(".img2").src="./images/dice3.png";
else if(randomNumber_2==4)
document.querySelector(".img2").src="./images/dice4.png";
else if(randomNumber_2==5)
document.querySelector(".img2").src="./images/dice5.png";
else
document.querySelector(".img2").src="./images/dice6.png";
}

var randomNumber_1=Math.floor((6*Math.random()))+1;
var randomNumber_2=Math.floor((6*Math.random())+1);
if(randomNumber_1>randomNumber_2)
document.querySelector(".container h1").innerHTML="Player 1 Won";
else if(randomNumber_1==randomNumber_2)
document.querySelector(".container h1").innerHTML="Draw";
else
document.querySelector(".container h1").innerHTML="Player 2 Won";
player_1(randomNumber_1);
player_2(randomNumber_2);