let s = "1 2 Z 3";

let sArr = s.split(" ").map((value) => {
  if (isNaN(value) === false) {
    return Number(value);
  } else {
    return value;
  }
});
let stack = [];

for (let value of sArr) {
  console.log(value);
  if (value === "Z") {
    stack.pop();
  } else {
    stack.push(value);
  }
}
console.log(stack);
