"use strict";
// 이진 탐색은 그냥 어디에 존재하는지, 하지 않는지 만을 반환.
// 하지만 해당 원소가 몇 개 존재하는지를, 이진 탐색으로 파악하려면?

// lowerBound(arr, 찾을 값)
// upperBound)

let lowerBount = (arr, target, start, end) => {
  while (start < end) {
    // start가 end보다 작으면 계속 반복해줘..!ㅜ
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1; // 즉 target과 다르다면..!
    // mid + 1값이 된다.
  }
  return end;
};
