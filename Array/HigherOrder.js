const students = [
  {
    name: "Alice",
    age: 22,
    scores: { math: 85, english: 92, science: 88 },
    courses: ["Math", "English", "Science"],
  },
  {
    name: "Bob",
    age: 24,
    scores: { math: 78, english: 85, science: 90 },
    courses: ["Math", "History", "Science"],
  },
  {
    name: "Charlie",
    age: 23,
    scores: { math: 92, english: 88, science: 95 },
    courses: ["Math", "English", "Art"],
  },
  {
    name: "David",
    age: 25,
    scores: { math: 95, english: 82, science: 80 },
    courses: ["Math", "English", "Science", "Art"],
  },
];

//Some

const checkArt = students.some((el) => el.age === 25);
console.log("Checking Some", checkArt);

// Map
const checkingNames = students.map((student) => {
  const getNames = student.name;
  return getNames;
});

const checkingScores = students.map((student) => {
  return student.scores;
});

const getNameandScore = students.map((student) => {
  return { name: student.name, score: student.scores, course: student.courses };
});

const checkAges = students.map((student) => {
  return student.courses.length;
});

// console.log("Map1 = ", checkingNames);
// console.log("Map2 = ", checkingScores);
// console.log("Map3 = ", getNameandScore);
// console.log("Map3 = ", checkAges);

let x = "YXZ";
let user = "XYz";

const ourFunction = (x, y) => {
  let xSplit = x.split("");
  let userSplit = y.split("");

  let resultUser = userSplit.sort().join("").toUpperCase();
  let resultX = xSplit.sort().join("").toUpperCase();

  if (resultUser === resultX) {
    return true;
  } else {
    return false;
  }
};

// console.log("reading", ourFunction(x, user));

let a = [1, 4, 3, 7, 11, 19, 15];

// console.log(
//   "Applying Map",
//   a.map((el) => {
//     return el;
//   })
// );

console.log();

// console.log(
//   "Applying Sort",
//   a.sort((a, b) => {
//     return b - a;
//   })
// );

// console.log(
//   "Applying Filter",
//   a.filter((el) => {
//     return el < 5;
//   })
// );

console.log();

let entry = [
  {
    id: 1,
    name: "Mije",
    age: 20,
  },
  {
    id: 2,
    name: "Gift",
    age: 10,
  },
  {
    id: 5,
    name: "Gift",
    age: 15,
  },
  {
    id: 4,
    name: "Gift",
    age: 7,
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
  },
];

const search = (arr, user) => {
  let searchResults = arr.filter((el) => {
    return el.name === user;
  });

  return searchResults;
};

// console.log("Filter Search", search(entry, "John Doe"));

const remove = (arr, id) => {
  let removedUser = arr.filter((el) => {
    return el.id !== id;
  });

  return removedUser;
};

// console.log("Filter Remove: ", search(entry, 1));

// console.log(
//   entry
//     .map((el) => {
//       return el.name;
//     })
//     .sort()
// );

let xx = Array.from({ length: 10 }, () => {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@^%";

  let score = Math.round(Math.random() * 100);
  let randomNames = Math.round(Math.random() * letters.length);

  return `${randomNames} ${score}`;
});

// console.log(xx);
