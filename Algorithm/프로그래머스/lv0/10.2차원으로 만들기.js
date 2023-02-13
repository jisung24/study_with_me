"use strict";
// num_list = [1,2,3,4,5,6,7,8];
// n = 2
// [[1,2], [3,4,]]
// 즉, 1 2 나란히 놓고
// 그 다음은 아래에 3 4 이렇게 놓으면 돼!

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;
for (let i = 0; i < arr.length / n; i++) {
  let result = [];
  result = [...result, arr.slice(i * n)];
}

console.log(Math.abs(-100));
