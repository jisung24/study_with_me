"use strict";
// 이진 탐색으로 정렬된 배열에서 특정 원소의 개수 구하기!
// 뭐 arr에서 3의 개수를 구하기!
// => 그냥 map을 사용하면 될 거 같은데..!

// 1. 메모리 측면
// 이진 탐색 : 딱 필요한 만큼의 메모리를 할당한다.
// 해시 : 해시 적중률을 높이기 위해서 필요 이상의 메모리가 할당이 된다.

// 즉, log시간 복잡도로, 정렬된 배열에서 특정 범위에 해당되는 특정 값의 개수를 구하는거야!
// ex) index 1번부터 7번까지 중 3의 개수를 구하자!
// ❗️단 정렬이 되어 있어야 돼❗️

// lowerBount로 5가 가장 처음 나타나는 Index
// upperBound 5가 가장 나중에 나타나는 index
// end => mid 즉 최대한 왼쪽으로!!!

/**
 * 해당 값이 특정 범위에서 나타나는 첫 번째 위치를 반환
 * @param {*} arr : 찾을 배열
 * @param {*} target : 찾을 값
 * @param {*} start : 탐색 시작 index
 * @param {*} end : 탐색 끝 index
 * @returns : 찾는 값이 첫 번째 나오는 위치 => indexOf와 비슷하다고 생각하면 돼!
 */
let lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

/**
 * 특정 범위에서 특정 값이 가장 마지막에 나타나는 위치 => 중요!
 * 이걸 토대로 lowerBound랑 합쳐져서 문제 풀 수 있으니까 꼭 둘이 구현을 해야 돼!
 * @param {*} arr : 찾을 배열
 * @param {*} target : 찾을 값
 * @param {*} start : 탐색 시작
 * @param {*} end : 탐색 끝
 * @returns : 🔴 찾을 값의 다음 index 🔴
 */
let upperBound = (arr, target, start, end) => {
  // lowerBound는 그냥 등호 하나만 다름
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid; // LowerBound에서 이 부분 =만 없애주면 돼!
    else start = mid + 1;
  }
  return end;
};

let countByRange = (arr, leftValue, rightValue) => {
  // 배열에서 값이 -1에서 3사이에 있는 값의 개수를 출력한다. => 정렬 돼 있는 상태!
  // 3의 위치를 찾는다.
  let rightIndex = upperBound(arr, rightValue, 0, arr.length - 1);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length - 1);

  // 즉, 어차피 순서대로 정렬이 돼 있으니까
  // 가장 큰 값 : 3의 index를 upperBound로 찾고,
  // 가장 작은 값의 왼쪽 값을 lowerBound로 찾는다
  // 그래서 빼주면 그 사이에 있는 값의 개수가 나온다.
  // ❗️계속 말 하지만 무조건 정렬이 되어 있어야 돼❗️
  return rightIndex - leftIndex;
};
let arr = [1, 2, 3, 3, 3, 3, 4, 5, 6];
console.log(lowerBound(arr, 3, 0, arr.length - 1)); // 3의 첫 번째 위치 반환!
console.log(upperBound(arr, 3, 0, arr.length - 1)); // 6번! => 즉, 가장 마지막 3의 다음 위치!
// 그래서 3의 개수는 그냥 빼주면 돼!
console.log(countByRange(arr, -1, 3)); // 6개!

{
  // lastIndexOf - indexOf와도 같음!
  // 근데 시간복잡도가 덜 걸려..!
  let arr = [1, 2, 3, 4, 4, 4, 6, 6, 6, 7, 8, 9];
  // 3이상 8이하인 숫자의 개수!
  let last = arr.lastIndexOf(8);
  let first = arr.indexOf(3);
  console.log(last - first + 1); // <= 이기 때문이다. => upperBount는 <라서 +1 안 해줘도 됨!
}
