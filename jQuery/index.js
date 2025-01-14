// $(document).ready(function(){
//     jQuery("h1").css("color","red");
//     jQuery("button:eq(2)").css("color","red");
//  });

const { css } = require("jquery");


/* Adding a class and removing a class */

// jQuery("h1").css("color","red"); -->: Not good practice
// $("h1").addClass("title-clr"); --> Good Approach
// $("h1").removeClass("title-clr");
// Ref : NoteBook

$("h1").addClass("title-clr margin-add");


/* Manipulating a text */
$("h1").text("Bye");
$("button").text("Don't Click Me");

$("button").html("<em>Hey Bros</em>"); // italian style
// $("button").text("<em>Hey Bros</em>"); // everything written

/* Manipulating Attributes */

console.log($("img").attr("src"));  // Get the attribute... Output : WhatsApp Image 2023-05-27 at 17.15.38.jpg

console.log($("img").attr("src" , "laptop.jpg")); // Set the attribute

console.log($("img").attr("src"));  // Get the attribute... Output : laptop.jpg



console.log($("a").attr("href")); // get the attribute ... Output : https://www.google.com

console.log($("a").attr("href" , "https://www.facebook.com")); // set the attribute

console.log($("a").attr("href")); // get the attribute ... Output : https://www.facebook.com


/* Adding Event Listener */
for (let index = 0; index < 5; index++) {
   document.querySelectorAll("button")[index].style.color="yellow";
    
}

$("h1").click(function () {
   $("h1").css("color","yellow");
})

/* JS VS jQuery*/

// for (let index = 0; index < 5; index++) {
// document.querySelectorAll("button")[index].addEventListener("click",function()
// {
// document.querySelector("h1").style.color="red";
// });
// }

$("button").click(function(){
   $("h1").css("color","red");
});


/* Event add */
$("input").on("keypress",function(event) {
   console.log(event.key);
});


/* Add and Remove Elements */
// $("h1").before("<button>Surya</button>"); -- add before h1, paste this code in console.. In html file nothing will be changed after adding this

/*
before() : add new element before the selected element
after() :  add new element after the selected element
prepend() : add new element before the content of selected element
append() : add new element just after the content of selected element
remove() : remove the element
*/