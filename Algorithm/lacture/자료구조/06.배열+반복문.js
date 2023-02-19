"use strict";
// 배열 : 순서가 있는 자료구조
// 값이 연속적으로 저장이 되어 있어서, 반복문을 사용해서 접근이 가능하다.

// 정수가 저장된 배열 nums가 주어졌을 때 nums의 원소 중 두 숫자를 더해서 target이 될 수 있으면 true
// 아니면 false return
// ❗️단 같은 원소를 2번 사용할 수 없습니다❗️

// 1. 단순화해서 생각을 해 보기..!
// 일일히 다 더해보자...!
/**
 *
 * @param {*} arr : 입력받을 배열
 * @param {*} target : 배열의 원소 중 두 원소가 더해져서 나와야 할 값
 * @returns target이 나온다면 true 아니라면 false
 */
let solution = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true; // 여기를 한 번이라도 왔다면 무조건 true를 return해줘,...
      }
    }
  }
  return false; // 저기를 들리지 않았다면 무조건 false를 return해줘...!
};
let arr = [4, 1, 9, 7, 5, 3, 16];
let target = 14;

console.log(solution(arr, target));
