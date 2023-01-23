'use strict';
// [3, 1, 4, 3, 2]
// 1번 3분 
// 2번 3 + 1분 
// 3번 => 8분 
// 4번 => 11분 
// 5번 => 13분 

// 총 => 3 + 4 + 8 + 11 + 13 = 39분 걸림!!!!!

// [1, 2, 3, 3, 4]
// 1번 1분 
// 2번 1 + 2 = 3분 
// 3번 6분 
// 4번 9분 
// 5번 13분 

// 총 32분! 
let [number, arr] = require('fs').readFileSync('test.txt').toString().split('\n');
let array = arr.split(' ').map((value) => +value);
let sortArr = array.sort((a, b) => a - b);
// [1, 2, 3, 3, 4]
// 1번 1분 
// 2번 1 + 2 = 3분 
// 3번 6분 
// 4번 9분 
// 5번 13분 

let numbers = 0;
for(let i = 0; i < sortArr.length; i++) {
    console.log(`===== << ${sortArr[i]} >> ======`); 
    // 4니까....  3 + 1 + 4
    for(let j = 0; j <= i; j++) {
        numbers += sortArr[j]; // 기존 값 1 + 1 + 2
        // 4 + 
    }
    console.log(`number 중간점검 >> ${numbers}`);
}
console.log(numbers);