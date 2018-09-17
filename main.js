
// speech synthesis 
const synth = window.speechSynthesis;

// speech synthesis debug
const speak = text => {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  // utterThis.pitch = 2;
  utterThis.rate = 0.8;
  synth.speak(utterThis);
};

// btn onclick function
function outputname() {
var x,arr,name,a,b,answer;
x=document.getElementById("form1") ;
y=x.elements["name"].value;

// turn string onto array
var arr = y.split(" ");
console.log(arr);
  
// shuffle words
arr = shuffle(arr);

// shuffle words function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// turn shuffled array into string
let array_shuffled = arr.join(" ");

 // add shuffled string into html
document.getElementById("dadapoem").innerHTML= array_shuffled;
// document.getElementById("buttons").innerHTML= button_div;

// if the text input is not empty
if (array_shuffled !== ''){
  
// add the new speak button
  var btn = document.createElement("button");
  btn.id = "button2";
  var t = document.createTextNode("Make my machine recite it");
  btn.appendChild(t);
  document.getElementById("buttons").appendChild(btn);

// if the user clicks that button make my machine recite the shuffled array
  document.querySelector('#button2').onclick = () => {
    console.log('button clicked');
    // let textInput = document.querySelector('#dadapoem').value;
    speak(array_shuffled);
  }
}
}
