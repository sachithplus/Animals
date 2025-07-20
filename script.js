var allbuttons = document.querySelectorAll(".animal");
for(var i = 0; i < allbuttons.length; i++){

allbuttons[i].addEventListener("click", function(){

var innerButtonHtml = this.innerHTML.toLowerCase();
playButton(innerButtonHtml); 

});
}

function playButton(key){
switch (key) {
    case "cat":
        var catSound = new Audio("./Properties/Sounds/mixkit-sweet-kitty-meow-93.mp3.wav");
        catSound.play();
        break;

case "cow":
        var cowSound = new Audio("./Properties/Sounds/mixkit-cow-moo-in-the-barn-1751.mp3.wav");
        cowSound.play();
        break;

case "Dog":
        var dogSound = new Audio("./Properties/Sounds/mixkit-dog-barking-twice-1.wav");
        dogSound.play();
        break;



    default:
        break;
}




}