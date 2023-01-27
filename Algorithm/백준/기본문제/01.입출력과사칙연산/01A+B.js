'use strict';
const [num1, num2] = require('fs').readFileSync('test.txt')
.toString()
.split(' ')
.map((value) => +value);
// 구조분해할당! 
// -> 객체 or 배열이라면 무조건 쓸 수 있다. 
// -> 그래서 만약 split으로 배열로 바꾼 순간!!! => 배열의 구조분해할당을 쓸 수 있게 되는거야!
console.log(num1 + num2);


// 정리 
// 구조분해할당, spread연산자! 
