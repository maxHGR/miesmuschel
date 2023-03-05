 //when "All" is checked, all the other boxes are checked
 const notes = ["C", "C#", "D", "D#",
 "E", "F", "F#", "G", "G#", "A",
 "A#", "B",
 "C", "C#", "D", "D#", "E", "F",
 "F#", "G", "G#", "A", "A#", "B"
];

var test = document.querySelector(
  "#test");
var noteName = document
  .querySelector("#noteName");
var hiddenNote;
var rndmBox;
//copy of notes array
var notesCopy = notes.slice(0);

var allChords = document
  .getElementById("all")

var uncheckedBoxes = document
  .querySelectorAll(
    ".checkbox:not(:checked)");

var checkedBoxes = document
  .querySelectorAll(
    ".checkbox:checked");
   
var allCheckboxes = document.querySelectorAll(".checkbox");


//Event listener on "All"checkbox, which Presses all unchecked checkboxes
allChords.addEventListener("change",
 e => {
   
  if (e.target.checked) {
   test.textContent = "done";
   uncheckedBoxes.forEach(y => y
    .click());
  }
    
  if(!e.target.checked) {
   test.textContent = "it's undone";
   checkedBoxes.forEach(x => x
    .click());
  }
 })


//implement this function so that its used in every occassion
function checkbox() {
  //takes function that´s saved as string and calls it
  //gets all checked boxes of checkbox class
  let checkedBoxes = document
    .querySelectorAll(
      ".checkbox:checked");
  var length = checkedBoxes.length;
  //generates random number between 0 and ok.length
  var rndm = Math.floor(Math
    .random() * length);
  //TEST
  test.innerHTML = checkedBoxes[rndm]
    .value;
  //this random number is the index number that is accessed
  //and that accessed index(chord) has a function in its value
  //which is called with "window[]"
  window[checkedBoxes[rndm].value]();
}


//shows/hide list when clicked
document.querySelector(
  '.select-field').addEventListener(
  'click', () => {
    document.querySelector('.list')
      .classList.toggle('show');
    document.querySelector(
      '.down-arrow').classList.toggle(
      'rotate180');
  });

//clears the last chord
function clear() {
  document.querySelector(
    "#chordContainer").innerHTML = "";
  noteName.style.borderColor =
    "rgb(46, 243, 233)";
}


function refresh() {
  //clears chord container and calls random chord function
  clear();
  let checkedBoxes = document
    .querySelectorAll(
      ".checkbox:checked");
  //looks if there are any checked boxes
  if (checkedBoxes.length !== 0) return checkbox();
  getRandomChord();
}

function reload() {
  location.reload()
}

function noteGuess() {
  //checks if guess equals the hidden Note, uppercases the input so that the answer matches properly
  if (document.querySelector("#guess")
    .value.toUpperCase() === hiddenNote
  ) {
    test.innerHTML = "ok";
    rndmBox.style.borderColor =
      "lightgreen";
    noteName.style.borderColor =
      "lightgreen";
  } else {
    test.innerHTML = "no";
    rndmBox.style.borderColor = "red";
    noteName.style.borderColor = "red";
  }
}

//checks if enter key on input is pressed
function check() {
  if (event.keyCode !== 13) return;
    //if answer is already correct, refresh site
  if (rndmBox.style.borderColor !==
    "lightgreen") return noteGuess();
  refresh();
};

function listToBox(x) {
  //safety net if its undefined
  if (x === undefined) return reload();
  //Creates the Note boxes an appends them to the DOM
  let box = document
    .createElement("div");
  box.className = "showbox";
  let chord = document.createElement(
    "p");
  chord.className = "chord";
  chord.innerText = x;
  chord.setAttribute("id", x)
  box.appendChild(chord);
  document.querySelector(
    ".flex").appendChild(box);
}

function rndmBlurr() {
  //variable where a random number is assigned later in the process
  var rndm;
  //node List of chord boxes
  var boxes = document
    .querySelectorAll(
      ".showbox");
  //decision how many boxes there are
  //and generates random number based on that
  if (boxes.length < 4) {
    rndm = Math.floor(Math
      .random() * 3);
  } else {
    rndm = Math.floor(Math
      .random() * 4);
  }
  
  
  //choses a random note-box
  rndmBox = boxes[rndm];
  //creates input 
  var input = document.createElement(
    "input");
  input.type = "text";
  input.setAttribute("id",
    "guess");
  input.addEventListener("keyup",
    check);
  //removes original Note and appends input instead
  let removed = rndmBox.removeChild(
    rndmBox.childNodes[0]);
  hiddenNote = removed.innerHTML;
  //TEST
  test.innerHTML = hiddenNote;
  rndmBox.appendChild(input);

  document.getElementById("guess")
    .focus();
}


function getMajor7Chord() {
  clear();
  //generates random point and cuts off everything thats before this index
  var rndm = Math.floor(Math
    .random() * 12);
    
  //uses a copy of notes array instead of the original, so it can be reused
  splitList = notes.slice(rndm);
  
  //acces the indexes aka notes through the chord pattern that makes up this chord
  var major7 = [splitList[0],
  splitList[4],
  splitList[7],
  splitList[11]
 ];
  //inserts note name in the noteName-Box
  noteName.innerHTML = splitList[
      0] +
    " Major 7";
  //creates an element from each array item
  //and then stores the elements through "appendchild" to the "chordContainer" - div 
  major7.map(listToBox);

  rndmBlurr();
}

function getMajorChord() {
  clear();
  //make a function of it
  var rndm = Math.floor(Math
    .random() * 12);
  
  var splitList = notes.slice(rndm);
  //return the cutted list

//make function where the chord indexes get passed to it as parameters
  var major = [splitList[0],
  splitList[4], splitList[7]
 ];
  noteName.innerHTML = major[0] +
    " Major";
  major.map(listToBox);
  rndmBlurr();
  //include rndmBlurr in the function 
}

function getMinorChord() {
  clear();
  var rndm = Math.floor(Math
    .random() * 12);
  
  var splitList = notes.slice(rndm);
  var minor = [splitList[0],
  splitList[3], splitList[7]
 ];
  noteName.innerHTML = minor[0] +
    " minor";
  minor.map(listToBox);
  rndmBlurr();
}

function getMinor7Chord() {
  clear();
  var rndm = Math.floor(Math
    .random() * 12);
  
  var splitList = notes.slice(rndm);
  var minor7 = [splitList[0],
  splitList[3], splitList[7],
  splitList[10]
 ];
  noteName.innerHTML = splitList[
    0] + " minor 7";
  minor7.map(listToBox);
  rndmBlurr();
}

function getMinor7b5Chord() {
  clear();
  var rndm = Math.floor(Math
    .random() * 12);
  
  var splitList = notes.slice(rndm);
  var minor7b5 = [splitList[0],
  splitList[3], splitList[6],
  splitList[10]
 ];
  noteName.innerHTML = splitList[
    0] + " minor7b5";
  minor7b5.map(listToBox);
  rndmBlurr();
}

function getDiminished7Chord() {
  clear();
  var rndm = Math.floor(Math
    .random() * 12);
  
  var splitList = notes.slice(rndm);
  var diminished7 = [splitList[0],
  splitList[3], splitList[6],
  splitList[9]
 ];
  noteName.innerHTML = splitList[
      0] +
    " diminished 7";
  diminished7.map(listToBox);
  rndmBlurr();
}
//gets a random chord generator through random index number generator
function getRandomChord() {
  var rndm = Math.floor(Math
    .random() * 6);
  switch (rndm) {
    case 0:
      getMajorChord(notes);
      break;
    case 1:
      getMinorChord(notes);
      break;
    case 2:
      getMajor7Chord(notes);
      break;
    case 3:
      getMinor7Chord(notes);
      break;
    case 4:
      getMinor7b5Chord(notes);
      break;
    case 5:
      getDiminished7Chord(notes);
      break;
  }
}
//random number generieren und mit switch Statements, function auswählen                                                                                                                                                                                   
getRandomChord();

//create function that's implemented in every chord function, inside is a for loop 
//that Creates p elements with the chord notes in it, which are appended to its Box
//and random blurr, stores the random chosen child in a variable and appends input instead, till the answer is typed in 
//which runs a function that tells if you're correct