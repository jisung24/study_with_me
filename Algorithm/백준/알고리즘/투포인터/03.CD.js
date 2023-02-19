"use strict";
// 둘이 동시에 갖고있는 cd의 개수를 구하여라.
// n = 1000000
// 무조건 n으로만 풀어야 한다...!
// 그럼 sort를 쓰지 말아볼까....?
// 맞아 sort가 n로그n이야... 하....
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [numbers, ...arr] = input;
let [leftCnt, rightCnt] = numbers.split(" ").map(Number);

arr.pop();
let leftArr = [];
let rightArr = [];

// n
for (let i = 0; i < leftCnt; i++) {
  leftArr.push(+arr[i]);
}

// n
for (let i = leftCnt; i < arr.length; i++) {
  rightArr.push(+arr[i]);
}

let left = 0;
let right = 0;
let count = 0;
while (right < rightArr.length) {
  if (leftArr[left] === rightArr[right]) {
    console.log(`[ ${leftArr[left]}, ${rightArr[right]} ]`);
    left++;
    right++;
    // 하나 더 늘려준다...!
    count++;
  } else if (leftArr[left] < leftArr[right]) {
    left++;
  } else if (leftArr[left] > leftArr[right]) {
    right++;
  }
}
