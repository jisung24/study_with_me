// let age = 23;
// let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// let numberArr = age
//   .toString()
//   .split("")
//   .map((value) => {
//     value = Number(value);
//     return alphabet[value];
//   });
// console.log(numberArr.join(""));

let order = 296683;
let numberArr = order
  .toString()
  .split("")
  .map(Number)
  .filter((ele) => ele === 3 || ele === 6 || ele === 9);
console.log(numberArr);
Z;
