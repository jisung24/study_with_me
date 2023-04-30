let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [node, edge] = input[0].split(" ").map(Number);
console.log(node, edge);

console.log(parseInt(4.555)); // 4
let arr = ["adwda", "nba", "huygf"];

let answer = arr.map((v) =>
  v
    .split("")
    .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()))
    .join("")
);
console.log(answer);

{
  let answer = "";
  let arr = ["q", "b", "c"];
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  console.log(answer);

  {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let filterArr = arr.filter((e, i) => e % 2 === 0);
    console.log(filterArr);
  }
}

{
  let hello = {
    dev() {
      console.log("dwdawadaw");
    },
    name: "wltjd",
  };

  let arr = [1, 2, 3];
  arr[100] = 500;
  console.log(arr[4]);
}
