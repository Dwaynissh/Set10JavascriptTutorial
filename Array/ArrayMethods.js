const foodStuffs = [
  "Rice",
  "Beans",
  "Yam",
  "Garri",
  "Poundo",
  "Plaintain",
  "Semo",
  "Salad",
  "Seafood",
  "Indomie",
  "Beef",
  "Turkey",
  ["Hii", "Chicken"],
];

const brandNewCar = [
  {
    make: "Mercedes Benz",
    model: "C-Class",
    year: 2020,
    features: [
      "Air Conditioning",
      "Power Steering",
      "Cruise Control",
      "Adaptive Braking",
      "Ambience Lighting",
    ],
    ownerNames: ["John", "Doe"],
    carMph: ["30mph", "40mph", "60mph", "80mph", "100mph"],
  },
];

// 1 Checking Pop
const checkingPop = foodStuffs[12].pop();
const checkingPop2 = brandNewCar[0].carMph.pop();

console.log("checking pop", checkingPop);
console.log("checking pop 2", checkingPop2);
