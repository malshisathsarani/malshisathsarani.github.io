
// Here , when Click a movie, It Sowing on the Order bar

document.getElementById("film1").addEventListener("click", order);

function order() {
  document.getElementById("order").innerHTML = document.getElementById("film1").innerHTML;
}

document.getElementById("film2").addEventListener("click",order1 );

function order1() {
  document.getElementById("order").innerHTML = document.getElementById("film2").innerHTML;
}

document.getElementById("film3").addEventListener("click",order2 );

function order2() {
  document.getElementById("order").innerHTML = document.getElementById("film3").innerHTML;
}


document.getElementById("film4").addEventListener("click", order3);

function order3() {
  document.getElementById("order").innerHTML = document.getElementById("film4").innerHTML;
}

document.getElementById("film5").addEventListener("click",order4 );

function order4() {
  document.getElementById("order").innerHTML = document.getElementById("film5").innerHTML;
}

document.getElementById("film6").addEventListener("click",order5 );

function order5() {
  document.getElementById("order").innerHTML = document.getElementById("film6").innerHTML;
}

document.getElementById("film7").addEventListener("click", order6);

function order6() {
  document.getElementById("order").innerHTML = document.getElementById("film7").innerHTML;
}

document.getElementById("film8").addEventListener("click",order7 );

function order7() {
  document.getElementById("order").innerHTML = document.getElementById("film8").innerHTML;
}

document.getElementById("film9").addEventListener("click",order8 );

function order8() {
  document.getElementById("order").innerHTML = document.getElementById("film9").innerHTML;
}

document.getElementById("film10").addEventListener("click",order9 );

function order9() {
  document.getElementById("order").innerHTML = document.getElementById("film10").innerHTML;
}

document.getElementById("film11").addEventListener("click",order10 );

function order10() {
  document.getElementById("order").innerHTML = document.getElementById("film11").innerHTML;
}

document.getElementById("film12").addEventListener("click",order11 );

function order11() {
  document.getElementById("order").innerHTML = document.getElementById("film12").innerHTML;
}

document.getElementById("film13").addEventListener("click",order12 );

function order12() {
  document.getElementById("order").innerHTML = document.getElementById("film13").innerHTML;
}

document.getElementById("film13").addEventListener("click",order13 );

function order13() {
  document.getElementById("order").innerHTML = document.getElementById("film13").innerHTML;
}


function myFunction() {
  alert("Your Order is conformed !");
}



//This is for the Footer submit button for Email

const toggleButton=document.getElementById('togglebutton');
const navList=document.getElementById('navlist'); 

toggleButton.addEventListener('click',() =>{
  navList.classList.toggle('active');

})
