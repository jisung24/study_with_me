"use strict";
// 이진 탐색
// 정렬을 먼저 한 후에,
// 탐색 범위를 절반씩 좁혀간다.
// logN만큼 걸린다 (N)도 안 걸림

// left min right가 전부 같은 위치를 가리킨다면 끝!

// 중간지점을 찾아서
// 중간지점보다 찾는 값이 크다면 left를 중간지점으로 바꿔줘.

// ⭐️ 이진 탐색 ⭐️
// 1. 매우 넓은 탐색 범위에서 최적의 해를 찾아야 하는 경우
// 2. 데이터를 정렬한 뒤에 다수의 쿼리를 날려야 하는 경우

/**
 *
 * @param {*} arr : 이진 탐색을 돌 배열
 * @param {*} target : 찾고자 하는 값
 * @param {*} start : 탐색 시작 idx
 * @param {*} end : 탐색 끝 idx
 */
let binarySearch = (arr, target, start, end) => {
  if (start > end) return -1; // 배열 길이 0;
  // return 이 없다면 그냥 else써줘!
  let mid = parseInt((start + end) / 2);
  // 찾은 경우 중간 index를 반환함.
  // 만약 4랑 8번이면 6번을 반환해야해서 start + end / 2임
  // 내림은 Math.floor()안 쓰고 그냥 parseInt사용함.
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  else return binarySearch(arr, target, start, mid - 1);
};

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17]; // 13찾으면 index 6번 return
console.log(binarySearch(arr, 13, 0, arr.length - 1)); // 즉 찾는 index를 반환한다.
