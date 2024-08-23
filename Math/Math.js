// An integer is a whole Number
// A number with decimal is a float
// Javascript regards both floats and Integers as numbers

let myNum = 42;
let numNum = 42.0;

if (myNum === numNum) {
  console.log("They are same");
}

// Checking String
let myString = "43";
console.log(myString + 3);

if (myNum === myString) {
  console.log(`yesss the same`);
} else {
  console.log(`Nahh una no relate`);
}

// Converting String to Number
console.log(Number(myString) + 2);

// Now checking Stringtxt to number
const newNumber = Number("HelloWorld");
const newNumber2 = Number("10");
const final =
  newNumber2 === 10 ? console.log("Na number o") : console.log("Not a number");
console.log(newNumber2);

//Now checking Bolean value to number
let booleanTrue = true;
let booleanFalse = false;

console.log("True: ", Number(booleanTrue));
console.log("False: ", Number(booleanFalse));

// About Number is NAN = checks Weather the Value and DataType is Number

// The global isNaN () Function determines wether a value is NaN or Not

const myName = "Dave";
console.log("Checking Number is NAN", Number.isNaN(myName));

//Global

console.log("Checking Global is NAN", isNaN(myName));
