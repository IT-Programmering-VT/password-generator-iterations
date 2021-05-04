// bring in all of our elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
};
// objects that has keys that equal whatever these functions return.

generateEl.addEventListener("click", () => {
  // we are using the event parameter to get the value of the event
  // in this case when we click the button
  const length = +lengthEl.value;
  // plus sign converts it to a number, test without and you can see in the console
  // click button to generate
  //console.log(length);

  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  // for checkboxes
  //console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
  // we create a function that will take all of these stuff and also the lentgh that we want our password to be
});

// function to generate password
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  //console.log(typesCount);
  // click out some boxes and check consol

  // create types array
  // we want to end up with an array with objects that contains boolean values of these variables
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // filter out anything that has false as a value
  //console.log(typesArr);

  if (typesCount === 0) {
    return "";
    // if all is unchecked nothing happens
  }

  // incerement with whatever we check
  for (let i = 0; i < length; i += typesCount) {
    // loop through the types array
    typesArr.forEach((type) => {
      //console.log(type);
      // you could randomise this aswell..
      const funcName = Object.keys(type)[0];
      //console.log(funcName);
      generatedPassword += randomFunc[funcName]();
      // to return this we need to go out of the loop
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  // length is 20 by default
  return finalPassword;
  // what gets returned from this function gets in to the innerText of resultEl
  // always same order of types but random generated
}

// random lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  //return String.fromCharCode(97);
  // start with 97 which we know is a
  // Math.floor rounds down and Math.random gives usa random value
  // multiply by the highest number that we want which is 26 (alphabet)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // 65 = A
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // 10 because 0 - 9
  // 48 is the asci nr for 0
}

// we are just going to use a certain set of symbols
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  //return symbols[1];
  // even thought its not an array, its a string, we can still use index
  return symbols[Math.floor(Math.random() * symbols.length)];
  // get a random symbol with the max of the entire length of the string
}

//console.log(getRandomLower());
//console.log(getRandomUpper());
//console.log(getRandomNumber());
//console.log(getRandomSymbol());
