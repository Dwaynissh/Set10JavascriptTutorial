// PLAIN METHODS
// 1. Length
const paragraph =
  "I am a boy and i attend codelab training academy where i learn how to code javascript";

console.log("checking .length = ", paragraph.length);
// It Returns Number of the total amount of characters inside a string including white spaces

// 2. Tolowercase
const personalEmail = "princejohn@mail.com";

console.log("checking .toLowerCase = \n", personalEmail.toLowerCase());
// It Returns the target characters inside a string in lowercases

// 3. ToUppercase
const companyEmail = "princejohn@codelaborganization.com";

console.log("checking .toLowerCase = \n", companyEmail.toUpperCase());
// It Returns the target characters inside a string in Uppercases

// 4. Trim, TrimEnd, TrimStart
const text = " Hello and you are all welcome to codelab todayy ";
console.log("checking .trim = \n", text.trim());
// It Returns the target characters inside a string while removing whitespaces from both ends of a string
console.log("\n");
console.log("checking .trimStart = \n", text.trimEnd());
// It Returns the target characters inside a string while removing whitespace from the beginning of a string.
console.log("\n");
console.log("checking .trimEnd = \n", text.trimStart());
// It Returns the target characters inside a string while removing whitespace from the end of a string.

// 5. valueOF
const textII = " Lets work and try to achieve great things ";
console.log("checking .valueOF = \n", textII.valueOf());
// It Returns the target characters inside a string while removing whitespaces from both ends of a string

// ARGUMENT METHODS
// 6. charAT and charCodeAT
const aboutJS =
  "Javascript is a dynamic programming language used to build interactive web applications";

console.log("checking .charAT =", aboutJS.charAt(2));
// It Returns the target character inside a string whose index was passed as an argument.
console.log("checking .charCodeAT =", aboutJS.charCodeAt(2));
// It Returns the unicode value of the target character inside a string whose index was passed as an argument.

// 7. concat
const aboutJSII = " it is the engine of your web application";
const myName = "Prince";
const mySurName = "John";
const at = "@";
const company = "codelab";
const end = ".com";
const finalEmail = myName
  .concat(mySurName)
  .concat(at)
  .concat(company)
  .concat(end)
  .toLowerCase();

console.log("checking .concat = \n", aboutJS.concat(aboutJSII));
console.log("\n");
console.log("checking .concat = \n", finalEmail);
// It Returns Two or more strings joined together

// 8. split
const valuedGuests =
  "Daniel and Chioma are our distinguised guests for the charity event";

console.log("checking .split =", valuedGuests.split(","));
// It Returns an Array Splitted into substrings.
// Can Split by Space, Comma or, String.

// 9. slice
const eventTime = "The charity event starts at 11:00am prompt";

console.log("checking .slice =", eventTime.slice(0, 4));
// It Returns a sliced out section of a string
// Can slice by startIndex and endIndex

// 10. startsWith & endsWith
const agenda =
  "The charity event agenda is to rais money for rural communities";

console.log("checking .startsWith =", agenda.startsWith("The"));
// It Returns Boolean, whether the string starts with the characters of a specified string or not.
// Pass a string as your argument

console.log("checking .endsWith =", agenda.endsWith("communities"));
// It Returns Boolean, whether the string ends with the characters of a specified string or not.
// Pass a string as your argument

// 11. replace & replaceAll
const simpleEssay =
  "He was held at gunpoint at the bus-stop. Thank God the police interverned and he was safe. He is now at home";

console.log("checking .replace =", simpleEssay.replace("He", "2pac"));
// It Returns a String which is Replaced specified value just once
// Pass a searchString and ReplacementString as your argument
console.log("\n");
console.log("checking .replaceAll =", simpleEssay.replaceAll("at", "with"));
// It Returns a String which is Replaced specified value all occurences.
// Pass a searchString and ReplacementString as your argument

// 11. repeat
const essayII = "She was held at gunpoint";

console.log("checking .repeat =", essayII.repeat(3));
// It Returns a String which is duplicated to the amount of times you passed in the argument
// Pass a number as your argument

// 12. indexof and lastIndexOf
const welcome =
  "Welcome service to NEXT Technology company, How can we be of service";

console.log("checking .indexOf =", welcome.indexOf("service"));
// Returns the index of the first occurrence of the specified value.
// Pass a string you want to check the index
console.log("\n");
console.log("checking .lastIndexOf =", welcome.lastIndexOf("service"));
// Returns the index of the last occurrence of the specified value. occurences.
// Pass a string you want to check the index

console.clear();

// 13. includes
const finale = "This is where we will end our Js class today";

console.log("checking .includes =", finale.includes("where"));
// Determines whether the string contains the characters of a specified string. Returns Boolean
// Pass a string as your argument
