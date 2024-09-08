// document.querySelector("button").addEventListener("click", handleClicked);

// function handleClicked(){
//     alert("clicked");
// }

for (var i = 0; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClicked);
}

function handleClicked(){
    var char = this.innerHTML;
    // alert("clicked " + char);

    // if(char === "w")
    //     var audio = new Audio("sounds/tom-1.mp3");
    // else if(char === "a")
    //     var audio = new Audio("sounds/tom-2.mp3");
    // else if(char === "s")
    //     var audio = new Audio("sounds/tom-3.mp3");
    // else if(char === "d")
    //     var audio = new Audio("sounds/tom-4.mp3");
    // else if(char === "j")
    //     var audio = new Audio("sounds/snare.mp3");
    // else if(char === "k")
    //     var audio = new Audio("sounds/crash.mp3");
    // else if(char === "l")
    //     var audio = new Audio("sounds/kick-bass.mp3");

    makeSound(char);
    buttonAnnimation(char);
}

document.addEventListener("keydown", function(event){
    var char = event.key;
    makeSound(char);
    buttonAnnimation(char);
})

function makeSound(char){
    switch(char){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break;

         case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        
        default:
            console.log(char);
    }

    audio.play();
}


function buttonAnnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
   
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

    
}
