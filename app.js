console.log("Javascript is alive!");

document.getElementById('greeting').innerText ="Hello, World!";

var liArray = document.getElementsByTagName("li");

for (var i=0; i< liArray.length; i++){
  liArray[i].style.backgroundColor="yellow";
}
var img1 = document.createElement("img");
img1.setAttribute("src","http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
//to style the posotion  add style clase 
greeting.appendChild(img1);
console.log(greeting);

var list =  document.querySelectorAll("li"); 

var allSelected = document.querySelectorAll(".selected");
 for (var i=0; i < list.length; i++) {
   list[i].addEventListener('click', function(num) {
        allSelected[0].classList.remove('selected');
     num.target.classList.add('selected');
     allSelected = document.querySelectorAll(".selected");
   });

 //var milk = document.querySelector("button");
//milk.addEventListener("click", function(){

}

//I'm going to keep working on it over the weekend. 
