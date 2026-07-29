function checkPassword(){

const password=document.getElementById("password").value;

if(password==="0112"){

document.getElementById("password-page").style.display="none";

document.getElementById("main-page").style.display="block";

calculateLoveDays();

}else{

document.getElementById("error").innerHTML="Wrong Password ❤️";

}

}

function playMusic(){

document.getElementById("song").play();

}

function showWish(){

document.getElementById("wish").style.display="block";

}function calculateLoveDays(){

const startDate=new Date("2020-09-27");

const today=new Date();

const diff=today-startDate;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("loveDays").innerHTML=
days+" Days Together ❤️";

}

function checkAnswer(){

const answer=document.getElementById("quizAnswer").value;

if(answer==="27092020"){

document.getElementById("quizResult").innerHTML=
"💖 Correct! Our love story began on 27 September 2020.";

}else{

document.getElementById("quizResult").innerHTML=
"🥰 Close... Think again, My Rowdy ❤️";

}

}
