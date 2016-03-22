console.log("Javascript is alive!");
document.getElementById('greeting').innerText = "Hello, World!"; // setting my text with my element of id greeting ( setter )

var liArray = document.getElementsByTagName("li");

for (var i = 0; i < liArray.length; i++) {
   liArray[i].style.backgroundColor = "yellow"; //im line style (on the syle atribute in html)
}

var img1 = document.createElement("img"); //creating new empty ellement in JS
img1.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"); // set Arribute takes two parameters: the source name and value

var greeting = document.getElementById('greeting');
greeting.appendChild(img1); // appending my image to my newely created greeting variable 



var allSelected = document.querySelectorAll(".selected"); //selecting all 

for (var i = 0; i < liArray.length; i++) { //loop through the lenght of the liArray 
   liArray[i].addEventListener('click', function(e) { //added an event listener to on click function // 
      allSelected[0].classList.remove('selected'); //remove selected
      e.target.classList.add('selected'); //.target targets any element with specified 

      //  var img = e.target.innerText;

      allSelected = document.querySelectorAll(".selected");
      if (allSelected.length > 0) { // if there is a conditional with just a variable then it is checking for a truthy or a false. Since an empty array is still tuthy, you need .lenght 
         allSelected.className = ""; //if class is a string, className gets and sets the value of the class attribute of the specified element.
      }
      this.className = "selected";
      document.querySelectorAll("img")[1].src = "./images/" + this.innerHTML + ".jpeg"; //CHANGE IMG SRC 


   });
}

   var ghost = document.getElementById("ghosting");
   ghost.addEventListener("mouseover", function() {
      ghost.remove();
   });

   function setWidth(e, w) {
      var target = e.target;
      if (target.getAttribute("id") === "resize") {
         target.style.width = w;
      }
   }

   document.getElementById("resize").addEventListener('mouseover', function(e) {
      setWidth(e, '400px');
   });

   document.getElementById("resize").addEventListener('mouseout', function(e) {
      setWidth(e, '200px');
   });

   //reset button  - remove the selected class from each <li> and change the image
   var reset = document.getElementsByTagName('input');
   reset[0].addEventListener('click', function() {
      document.querySelectorAll("img")[1].setAttribute("src", "./images/panic.jpeg");
   });

   window.addEventListener("keydown", checkKeyPressed);
 
   function checkKeyPressed(e) {
    if (e.keyCode >="48" && e.keyCode <= "57") {
        alert("I HATE NUMBERZZZ!");
    }





   //   function orange(e) {
   //         var target = e.target;
   //         if(target.getAttribute("id") === "resize"){
   //           target.style.width = "400px";
   //       }    
   // }
   // document.getElementById("resize").addEventListener('mouseover', orange);

   // function size(e) {
   //         var target = e.target;
   //         if(target.getAttribute("id") === "resize"){
   //           target.style.width = "200px";
   //       }    
   // }
   // document.querySelector("#resize").addEventListener("mouseout", size)

   // function removeGhost(e) {
   //     var target = e.target;
   //     if(target.getAttribute("id") === "ghosting"){
   //     target.remove();
   //    }
   // }
   // document.addEventListener('mouseover', removeGhost);
   //this also works



   // add mouse over event to the orange div its width doubles, when mouse leaves it goes back to origina size

   //reset button 

   //window event listener when a key  1, 2, 3, 4, 5, 6, 7, 8, 9, 0 is pressed, the page alerts the message "I HATE NUMBERZZZ!"

}