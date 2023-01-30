'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split(' ')
.map((value) => +value).reduce((acc, value) => acc + value);

// split을 쓰는 순간 배열이기 떄문에, [num1, num2] 구조분해 할당을 필요하면 쓸 수 있다. 
// 하지만 두 수의 합을 구하는 문제기 때문에, 
// map함수로 전체 문자열을 정수로 바꾼 후,
// reduce로 배열 전체를 더한 하나의 값으롬 만들어줬다. 

let numbers = "1 2";
// 1 2가 split이 되면 문자열로 바뀌니까 map으로 전체를 정수로 바꿔줘야한다. 
