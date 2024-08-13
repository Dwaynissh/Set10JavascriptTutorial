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
