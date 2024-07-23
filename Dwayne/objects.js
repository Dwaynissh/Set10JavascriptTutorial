// Non-Primitive Datatypes in JavaScript: Objects and Arrays
// What are Non-Primitive Datatypes?
// Non-primitive datatypes in JavaScript include Objects and Arrays. These types allow us to store collections of data and more complex entities than primitive types like numbers, strings, or booleans.

// Objects
// Definition
// An object is a collection of key-value pairs. Each key is a string (also called a property name), and each value can be any datatype, including another object or an array.

// Creating Objects
// Objects are created using curly braces {}. Key-value pairs are defined within these braces.

// Example 1: Creating a simple object
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

// Example 2: Creating an object with different datatypes
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  features: ["Air Conditioning", "Power Steering", "Cruise Control"],
  owner: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
// Accessing Object Properties
// Properties can be accessed using dot notation or bracket notation.

// Dot notation
console.log(person.name); // Answer: John
console.log(car.make); // Answer: Toyota

// Bracket notation
console.log(person["age"]); // Answer: 30
console.log(car["model"]); // Answer: Corolla

// Nested Objects
// Objects can contain other objects as values.

let company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Techville",
    zip: "12345",
  },
  shoes: ["nike", "sketchers", "puma", "reebok"],
};

// Accessing nested object properties
console.clear();
console.log("finally showing", company.shoes[1], "and", company.address.city); // Answer: Techville
