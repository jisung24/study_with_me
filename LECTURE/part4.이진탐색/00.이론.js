// 장점 : 탐색이 빠르다 => O(logN)
// 10억번을 순차탐색 해야 한다면, 30번으로 줄여준다.
// 👉 단, 꼭 정렬이 되어 있어야 한다.
// 👉 매우 큰 탐색 범위를 준다. => 여기서 find나 indexOf쓰면 시간복잡도 바로 out
/**
 * 이진 탐색 함수!
 * @param {*} arr : 찾을 범위
 * @param {*} target : 찾는 값
 * @param {*} start : 범위 시작
 * @param {*} end : 범위 끝
 * @returns : 찾으면 찾은 값의 Index || 못 찾으면 -1
 */
let binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2); // 위치를 잡아준다. => start와 end가 계속 좁아짐(바뀜)

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1; // while문 밖으로 벗어나는 순간 -1 return..
};

let arr = [4, 6, 8, 10, 16, 20, 99];
console.log(
  binarySearch(arr, 24, 0, arr.length - 1) === -1 ? "없습니다" : "있습니다"
);
