"use strict";

// 2번쨰 숫자에서 j번째 숫자까지
// i + 1,   j + 1
// 2번쨰 부터 5번쨰
// index 1부터 4번까지
// i - 1부터  j까지 slice
let array = [1, 5, 2, 6, 3, 7, 4];
let command = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
let answer = [];
let solution = (array, command) => {
  command.forEach((value) => {
    let slicedArr = array.slice(value[0] - 1, value[1]).sort((a, b) => a - b);
    answer.push(slicedArr[value[2] - 1]);
  });

  return answer;
};

console.log(solution(array, command));

// array에 연산을 총 command의 길이만큼 연산을 먹일거지?
// 그럼 command의 개수 만큼 반복문을 돌려야 돼....
// array만큼 반복문 돌리고 이러지마..
// 꼭 필요한 만큼 만!!!
