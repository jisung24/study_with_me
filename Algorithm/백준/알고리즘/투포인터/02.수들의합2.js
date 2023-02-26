"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [number, N] = input[0].split(" ");
// console.log(input[0]);
N = Number(N); // 숫자로 바꿔준다.
console.log(`N >> ${N}`);
let arr = input[1].split(" ").map(Number);
let answer = 0;
let start = 0;
let end = 0;
let sum = arr[0];
// start가 end를 역전하면 끝...!
while (true) {
  if (sum === N) {
    answer += 1;
    console.log(`[${arr[start]}, ${arr[end]}] 사이!!`);
  }

  if (sum > N) {
    // console.log(`초과 >> ${sum}`);
    sum -= arr[start];
    start += 1;
    // console.log(`합 >> ${sum}  위치 >> [ ${arr[start]} , ${arr[end]} ]`);
  } else if (sum <= N) {
    // 그냥 작다면...!
    console.log(`합 >> ${sum}`);
    end += 1;
    sum += arr[end];
    console.log(sum);
  }

  if (start === arr.length - 1) {
    break;
  }
}
console.log(answer);

// 일단은 넘어가자..!
