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
  ["Potato", "Chicken"],
];

const ingriedients = ["Curry", "Thyme", "Maggi"];

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

// 6. Join
const checkingJoin = foodStuffs.join("|");
console.log("Checking Join Return Type: ", checkingJoin);
__;
const checkingJoin2 = brandNewCar[0].features.join("/");
console.log("Checking Join Return Type: ", checkingJoin2);

// 5 Concat
// let checkingConcat = foodStuffs.concat(ingriedients);
// console.log("Checking concat Return Type: ", checkingConcat);

// const firstConcat = brandNewCar[0].ownerNames;
// const secondConcat = brandNewCar[0].carMph;
// console.log("Second Concat Method", firstConcat.concat(secondConcat));

// const thirdConcat = brandNewCar[0].features.concat(firstConcat, secondConcat);
// console.log(thirdConcat);

// 4 Unshift
// const checkingUnshift = foodStuffs.unshift("Cornflakes");
// console.log("Unshift Return Type: ", checkingUnshift);

// const checkingUnshift2 = brandNewCar[0].ownerNames.unshift("Emma", "Sixtus");
// console.log(checkingUnshift2);
// console.log(brandNewCar);

// 3 Shift
// const checkingShift = foodStuffs.shift();
// console.log("Shift Return Type: ", checkingShift);

// console.clear();
// const checkingShift2 = brandNewCar[0].features.shift();
// console.log(checkingShift2);
// console.log(brandNewCar);

// 2 Push
// const checkingPush = foodStuffs.push("cornflakes", "Oats");
// console.log(checkingPush);
// console.log(foodStuffs);
// console.clear();
// const checkingPush2 = brandNewCar[0].features.push("touchscreen", "Led lights");
// console.log("Push Return Type: ", checkingPush2);
// console.log("Push Update: ", brandNewCar);

// 1 Pop
// console.log("Foodstuffs ", foodStuffs);

// const checkingPop = foodStuffs[12].pop();

// console.log("Cheking Pop1", checkingPop);

// console.log("Checking Foodstuffs", foodStuffs);
// const checkingPopII = foodStuffs[12].pop();

// console.log(checkingPopII);

// console.log(foodStuffs.pop());

// console.log(foodStuffs);

// const checkingPop2 = brandNewCar[0].carMph.pop();
// console.log("Checking Second Pop Example= ", checkingPop2);
// console.log("Checking Second Pop Example= ", brandNewCar);
