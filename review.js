// 1. 순위 매기기
let arr = [
  1, 2, 2, 3, 2, 2, 1, 1, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2,
  2, 3, 3, 1, 2, 3, 1, 4,
];
// 1 2 3 4 =>
// 1 2 3의 각각의 순위를 매기자...!!! (❗️동률이 있을 때는 그 만큼 2 3 위가 사라지고 4위가 바로 되는거야...!)
let hash = {}; // 빈 객체...!
for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
  hash[i] = 0;
}

// let hash = {1 : 0, 2 : 0, 3 : 0, 4 : 0}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] in hash) {
    hash[arr[i]] += 1;
    // 1 2 3 4
  }
}
console.log(hash);
// 많이 나오는 순서대로...!
// 일단 값을 다 모아서, 많이 나오는 순서대로 정렬...!
// console.log(Object.keys(hash));
console.log(Object.values(hash));
// [8, 10, 7, 2, 1];
// 값들만 가져오기..!
let voteResult = Object.values(hash).sort((a, b) => b - a);
console.log(voteResult);

// 1 : 13
// 2 : 10
// 3 : 10
// 4 : 1

// 중복제거
let setVote = Array.from(new Set(voteResult));
console.log(setVote);
// console.log(setVote);
let rank = 1;
// [1,2,3,4].filter
for (let i = 0; i < setVote.length; i++) {
  let findKey = Object.keys(hash).filter((ele) => hash[ele] === setVote[i]);
  console.log(findKey); // 1    2,3    4
  // 1 2 3 4

  console.log(`${rank}위 >> ${findKey}    득표수 >> ${setVote[i]}`);

  rank += findKey.length;
}

// hash map : 자료구조
// ==> 자바스크립트 객체
// ==> 각각 배열의 각각 모든 원소들에게 특징을 부여하고 싶을 때 씁니다...
// [1,2,3,4,5,6,7];
// 홀수 : 0, 짝수 : 0;

// 배열 반복문 ++
