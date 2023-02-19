"use strict";
// 배열 정렬 : O(n log N) : 이건 외워두자..!
// => n^2다음으로 느림...

// 리스트를 정렬을 하려면 엔로그앤이 걸리는구나...

// 투 포인터 : 포인터를 왔다갔다 하면서 사용하보는거야...!
// 투 포인터는 보통 정렬이 된 상태에서 쓰인다.

// 앞 강의에서 풀어 본 문제 그대로
// 아까는 그냥 직관적으로 모든 case를 다 생각해서 n^2으로 풀었음.
// 하지만 그럼 10^8이 되고, 분명 줄여나가야 돼....

// n로그n이나 n으로 풀어보는 연습...!

let arr = [4, 1, 9, 7, 5, 3, 16];
// 정렬을 하려면 nlogn이 걸려 이거 n2보단 적게 걸리네 해 볼 가치가 있음.
let target = 14;
let sortArr = arr.sort((a, b) => a - b);
console.log(sortArr);

let left = 0;
let right = sortArr.length - 1; // 가장 끝에 있는 값...!
let sum = 0;
let count = 0;
// 투 포인터로 다 돌기...!
while (right !== left) {
  if (sortArr[left] + sortArr[right] > 14) {
    console.log(`합 >> ${sortArr[left] + sortArr[right]} 너무 커!! 줄이자.`);
    right--; // 한 칸 앞으로...!
    sum = sortArr[left] + sortArr[right];
    console.log(`${sum}로 줄임...!!`);
  } else if (sortArr[left] + sortArr[right] < 14) {
    console.log(`sum 너무 작아... >> ${sortArr[left] + sortArr[right]}`);
    left++;
    sum = sortArr[left] + sortArr[right];
    console.log(`sum 늘림 >> ${sum}`);
  } else if (sortArr[left] + sortArr[right] === target) {
    console.log(`같은 게 나왔어....!! [ ${sortArr[left]}, ${sortArr[right]} ]`);
    break;
  }
}

// n2을 쓰지 않고,, 이런 식으로 충분히 풀 수 있어...!!!
