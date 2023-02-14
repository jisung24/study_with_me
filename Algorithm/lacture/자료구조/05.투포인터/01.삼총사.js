"use strict";
// 일단 구간이 3개여야 하니까...
// r - l을 했을 때 값이 2면 answer++
let arr = [-2, 3, 0, 2, 5];
let m = 0;
let left = 0;
let right = 0;
let sum = arr[0];
let answer = 0; // 정답 개수..!
while (right < arr.length) {
  //
  if (sum <= m) {
    if (sum < m) {
      right++;
      sum += arr[right]; // sum을 증가시켜줘..!
    } else {
      // 만약 같다면...!!!!!
      // 개수를 3개의 합으로 맞춰줘야 하기 때문에..!
      if (right - left === 2) {
        console.log(`[[[ ${left}, ${right}  ]]] 구간에서 ${m}이 나옴!!`);
        right++;
        sum += arr[right];
        answer++;
        console.log(`정답 증가 >> ${answer}`);
      } else {
        right++;
        sum += arr[right];
      }
    }
  } else {
    console.log(`${m}이 더 작아...! ${sum}`);
    // 같은 후에 right를 증가시키면 더 커져서 일러옴
    sum -= arr[left];
    console.log(`이전 left >> ${left}`);
    left++;
    console.log(`${left}번 자리로 ++됨`);
  }
}
