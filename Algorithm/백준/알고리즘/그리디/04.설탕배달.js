"use strict";
// 이거 그리디 문제 아님!!
// 6은 3 2개로 나타낼 수 있지만 그리디라면 무조건 5를 사용했을 거 같아.

let totalKG = Number(require("fs").readFileSync("dev/stdin").toString());
let typeOfKG = [5, 3];
let totalCount = 0;

for (let kg of typeOfKG) {
  let count = 0;
  if (kg > totalKG) {
    continue;
  } else {
    // 만약 5kg이랑 같거나 작아....
    count += Math.floor(totalKG / kg);
    totalKG -= kg * count;
    totalCount += count;
    console.log(`${kg}짜리 개수 >> ${count}`);
    console.log(`총 무게 >> ${totalCount}`);
    console.log(`남아있는 무게 >> ${totalKG}`);
  }
}
if (totalKG !== 0) {
  console.log(-1);
} else {
  console.log(totalCount);
}
