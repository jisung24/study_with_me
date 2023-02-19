"use strict";
// targert : 14
// arr = [4,1,9,7,5,3,16];
// 저 arr에서 두 수의 합이 14가 나오면 true 아니면 false
// n^2미만으로 풀어보자!
let arr = [4, 1, 9, 7, 5, 3, 16];
let sortedArr = arr.sort((a, b) => a - b);
let target = 14;

let solution = (arr, target) => {
  let left = 0;
  let right = arr.length - 1; // 가장 끝 위치..!
  let sum = arr[left] + arr[right];
  while (true) {
    if (sum < target) {
      // 커져야 돼!
      left++;
      sum = arr[left] + arr[right];
    } else if (sum > target) {
      right--;
      sum = arr[right] + arr[left];
    } else if (sum === target) {
      console.log(`[ ${arr[left]}, ${arr[right]} ]`);
      return true;
      break;
    }
  }
};

console.log(solution(sortedArr, target));
