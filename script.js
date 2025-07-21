
var allbuttons = document.querySelectorAll(".animal");
for(var i = 0; i < allbuttons.length; i++){

allbuttons[i].addEventListener("click", function(){

var innerButtonHtml = this.innerHTML;
playButton(innerButtonHtml); 
buttonAnimation(innerButtonHtml);
});
}

function playButton(key){
  if (keyMap[key.toLowerCase()]) {
    key = keyMap[key.toLowerCase()];
  }
switch (key) {
    case "Cat":
        var catSound = new Audio("./Properties/Sounds/mixkit-sweet-kitty-meow-93.mp3.wav");
        catSound.play();
        break;

case "Cow":
        var cowSound = new Audio("./Properties/Sounds/mixkit-cow-moo-in-the-barn-1751.mp3.wav");
        cowSound.play();
        break;

case "Dog":
        var dogSound = new Audio("./Properties/Sounds/mixkit-dog-barking-twice-1.wav");
        dogSound.play();
        break;

case "Donkey":
        var donkeySound = new Audio("./Properties/Sounds/donkey-bray-36757.mp3");
        donkeySound.play();
        break;

case "Elephant":
        var elephantSound = new Audio("./Properties/Sounds/elephant-trumpets-growls-6047.mp3");
        elephantSound.play();
        break;

case "Fox":
        var foxSound = new Audio("./Properties/Sounds/rubah-220043.mp3");
       foxSound.play();
        break;

case "Goat":
        var goatSound = new Audio("./Properties/Sounds/goat-sound-177346.mp3");
       goatSound.play();
        break;

case "Horse":
        var horseSound = new Audio("./Properties/Sounds/neighing-of-a-horse-154724.mp3");
       horseSound.play();
        break;

 case "Lion":
        var lionSound = new Audio("./Properties/Sounds/lion-roaring-sfx-293295.mp3");
       lionSound.play();
        break;       

 case "Monkey":
        var monkeySound = new Audio("./Properties/Sounds/monkey-sound-295406.mp3");
       monkeySound.play();
        break;  
        
 case "Squirrel":
        var squirrelSound = new Audio("./Properties/Sounds/red-squirrel-40740.mp3");
       squirrelSound.play();
        break;
        
  case "Tiger":
        var tigerSound = new Audio("./Properties/Sounds/tiger-roar-strong-hd-267360.mp3");
       tigerSound.play();
        break;        

    default:
        console.log(key);
        break;
}

}

document.addEventListener("keypress", function(event){
playButton(event.key.toLowerCase()); 

})

var keyMap = {
c : "Cat",
o: "Cow",
  d: "Dog",
  n: "Donkey",
  e: "Elephant",
  f: "Fox",
  g: "Goat",
  h: "Horse",
  l: "Lion",
  m: "Monkey",
  s: "Squirrel",
  t: "Tiger"
};

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey.toLowerCase());
activeButton.classList.add("pressed"); 

setTimeout (function(){
 activeButton.classList.remove("pressed");
},100 );


}
