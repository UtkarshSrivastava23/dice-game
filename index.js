var randomnumber1 = Math.floor(Math.random() * 6) + 1 ;

var ranImg = "dice" + randomnumber1 + ".png";
var ranSource = "images/" + ranImg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ranSource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1 ;

var ranImg2 = "dice" + randomnumber2 + ".png";
var ranSource2 = "images/" + ranImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ranSource2);


if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}