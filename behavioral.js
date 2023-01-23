var countclick = 0;             // counts the number of clicks
var secElapsed = 0;             // displays the seconds spent on page
var minElapsed = 0;             // displays the minutes spent on page
var timeElapsed = 0;            // total time (in ms) spent on page
var startTime = Date.now();     // time at which page was first accessed
var endTime;                    // time at which the button is pressed
var keyPresses = 0;             // number of key presses recorded
var keysTyped = 0;              // number of characters typed

const collection = document.getElementById("clickcount");           // refers to the whole body of the page
const hdiv = document.getElementById("test");                       // refers to the hidden div that contains a list
const elementClicks = document.getElementById("clicks");            // refers to element in list that prints the number of clicks
const timeSpent = document.getElementById("time");                  // refers to element in list that prints the total time spent on page
const form = document.getElementById("registerForm");               // refers to the whole form
const elementPresses = document.getElementById("keypresses");       // refers to element in list that prints the number of keys pressed
const allLabels = document.getElementsByTagName("input");           // refers to all labels from the document
const elementTyped = document.getElementById("chartyped");          // refers to element in list that prints the number 
const aboutInfo = document.getElementById("textbox");               // refers to the textarea

aboutInfo.addEventListener("keydown", keysPressed);                 // counting characters and keypresses inside the textarea
aboutInfo.addEventListener("keypress", characterPressed);

for(let i = 0;i < allLabels.length;i++) {                           // counting characters and keypresses inside all labels
    allLabels[i].addEventListener("keydown", keysPressed);
    allLabels[i].addEventListener("keypress", characterPressed);
}

form.addEventListener("submit", display);                           // if the user submits the form, display the hidden div

collection.addEventListener("click", functie);                      // counting clicks everywhere on the page

function functie() {                                                // function that updates the number of clicks when detected
    countclick++;
    elementClicks.innerHTML = "Clicks on page: " + countclick;
}

function display() {                                                // function that prints the time spent on page and makes the div visible
    endTime = Date.now();
    timeElapsed = endTime - startTime;
    secElapsed = Math.round(timeElapsed/1000);
    minElapsed = Math.round(secElapsed/60 - 0.49);
    secElapsed = secElapsed % 60;
    timeSpent.innerHTML = "Total time spent on page: " + minElapsed + " minutes " + secElapsed + " seconds";
    hdiv.removeAttribute("hidden");
}

function keysPressed() {                                            // function that updates the number of keys pressed when detected
    keyPresses++;
    elementPresses.innerHTML = "Total keys pressed: " + keyPresses;
}

function characterPressed() {                                       // function that updates the number of characters typed when detected
    keysTyped++;
    elementTyped.innerHTML = "Total characters typed: " + keysTyped;
}