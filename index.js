// alert("hello?");
var getRandom1 = Math.floor(Math.random()*6)+1;
// alert(getRandom1);
var getRandomImage1 = "dice" + getRandom1 + ".jpg";
// alert(getRandomImage);
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src",getRandomImage1);


var getRandom2 = Math.floor(Math.random()*6)+1;

var getRandomImage2="dice"+getRandom2+".jpg";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",getRandomImage2);

if(getRandom1>getRandom2)
{
   document.querySelector("h1").innerHTML = "Player 1 wins &#128522";
}
else if(getRandom1===getRandom2)
{
   document.querySelector("h1").innerHTML = "match draw &#128522";
}
else
{
   document.querySelector("h1").innerHTML = "player 2 wins &#128522";
}