"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}
// [21, "string"]
let compare = (a, b) => {
  if (a[0] !== b[0]) {
    // 나이가 다르다면..!
    return a[0] - b[0];
  } else {
    // 자 같다면... 그냥 원래대로 두면 된다!!!!
    // 기존에 나왔던 방법대로..!
    return 0; // 그냥 순서 변경 안 함 => 어차피 그대로 두면 돼!
  }
};

arr.sort(compare);
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(answer);
