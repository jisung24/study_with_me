"use strict";
// 역시 모든 원소들의 값에 특징이 필요해!
// 따라서 이건 해시로 푸는 것이 훨씬 빠름.
let scores = [87, 89, 92, 100, 76]; // 이 순서를 변경하지 않은 채로
// 저 점수에 대한 등수를 출력해줘야 해!
// 그러니까 정렬을 하되 원본을 상하게 하면 안 돼 => 깊은 복사를 진행해줘야 해!

// 등수를 쉽게 매길 수 있게
let copyArr = [...scores].sort((a, b) => b - a);
let stu = {}; // 해시로 풀어줌

for (let i = 0; i < copyArr.length; i++) {
  stu[copyArr[i]] = i + 1;
}
console.log(stu);

// scores속성의 값을 차례대로 출력해주면 돼!!
let answer = [];

for (let value of scores) {
  if (value in stu) {
    answer.push(stu[value]);
  }
}
console.log(answer.join(" "));
