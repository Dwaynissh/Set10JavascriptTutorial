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

const nname = "Hello";
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
console.log("Map3 = ", checkAges);

let x = "YXZ";
let user = "XYz";

const ourFunction = (x, y) => {
  let xSplit = x.split("");
  let userSplit = y.split("");

  let resultUser = userSplit.sort().join("").toUpperCase();
  let resultX = xSplit.sort().join("").toUpperCase();

  console.clear();

  if (resultUser === resultX) {
    return true;
  } else {
    return false;
  }
};

// console.log(ourFunction(x, user));

let a = [1, 4, 3, 7, 11, 19, 15];

// console.log(
//   a.map((el) => {
//     return el;
//   })
// );

// console.log(
//   a.sort((a, b) => {
//     return b - a;
//   })
// );

// console.log(
//   a.filter((el) => {
//     return el !== 1;
//   })
// );

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
  let a = arr.filter((el) => {
    return el.name === user;
  });

  return a;
};
console.clear();

const remove = (arr, id) => {
  let a = arr.filter((el) => {
    return el.id !== id;
  });

  return a;
};

console.log(
  entry
    .map((el) => {
      return el.name;
    })
    .sort()
);

let xx = Array.from({ length: 10 }, () => {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@^%";

  let score = Math.round(Math.random() * 100);
  let a1 = Math.round(Math.random() * a.length);

  // return { name: ${a[a1]}, score },
});

console.log(xx);
