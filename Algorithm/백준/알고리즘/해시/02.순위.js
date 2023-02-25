// "use strict";
// // 1부터 배열에서 가장 큰 수 까지 빈도수를 각각 구하고 순위를 구해보자..

// let arr = [1, 3, 2, 4, 5, 7, 8, 9, 6, 9, 9, 4, 5, 7, 6, 3, 2, 6, 7, 8, 9];
// let hash = {};
// for (let i = 1; i <= Math.max(...arr); i++) {
//   hash[i] = 0; // 각각 초기화 해줌.!
// }

// console.log(hash);

// for (let value of arr) {
//   // hash키에 해당되는 값이 나오면 ++ 해준다.
//   if (value in hash) {
//     // 값이 key라면...
//     hash[value] += 1;
//   }
// }

// console.log(hash);

// // 일단 빈도수를 전부 배열로 한 번 만들어보자...!
// let valuesArr = Object.values(hash).sort((a, b) => b - a);
// let valueSet = Array.from(new Set(valuesArr));
// console.log(valueSet); // 값들의종류
// // 1위가 4
// // 2위가 3
// // 3위가 2
// // 4위가 1

// let rank = 1; // 0위 부터 시작..!
// for (let i = 0; i < valueSet.length; i++) {
//   //   console.log(`${i + 1}위 >> ${valueSet[i]}`);
//   let keys = Object.keys(hash).filter((ele) => hash[ele] === valueSet[i]);
//   //   console.log(keys.length);
//   console.log(`순위 >> ${rank} >> ${keys}`);
//   rank += keys.length;
// }

// // 값으로 key를 찾으면 돼..!

// // 가장 많이 나온 값
// // 1. 값들만 모아서 그걸 내림차순 정렬하면 일단 index[0]은 무조건 1위의 값일 거 아니야?
// // 그럼 그 값을 들고가서 keys중에 그 값을 갖고있는 key들이 무조건 1위지.

// ❗️ 순위 구현 끝..❗️
// 순위 연습 계속 해보자!
{
  // 투표!!!
  // 반장선거 1 2 3
  let arr = [
    1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 3, 3, 2, 2, 1, 2, 3, 1, 2, 3, 3, 2, 2, 2,
    1, 1, 1, 2, 2, 3, 3, 3, 3,
  ];
  let voteResult = {};

  // 1번 key setting해주기
  for (let i = 1; i <= Math.max(...arr); i++) {
    voteResult[i] = 0;
  }
  console.log(voteResult);

  // key에 해당하는 값을 증가시켜주기
  // 즉 투표수 계산하기..!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in voteResult) {
      voteResult[arr[i]] += 1;
    }
  }

  // 각 투표 수 >>
  let votedNums = Object.values(voteResult).sort((a, b) => b - a);
  console.log(votedNums);

  // 값의 순위를 매기고 중복을 제거함...!!
  let setVored = Array.from(new Set(votedNums));
  //   console.log(setVored);

  // 이제 해당 값에 해당하는 keys들을 찾아보자...!
  let rank = 1;
  for (i = 0; i < setVored.length; i++) {
    console.log(`${rank}등 투표 >> ${setVored[i]}`);
    let findPeople = Object.keys(voteResult).filter(
      (ele) => voteResult[ele] === setVored[i]
    );
    rank += findPeople.length;
    console.log(findPeople);
  }
}
