// Binary Search (이진 탐색)
// 장점 : 탐색 속도 O(logN)
// - 10억개 중 가장 마지막 data를 순차적으로 찾으면 10억번의 연산
// - 🟡 하지만 이진탐색은 30번이면 돼 🟡

// 1. 전체 탐색 범위를 정한다. (start end)
// 2. middle => parseInt((start + end) / 2)

// 3. middle보다 더 클 경우 => left를 middle + 1
// -- 더 작을 경우 end => middle - 1

{
  /**
   * 🔴 이분 탐색 함수 🔴
   * @param {*} arr : 탐색 범위!
   * @param {*} target : 찾는 값
   * @param {*} start : 시작 탐색 index
   * @param {*} end : 탐색 끝 index
   * @returns : 찾은 값의 index
   */
  // let binarySearch = (arr, target, start, end) => {
  //   if(start > end) return -1; // start mid end가 똑같이 모일 때가 있는데,
  //   // 값이 없다면 start가 mid + 1로 가는데, end는 mid니까 start가 end를 넘어선다..
  //   let mid = parseInt((start + end) / 2);

  //   if (target === arr[mid]) return mid; // 찾은 index return
  //   else if(target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
  //   else return binarySearch(arr, target, start, mid - 1);
  //   // if ===했고, > 했으니까 <밖에 안 남음 ==> else에선 <
  // };

  // while문을 이용!
  let binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      //
      let mid = parseInt((start + end) / 2);

      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) end = mid - 1; // 왼쪽으로 감
      else start = mid + 1;
    }
    return -1; // start > end
  };

  console.log(
    binarySearch([1, 2, 3, 4], 3, 0, [1, 2, 3, 4].length - 1) + 1,
    "번째에 있습니다!"
  );
  // 순서 번째니까 return값에다가 +1 해줘야 함.
}
