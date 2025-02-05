// function handClick()
// {
//     alert("Clicked");
// }

// document.querySelectorAll("button")[0].addEventListener("click",handClick);


// My Code

// for (
//   let index = 0;
//   index < document.querySelectorAll(".drum").length;
//   index++
// ) {
//   document
//     .querySelectorAll(".drum")
//     [index].addEventListener("click", function () {
//       // this.style.color="white";
//       var buttonHtml = this.innerHTML;
//       switch (buttonHtml) {
//         case "w":
//           var audio = new Audio("./sounds/crash.mp3");
//           audio.play();
//           break;
//         case "a":
//           var audio = new Audio("./sounds/kick-bass.mp3");
//           audio.play();
//           break;
//         case "s":
//           var audio = new Audio("./sounds/snare.mp3");
//           audio.play();
//           break;
//         case "d":
//           var audio = new Audio("./sounds/tom-1.mp3");
//           audio.play();
//           break;
//         case "j":
//           var audio = new Audio("./sounds/tom-2.mp3");
//           audio.play();
//           break;
//         case "k":
//           var audio = new Audio("./sounds/tom-3.mp3");
//           audio.play();
//           break;
//         case "l":
//           var audio = new Audio("./sounds/tom-4.mp3");
//           audio.play();
//           break;
//         default:
//           break;
//       }
//     });
// }



// function soundPlay(event) {
//   switch (event.key) {
//     case "w":
//       var audio = new Audio("./sounds/crash.mp3");
//       audio.play();
//       break;
//     case "a":
//       var audio = new Audio("./sounds/kick-bass.mp3");
//       audio.play();
//       break;
//     case "s":
//       var audio = new Audio("./sounds/snare.mp3");
//       audio.play();
//       break;
//     case "d":
//       var audio = new Audio("./sounds/tom-1.mp3");
//       audio.play();
//       break;
//     case "j":
//       var audio = new Audio("./sounds/tom-2.mp3");
//       audio.play();
//       break;
//     case "k":
//       var audio = new Audio("./sounds/tom-3.mp3");
//       audio.play();
//       break;
//     case "l":
//       var audio = new Audio("./sounds/tom-4.mp3");
//       audio.play();
//       break;
//     default:
//       break;
//   }
// }

// document.addEventListener("keypress", soundPlay);


//Easy-To-Learn Code

for (
  let index = 0;
  index < document.querySelectorAll(".drum").length;
  index++
) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      // this.style.color="white";
      var buttonHtml = this.innerHTML;
      soundPlay(buttonHtml);
      animationAdd(buttonHtml);
    });
}

document.addEventListener("keypress",function(event){
  soundPlay(event.key);
  animationAdd(event.key);
});

function soundPlay(key) {
  console.log(key);
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function animationAdd(key)
{
var activeBtn=document.querySelector("."+key);
activeBtn.classList.add("pressed");
setTimeout(function(){
  activeBtn.classList.remove("pressed");
},100);
}