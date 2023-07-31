
//For btn press

var numberOfDrumBtns = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumBtns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//For keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key) {
    switch(key){
      case "w":
        var w = new Audio('./Assets/sounds/1.mp3');
        w.play();
        break;
      case "a":
        var a = new Audio('./Assets/sounds/2.mp3');
        a.play();
        break;
      case "s":
        var s = new Audio('./Assets/sounds/3.mp3');
        s.play();
        break;
      case "d":
        var d = new Audio('./Assets/sounds/4.mp3');
        d.play();
        break;
      case "j":
        var j = new Audio('./Assets/sounds/metal-punch.mp3');
        j.play();
        break;
      case "k":
        var k = new Audio('./Assets/sounds/metal-punch.mp3');
        k.play();
        break;
      case "l":
        var l = new Audio('./Assets/sounds/metal-punch.mp3');
        l.play();
        break;  
    }
}