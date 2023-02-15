"use strict";
// javascript에서 배열을 쓰기 위해선 써야한다.

// 배열을 만드는 방법.
let arr = Array.from({ length: 10 }, (_, i) => i + 1);

arr.push(3); // O(1)
arr.splice(1, 3);
console.log(arr);
