// 1. 순위 매기기
// => 반장선거
{
  let arr = [1, 2, 3, 2, 2, 1, 1, 3, 4, 1, 2, 1, 2, 3, 4, 4, 3, 2, 1, 4, 4, 4];
  let voted = {};

  for (let i of arr) {
    voted[i] = 0;
  }

  // 각 count에 대해서..!
  for (let i = 0; i < arr.length; i++) {
    if (toString(arr[i]) in voted) {
      arr[i] += 1;
    }
  }

  console.log(voted);
}
