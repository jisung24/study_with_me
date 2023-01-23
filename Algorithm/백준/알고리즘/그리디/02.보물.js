'use strict';
const input = require('fs').readFileSync('test.txt').toString().split('\n');
let [arrLength, arrA, arrB] = input;

let number = +arrLength; // 5
let a = arrA.split(' ').map((value) => +value)
let b = arrB.split(' ').map((value) => +value)
let copyA = [...a].sort((a, b) => a - b); // 오름차순으로 정렬! 
let copyB = [...b].sort((a, b) => b - a); // 내림차순으로 정렬! 

// 숫자를 b대로 count해야돼..!
let sumOfArr = 0;
for(let i = 0; i < number; i++) {
    // 문제상에서 b건드려도 상관없어!!!!
    sumOfArr += (copyB[i] * copyA[i]);
}
console.log(sumOfArr);