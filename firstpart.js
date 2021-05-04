// ITERATION  - LOOPS
// if/else is a controlled structure
// there are more controlled structures one of them are loop
// loops are a fundemental aspect of every programming language
// they allow us to perform tests pver and over again

console.log("Loop 1");
// here we want the loop to loop 10 times and we dont want to paste this 10 times
// which is not a best practice at all
// we would have to do many changes if we want to change something in one place
// alos alot of repeatin code
// instead we can create a loop!
// lets implement a for loop - a loop that has a counter

for (let loop = 1; loop <= 10; loop++) {
  console.log("Loop nr 1");
}
// loop statement has 3 parts. 1 is the intial valu of the counter
// we create a variable to represent the value of repetitions and we want it to start with 1
// we seperate with a semicolon
// 2nd is the condition so the rep need to stay below or equal to 10 since we want to do ten reps
// it will be avaluated before every iteration of the loop
// loop will keep running as long as the condition is true
// when its false the loop will stop - the code will not execute anymore
// so when it reaches 11 it will be false
// in the 3rd part we increase the count. So we update the number in each iterartion
// if we dont do that the counter would just stay at 1 for ever
// so increase by 1 after each interation
// loop = loop + 1 => loop++
// after these 3 parts we write the code that we want to be repetaed
// lets start with 1 loop
// the ten mean it was printed 10 times even if it doesnt print ot console

// transform to a template string
// and insert the value of loop
// and we build the string dynamically
for (let loop = 1; loop <= 10; loop++) {
  console.log(`Loop nr ${loop}`);
}

// LOOPING ARRAYS
// most use cases of for loops is to loop through an array
const helena = ["Helena", "Johansson", 2021 - 1985, "developer"];
//console.log(helena);
//console.log(helena.length);
// lets say we want to log every element to the console individually
// i is common to use as variable name so lets use this
// and we start at 0 because arrays are 0 based
// we need to update the count by one therefor i++
// if we wuldnt use a for loop we would do like this
// console.log(helenaArray[0]) and so on...

for (let i = 0; i < helena.length; i++) {
  // change to i < helena.length to get dynamic value instead of i < 4;
  //console.log(helena[i]);
  //console.log(typeof helena[i]);
}
// but in the for loop we want to use i since that is the variable that iterates through the for loop
// so the condition we want is for the count to go up to 4
// so it should always stay below 5

// but now lets create a new array which will contain all the types for all these elements
// might be useless but this is created for you to learn => we would not do this in real life
const arr = [];
// create empty array
console.log(arr);

for (let i = 0; i < helena.length; i++) {
  console.log(helena[i], typeof helena[i]);
  //read through array first

  // fill the arr
  //arr[i] = typeof helena[i];
  // you could do it like this
  // we can use push which is a bit cleaner
  arr.push(typeof helena[i]);
}
// same way as we read data dynamically and now we create data dynamically
// this is a way of filling array
console.log(arr);

// CONTINUE & BREAK
// continue is used o exit the current iteration in the loop and go the next one.
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] !== "string") continue;
  // if the current index of Helena is not a string then skip this
  // and move on to next iteration
  console.log(helena[i], typeof helena[i]);
}

// BREAK
// we have seen this in switch
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] === "number") break;
  // break completely terminates the whole loop
  // if the current iteration is not a string skip this and move to the next iteration
  console.log(helena[i], typeof helena[i]);
}
// when the number is found the loop is terminated and nothing more gets printed
// different from continue which doesnt terminate the loop

// LOOP ARRAY BACKWARDS
for (let i = helena.length - 1; i >= 0; i--) {
  //console.log(helena[i]);
}

// LOOP INSIDE OF LOOP
// lets say that we have 3 different loops which we want repeat 5 times each
for (let loop = 1; loop < 4; loop++) {
  //console.log(`LOOP NUMBER ${loop}`);
  // need another loop inside the loop so we can loop each 5 times
  for (let rep = 1; rep < 6; rep++) {
    //console.log(`Loop number ${loop}, repeated ${rep} times`);
  }
}

// WHILE LOOP
// another way to loop (iterate)
// we need the same components as with the for loop

let loop = 1; // this is the variable
while (loop <= 10) {
  // this will run while the condition is true
  console.log(`Loop is repeated ${loop} times`);
  loop++;
}

// roll a random number and we want the number to keep rolling until we get a 10
// so we do not know when we roll the number / how long the loop should run
// therefor we do not need a counter
let nr = Math.trunc(Math.random() * 10) + 1;
// this give us a random number
console.log(nr);

while (nr !== 10) {
  // condition is not 10 so as soon as the value is 10 it will stop
  console.log(`Nr is ${nr}`);
  // right now the loop would run forever and our browser would crash
  nr = Math.trunc(Math.random() * 10) + 1;
  // here we create a new number and the loop runs again
  if (nr === 10) {
    console.log("Loop nr is at 10");
  }
}

// DOM & EVENTS

// in order to listen for events we first need to select the element
// where the event should happen
// in this example we will listen to the button element
// so when we click something should happen

// first we collect the element
// we need to grab the classname first so lets check our html
// we can select it by class and use the .btn-click or we can select the id 'btn'
document.querySelector(".click-btn").addEventListener("click", function () {
  // the first need to pass in the type of event => click
  // and then tell the event listener what to do - specify the reaction to the event
  // we do that by defining a function and the function will be containing exactly the code that
  // will be executed whenever this click event happens on this button
  // this is called the event handler
  // REMEMBER that a function is just a value, and if a function is a value then we can also pass it
  // as an argument into another function like any other value string/nr etc
  document.querySelector(".message").textContent = "You clicked the button!!!";
  // we can aslo manipulate the dom on events for example this text
  // there are multiple ways to listen to events in js but this is the best way
  // and also the most used one
});
// notice that we do not call the event handler function
// it is the javascript engine who will call this function as soon as the event happens
// meaning as soon as the button is clicked
