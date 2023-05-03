"use strict";

/**
 *
 * @param arr : 입력받은 배열
 * @returns : 배열의 모든 원소의 합을 return해줌.
 */
let solution = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

let arr = [1, 2, 3, 4];
console.log(solution(arr));

{
  // 풀이 2번째!
  let solution2 = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
  };

  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(solution2(arr));
}

{
  // reduce
  let arr = [1, 2, 3, 4];
  // reduce => acc, cur
  // cur : acc가 2번째 인자로 정해지지 않으면 acc는 idx 0번 숫자
  // => cur은 자동으로 index 1번 값이 된다!
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, -1); // acc의 시작 누적값을 -1로 놓고 시작하면, cur은 index 0번부터 시작해!
  console.log(sum);
}
