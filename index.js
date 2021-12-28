// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    // console.log(event); To see which event triggered the function, passing event as input
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound (key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();     
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();     
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();     
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();     
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();     
            break;      
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();     
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();     
            break;                      
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {  
    
    // Here current key is not defined but it takes same declaration from buttonInnerHTML & event.key 
    
    var activeButton =  document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");  //Removed . for pressed as it was not working
    setTimeout( function() {
        activeButton.classList.remove("pressed");
    }, 100);    //Here 100 = 0.1 seconds
}

// console.log(this.style.color = "white");