function outputname() {
var x,arr,name,a,b,answer;
x=document.getElementById("form1") ;
y=x.elements["name"].value;

var arr = y.split(" ");
console.log(arr);

arr = shuffle(arr);


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


document.getElementById("dadapoem").innerHTML= arr.join(" ");



}
