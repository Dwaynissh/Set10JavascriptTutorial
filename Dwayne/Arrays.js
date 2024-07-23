// Arrays
// Definition
// An array is an ordered list of values. Each value is called an element, and elements can be of any datatype.

// Creating Arrays
// Arrays are created using square brackets []. Elements are defined within these brackets, separated by commas.

// Example 1: Creating a simple array
let fruits = ["Apple", "Banana", "Cherry"];

// Example 2: Creating an array with different datatypes
let mixedArray = [42, "Hello", true, null, { Address: "Lekki" }, [1, 2, 3]];

// Accessing Array Elements
// Elements are accessed using their index, which starts at 0.
console.log(fruits[0]); // Output: Apple
console.log(mixedArray[3]); // Output: null
console.log(mixedArray[4].Address); // Output: lekki
console.log(mixedArray[5]); // Output: lekki

// Nested Arrays
// Arrays can contain other arrays as elements.
let nameof = "boluwatife";
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  {
    name: "prince",
    subject: "javascript",
    isAlive: true,
  },
  nameof,
];

// Accessing elements in nested arrays
console.log(matrix[2][0], "And", matrix[3].name, "And", matrix[4]); // Output: 6
